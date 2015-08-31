{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
	"additionalProperties":false,
    "required": true,
    "properties": {
        "anotations": {
            "type": "string",
            "id": "http://jsonschema.net/anotations",
            "default": "Veiculacao na primeira pagi",
            "required": true
        },
        "dateUpload": {
            "type": "string",
            "id": "http://jsonschema.net/dateUpload",
            "default": "2015-03-17T18:25:43-05:00",
            "required": true
        },
        "name": {
            "type": "string",
            "id": "http://jsonschema.net/name",
            "default": "teste",
            "required": true
        }
    }
}