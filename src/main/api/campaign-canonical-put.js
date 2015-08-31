{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
    "additionalProperties": false,
    "required": false,
    "properties": {
        "agency": {
            "type": "string",
            "id": "http://jsonschema.net/agency",
            "default": "Red Chili",
            "required": false
        },
        "annotations": {
            "type": "string",
            "id": "http://jsonschema.net/annotations",
            "default": "Only are possible update these fields",
            "required": false
        },
        "costumer": {
            "type": "string",
            "id": "http://jsonschema.net/costumer",
            "default": "Nextel",
            "required": false
        },
        "createdAt": {
            "type": "string",
            "id": "http://jsonschema.net/createdAt",
            "default": "2015-03-17T18:25:43-05:00",
            "required": false
        },
        "jobNum": {
            "type": "string",
            "id": "http://jsonschema.net/jobNum",
            "default": "123456",
            "required": false
        },
        "name": {
            "type": "string",
            "id": "http://jsonschema.net/name",
            "default": "a sample Campaign",
            "required": false
        },
        "status": {
            "type": "string",
            "id": "http://jsonschema.net/status",
            "default": "aberto",
			"enum" : ["aberto" , "fechado"]
            "required": false
        },
        "timeFrame": {
            "type": "string",
            "id": "http://jsonschema.net/timeFrame",
            "default": "2015-03-17T18:25:43-05:00",
            "required": false
        }
    }
}