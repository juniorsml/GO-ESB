{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
	"additionalProperties":false,
    "required": true,
    "properties": {
        "dispatch": {
            "type": "string",
			 "enum" : ["sent", "feiled", "confirmed"]
            "id": "http://jsonschema.net/dispatch",
            "required": true
        }
    }
}