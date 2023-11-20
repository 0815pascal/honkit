const fs = require('fs');
const Handlebars = require('handlebars');
const path = require('path');

// Read and compile the template
const templateSource = fs.readFileSync(path.join(__dirname, '_layouts', 'dynamic_template.hbs'), 'utf8');
console.log("Template Source:", templateSource);

Handlebars.registerHelper('renderProperties', function(properties, options) {
  if (!properties || !Array.isArray(properties)) {
    return ''; // Early exit
  }

  console.log("Properties at current level:", properties);  // DEBUG: To see what properties are being processed

  let output = '';
  for (const element of properties) {
    const property = element;
    const requiredFlag = property.required ? '<span class="required">*</span>' : '';

    if (property.type === 'object' && property.properties) {
      output += `<details open=""><summary><span class="title">${property.title}${requiredFlag}</span><span class="type">${property.type}</span></summary>`;
      output += `<div class="nested">`;
      // Explicitly invoking the helper with the new context
      output += Handlebars.helpers.renderProperties(property.properties, options);
      output += `</div></details>`;
    } else if (property.type.startsWith('array') && property.properties) {
      output += `<details open=""><summary><span class="title">${property.title}${requiredFlag}</span><span class="type">${property.type}</span></summary>`;
      output += `<div class="nested">`;
      // Only type of nested array properties should be rendered
      output += `<div><p class="type">${property.properties.type}</p></div>`;
      output += `</div></details>`;
    } else {
      output += `<div><p class="type"><span class="title">${property.title}${requiredFlag}</span>${property.type}</p></div>`;
    }
  }

  return new Handlebars.SafeString(output);
});






const template = Handlebars.compile(templateSource);

module.exports = {
  book: {
    assets: './assets',
    js: ['js/formHandler.js'],
    css: ['style.css']
  },
  hooks: {
  "init": function() {
            // Paths for the new Markdown file and SUMMARY.md
            const mdFilePath = path.join(this.resolve(''), 'jsonCreator.md');
            const summaryPath = path.join(this.resolve(''), 'SUMMARY.md');

            // Content for the new Markdown file
            const mdContent = '# JSON Creator\n\n{% include "./honkit-plugin-api-documentation/_layouts/form.hbs" %}';
            const summaryLink = '\n* [JSON Creator](jsonCreator.md)';

            // Check if the Markdown file already exists
            if (!fs.existsSync(mdFilePath)) {
                fs.writeFileSync(mdFilePath, mdContent);
            }

            // Check if the link is already in SUMMARY.md
            const summaryContent = fs.readFileSync(summaryPath, 'utf-8');
            if (!summaryContent.includes(summaryLink.trim())) {
                fs.appendFileSync(summaryPath, summaryLink);
            }
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
        console.log(markerContent.trim())
          data = JSON.parse(markerContent.trim());
        } catch (error) {
          console.error('Error parsing JSON for dynamic template:', error);
          break;
        }

        const dynamicContent = template({
          title: data.title,
          method: data.method,
          baseUrl: data.baseUrl,
          path: data.path,
          apiTitle: data.apiTitle,
          description: data.description,
          paramName: data.paramName,
          required: data.required,
          type: data.type,
          paramDescription: data.paramDescription,
          responses: data.responses  // Assume this is an array of objects
        });

        content = beforeMarker + dynamicContent + afterMarker;
      }

      page.content = content;
      return page;
    }
  },
  filters: {}
};