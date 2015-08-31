r{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
	"additionalProperties":false,
    "required": true,
    "properties": {
        "id": {
            "type": "string",
            "id": "http://jsonschema.net/id",
            "default": "1",
            "required": true
        },
        "name": {
            "type": "string",
            "id": "http://jsonschema.net/name",
            "default": "Estadão",
            "required": true
        }
    }
}