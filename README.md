# Test

Your markdown content here.

<!-- DYNAMIC_TEMPLATE_START -->
{
  "swagger": "2.0",
  "info": {
    "title": "policyGeneralData APIs",
    "description": "APIs available for policyGeneralData",
    "version": "1.0.0"
  },
  "host": "kkiprod.axa-ch.intraxa:443",
  "schemes": [
    "https"
  ],
  "basePath": "/rest/kuk/v1/policyGeneralData",
  "tags": [
    {
      "name": "policyGeneralData APIs",
      "description": "APIs available for policyGeneralData"
    }
  ],
  "paths": {
    "/{input}": {
      "get": {
        "tags": [
          "policyGeneralData APIs"
        ],
        "operationId": "WEB604",
        "consumes": [
          "*/*"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "input",
            "in": "path",
            "required": true,
            "type": "string",
            "maxLength": 300
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
                    "QUANTITY": {
                      "type": "number"
                    },
                    "RESPONSECODE": {
                      "type": "number"
                    },
                    "POLICY": {
                      "type": "number"
                    },
                    "NLE": {
                      "type": "string",
                      "maxLength": 20
                    },
                    "PARTNR": {
                      "type": "number"
                    },
                    "UID": {
                      "type": "string",
                      "maxLength": 15
                    },
                    "DRNR": {
                      "type": "number"
                    },
                    "POLICYADDRESS": {
                      "type": "object",
                      "properties": {
                        "CORPORATENAME": {
                          "type": "string",
                          "maxLength": 120
                        },
                        "STREET": {
                          "type": "string",
                          "maxLength": 90
                        },
                        "POSTALCODE": {
                          "type": "string",
                          "maxLength": 20
                        },
                        "CITY": {
                          "type": "string",
                          "maxLength": 30
                        },
                        "DISTRICT": {
                          "type": "string",
                          "maxLength": 10
                        },
                        "COUNTRYISO": {
                          "type": "string",
                          "maxLength": 2
                        }
                      }
                    },
                    "GENERALDATA": {
                      "type": "object",
                      "properties": {
                        "FIRMSTAT": {
                          "type": "number"
                        },
                        "BRANCHE": {
                          "type": "number"
                        },
                        "BRANCHETEXT": {
                          "type": "string",
                          "maxLength": 60
                        },
                        "NACECODE": {
                          "type": "string",
                          "maxLength": 10
                        },
                        "NACECODETEXT": {
                          "type": "string",
                          "maxLength": 200
                        }
                      }
                    },
                    "KAM": {
                      "type": "object",
                      "properties": {
                        "KAMNAME": {
                          "type": "string",
                          "maxLength": 60
                        },
                        "KAMPID": {
                          "type": "string",
                          "maxLength": 7
                        },
                        "KAMST": {
                          "type": "string",
                          "maxLength": 3
                        },
                        "KAMPHONE": {
                          "type": "string",
                          "maxLength": 30
                        },
                        "KAMEMAIL": {
                          "type": "string",
                          "maxLength": 100
                        }
                      }
                    },
                    "CUW": {
                      "type": "object",
                      "properties": {
                        "CUWNAME": {
                          "type": "string",
                          "maxLength": 60
                        },
                        "CUWPID": {
                          "type": "string",
                          "maxLength": 7
                        },
                        "CUWST": {
                          "type": "string",
                          "maxLength": 3
                        },
                        "CUWPHONE": {
                          "type": "string",
                          "maxLength": 30
                        },
                        "CUWEMAIL": {
                          "type": "string",
                          "maxLength": 100
                        }
                      }
                    },
                    "QUANTITYPD": {
                      "type": "number"
                    },
                    "POLICYDATA": {
                      "type": "array",
                      "maxItems": 50,
                      "items": {
                        "type": "object",
                        "properties": {
                          "POLSTAT": {
                            "type": "number"
                          },
                          "SHORTDESC": {
                            "type": "string",
                            "maxLength": 49
                          },
                          "KUC": {
                            "type": "string",
                            "maxLength": 2
                          },
                          "LANGUAGE": {
                            "type": "string",
                            "maxLength": 2
                          },
                          "PT": {
                            "type": "string",
                            "maxLength": 2
                          },
                          "CURRENCYISO": {
                            "type": "string",
                            "maxLength": 3
                          },
                          "GC": {
                            "type": "number"
                          },
                          "MAXCREDIT": {
                            "type": "number"
                          },
                          "TARIF": {
                            "type": "string",
                            "maxLength": 1
                          },
                          "AVB": {
                            "type": "number"
                          },
                          "PVS": {
                            "type": "string",
                            "maxLength": 1
                          },
                          "STARTDATE": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "STARTEXPIRATION": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "STARTENTRY": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "IPFROM": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "IPTO": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "INSDIVISION": {
                            "type": "string",
                            "maxLength": 114
                          },
                          "CESSIONBANK1": {
                            "type": "string",
                            "maxLength": 25
                          },
                          "CESSIONBANK2": {
                            "type": "string",
                            "maxLength": 25
                          },
                          "CESSIONDATE": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "DCBANK": {
                            "type": "string",
                            "maxLength": 2
                          },
                          "SOURCENR": {
                            "type": "number"
                          },
                          "CANCELREASON": {
                            "type": "string",
                            "maxLength": 2
                          },
                          "CANCELDATE": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "CANCELPER": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "CANCELENTRY": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "MUTATIONDATE": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "ENTERDATE": {
                            "type": "string",
                            "maxLength": 10
                          }
                        }
                      }
                    },
                    "QUANTITYPC": {
                      "type": "number"
                    },
                    "POLICYCONTACT": {
                      "type": "array",
                      "maxItems": 100,
                      "items": {
                        "type": "object",
                        "properties": {
                          "CONTACTID": {
                            "type": "number"
                          },
                          "HICODE": {
                            "type": "number"
                          },
                          "TITEL": {
                            "type": "string",
                            "maxLength": 1
                          },
                          "PERSON": {
                            "type": "string",
                            "maxLength": 60
                          },
                          "FIRSTNAME": {
                            "type": "string",
                            "maxLength": 30
                          },
                          "LASTNAME": {
                            "type": "string",
                            "maxLength": 30
                          },
                          "TELNR": {
                            "type": "string",
                            "maxLength": 30
                          },
                          "MOBNR": {
                            "type": "string",
                            "maxLength": 30
                          },
                          "EMAIL": {
                            "type": "string",
                            "maxLength": 60
                          },
                          "FUNKTION": {
                            "type": "string",
                            "maxLength": 60
                          },
                          "DIVERS": {
                            "type": "string",
                            "maxLength": 40
                          }
                        }
                      }
                    },
                    "QUANTITYBROKER": {
                      "type": "number"
                    },
                    "BROKER": {
                      "type": "array",
                      "maxItems": 10,
                      "items": {
                        "type": "object",
                        "properties": {
                          "BROKERNAME": {
                            "type": "string",
                            "maxLength": 120
                          },
                          "BROKERSTREET": {
                            "type": "string",
                            "maxLength": 90
                          },
                          "BROKERPOSTALCODE": {
                            "type": "string",
                            "maxLength": 20
                          },
                          "BROKERCITY": {
                            "type": "string",
                            "maxLength": 30
                          },
                          "BROKERDISTRICT": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "BROKERCOUNTRYISO": {
                            "type": "string",
                            "maxLength": 2
                          },
                          "BROKERNR": {
                            "type": "number"
                          },
                          "BROKERTYPE": {
                            "type": "number"
                          },
                          "BROKERDATEFROM": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "BROKERDATETO": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "BROKERPDI": {
                            "type": "string",
                            "maxLength": 7
                          },
                          "BROKERBANKCODE": {
                            "type": "number"
                          },
                          "BROKERSBONUS": {
                            "type": "number"
                          },
                          "BROKERAPROV": {
                            "type": "number"
                          },
                          "BROKERBPROV": {
                            "type": "number"
                          }
                        }
                      }
                    },
                    "QUANTITYACCOUNTING": {
                      "type": "number"
                    },
                    "ACCOUNTING": {
                      "type": "array",
                      "maxItems": 10,
                      "items": {
                        "type": "object",
                        "properties": {
                          "ACCOUNTID": {
                            "type": "number"
                          },
                          "CURRENCYACC": {
                            "type": "string",
                            "maxLength": 3
                          },
                          "IBAN": {
                            "type": "string",
                            "maxLength": 45
                          },
                          "BIC": {
                            "type": "string",
                            "maxLength": 15
                          },
                          "ACCOUNTNR": {
                            "type": "string",
                            "maxLength": 35
                          }
                        }
                      }
                    },
                    "QUANTITYSADDRESSES": {
                      "type": "number"
                    },
                    "SECONDADDRESSES": {
                      "type": "array",
                      "maxItems": 99,
                      "items": {
                        "type": "object",
                        "properties": {
                          "SCORPORATENAME": {
                            "type": "string",
                            "maxLength": 120
                          },
                          "SSTREET": {
                            "type": "string",
                            "maxLength": 90
                          },
                          "SPOSTALCODE": {
                            "type": "string",
                            "maxLength": 20
                          },
                          "SCITY": {
                            "type": "string",
                            "maxLength": 30
                          },
                          "SDISTRICT": {
                            "type": "string",
                            "maxLength": 10
                          },
                          "SCOUNTRYISO": {
                            "type": "string",
                            "maxLength": 2
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Invalid parameter supplied"
          },
          "500": {
            "description": "Unexpected exception"
          }
        }
      }
    }
  }
}


<!-- DYNAMIC_TEMPLATE_END -->