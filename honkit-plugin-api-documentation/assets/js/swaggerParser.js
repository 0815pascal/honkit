const SwaggerParser = require("swagger-parser");

async function dereferenceOpenAPI() {
  const input = document.getElementById("openapi-input").value;
  try {
    const api = await SwaggerParser.dereference(JSON.parse(input));
    document.getElementById("output").textContent = JSON.stringify(
      api,
      null,
      2
    );
  } catch (error) {
    document.getElementById("output").textContent = "Error: " + error.message;
  }
}

window.dereferenceOpenAPI = dereferenceOpenAPI;
