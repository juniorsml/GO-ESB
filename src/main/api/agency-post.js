{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
	"additionalProperties":false,
    "required": true,
    "properties": {
        "contact": {
            "type": "object",
            "id": "http://jsonschema.net/contact",
            "required": true,
            "properties": {
                "address": {
                    "type": "string",
                    "id": "http://jsonschema.net/contact/address",
                    "default": "fdsafdsfdsaf",
                    "required": true
                },
                "email": {
                    "type": "string",
                    "id": "http://jsonschema.net/contact/email",
                    "default": "teste@teste.com.br",
                    "required": true
                },
                "nome": {
                    "type": "string",
                    "id": "http://jsonschema.net/contact/nome",
                    "default": "teste",
                    "required": true
                },
                "phone": {
                    "type": "string",
                    "id": "http://jsonschema.net/contact/phone",
                    "default": "953603146",
                    "required": true
                },
                "type": {
                    "type": "string",
                    "id": "http://jsonschema.net/contact/type",
                    "default": "contact",
                    "required": true
                }
            }
        },
        "name": {
            "type": "string",
            "id": "http://jsonschema.net/name",
            "default": "Loducca",
            "required": true
        }
    }
}