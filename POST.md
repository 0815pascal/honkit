---
description: Convention
---

# POST-Request

Your markdown content here.

<!-- API_START -->
{
  "swagger": "2.0",
  "info": {
    "title": "sohoGfallStorno APIs",
    "description": "APIs available for sohoGfallStorno",
    "version": "1.0.0"
  },
  "host": "kkidev.dev.axa-ch.intraxa:8443",
  "schemes": [
    "https"
  ],
  "basePath": "/rest/kuk/v1/sohoGfallStorno",
  "tags": [
    {
      "name": "sohoGfallStorno APIs",
      "description": "APIs available for sohoGfallStorno"
    }
  ],
  "definitions": {
    "WINP": {
      "type": "object",
      "properties": {
        "BOOKREFDB": {
          "type": "number"
        },
        "BOOKREFCR": {
          "type": "number"
        },
        "USERID": {
          "type": "string",
          "maxLength": 7
        }
      }
    },
    "WOUT": {
      "type": "object",
      "properties": {
        "RESPONSECODE": {
          "type": "number"
        },
        "RESPONSETEXT": {
          "type": "string",
          "maxLength": 100
        }
      }
    },
    "WEB811Result": {
      "type": "object",
      "properties": {
        "WOUT": {
          "type": "object",
          "properties": {
            "RESPONSECODE": {
              "type": "number"
            },
            "RESPONSETEXT": {
              "type": "string",
              "maxLength": 100
            }
          }
        }
      }
    }
  },
  "paths": {
    "/": {
      "post": {
        "tags": [
          "sohoGfallStorno APIs"
        ],
        "operationId": "WEB811",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "body",
            "in": "body",
            "required": true,
            "schema": {
              "type": "object",
              "properties": {
                "BOOKREFDB": {
                  "type": "number"
                },
                "BOOKREFCR": {
                  "type": "number"
                },
                "USERID": {
                  "type": "string",
                  "maxLength": 7
                }
              }
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful operation",
            "schema": {
              "type": "object",
              "properties": {
                "WOUT": {
                  "type": "object",
                  "properties": {
                    "RESPONSECODE": {
                      "type": "number"
                    },
                    "RESPONSETEXT": {
                      "type": "string",
                      "maxLength": 100
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Unexpected exception"
          }
        }
      }
    }
  }
}
<!-- API_END -->