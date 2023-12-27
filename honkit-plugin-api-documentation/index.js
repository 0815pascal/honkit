const fs = require('fs');
const Handlebars = require('handlebars');
const path = require('path');
const {getMethod, getParameters, getResponses} = require('./helpers')

// Read and compile the template
const templateSource = fs.readFileSync(path.join(__dirname, '_layouts', 'dynamic_template.hbs'), 'utf8');
console.log("Template Source:", templateSource);

Handlebars.registerHelper("renderProperties", function (properties, options) {
  if (!properties || typeof properties !== "object") {
    return ""; // Early exit if not an object
  }

  console.log("Properties at current level:", properties); // DEBUG

  let output = "";
  for (const [key, property] of Object.entries(properties)) {
    const requiredFlag = property.required
      ? '<span class="required">*</span>'
      : "";

    if (property.type === "object" && property.properties) {
      const maxLength = property?.maxLength ? `(${property?.maxLength})` : "";
      output += `<details>\n<summary>\n<span class="title">${key}${requiredFlag}</span>\n<span class="type">${property.type}${maxLength}</span></summary>`;
      output += `<div class="nested">\n`;
      output += Handlebars.helpers.renderProperties(
        property.properties,
        options
      );
      output += `\n</div></details>\n`;
    } else if (
      property.type === "array" &&
      property.items &&
      property.items.properties
    ) {
      const maxItems = property?.maxItems ? `(${property?.maxItems})` : "";
      output += `<details>\n<summary>\n<span class="title">${key}${requiredFlag}</span>\n<span class="type">${property.type}${maxItems}</span></summary>`;
      output += `<div class="nested">\n`;
      output += Handlebars.helpers.renderProperties(
        property.items.properties,
        options
      );
      output += `\n</div></details>\n`;
    } else {
      const maxLength = property?.maxLength ? `(${property?.maxLength})` : "";
      output += `<div>\n<p class="type">\n<span class="title">${key}${requiredFlag}</span>${property.type}${maxLength}</p></div>`;
    }
  }

  return new Handlebars.SafeString(output);
});



const template = Handlebars.compile(templateSource);

module.exports = {
  book: {
  assets: './assets',
  js: [ 'js/formHandler.js'],
  css: ['style.css']
},
  hooks: {
  "init": function() {
  },
  'page:before': async function(page) {
    const markerStart = '<!-- DYNAMIC_TEMPLATE_START -->';
    const markerEnd = '<!-- DYNAMIC_TEMPLATE_END -->';
    let content = page.content;

    while (content.indexOf(markerStart) !== -1) {
      const start = content.indexOf(markerStart);
      const end = content.indexOf(markerEnd, start);

      if (end === -1) {
        break;
      }

      const beforeMarker = content.slice(0, start);
      const afterMarker = content.slice(end + markerEnd.length);
      const markerContent = content.slice(start + markerStart.length, end);

      let data;
      try {
        console.log(markerContent.trim());
        data = JSON.parse(markerContent.trim());
      } catch (error) {
        console.error('Error parsing JSON for dynamic template:', error);
        break;
      }

      const parameters = getParameters(data, "/{input}");
      const responses = getResponses(data, "/{input}");
      const paramName = `${parameters?.name}`;

      const dynamicContent = template({
        apiTitle: data?.info?.title,
        method: getMethod(data, "/{input}"),
        baseUrl: data.schemes[0] + "://" + data?.host + data?.basePath,
        path: parameters?.name && `/{${parameters?.name}}`,
        description: data?.info?.description,
        paramName: paramName,
        required: parameters?.required ? "*" : "",
        type: parameters?.type,
        paramDescription: parameters?.maxLength ? `max. length: ${parameters?.maxLength }` : "--",
        responses: data.responses ?? responses, // Assume this is an array of objects
      });
      content = beforeMarker + dynamicContent + afterMarker;
    }

    page.content = content;
    return page;
  }
},
  filters: {}
};