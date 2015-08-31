{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
    "required": true,
    "properties": {
        "status": {
            "type": "string",
            "id": "http://jsonschema.net/status",
            "default": "aberto",
			"enum" : ["aberto" , "fechado"],
            "required": true
        }
    }
}