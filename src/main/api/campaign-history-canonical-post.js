{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
	"additionalProperties":false,
    "required": true,
    "properties": {
        "action": {
            "type": "string",
            "id": "http://jsonschema.net/action",
            "default": "",
            "required": true
        },
        "before": {
            "type": "string",
            "id": "http://jsonschema.net/before",
            "default": "",
            "required": true
        },

        "now": {
            "type": "string",
            "id": "http://jsonschema.net/now",
            "default": "",
            "required": true
        }
        
    }
}
