{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
	"additionalProperties":false,
    "required": true,
    "properties": {
        "actions": {
            "type": "array",
            "id": "http://jsonschema.net/actions",
            "required": true,
            "items": [
                {
                    "type": "string",
                    "id": "http://jsonschema.net/actions/0",
                    "default": "createJob",
                    "required": false
                },
                {
                    "type": "string",
                    "id": "http://jsonschema.net/actions/1",
                    "default": "editJob",
                    "required": false
                },
                {
                    "type": "string",
                    "id": "http://jsonschema.net/actions/2",
                    "default": "uploadFile",
                    "required": false
                },
                {
                    "type": "string",
                    "id": "http://jsonschema.net/actions/3",
                    "default": "fileDetail",
                    "required": false
                },
                {
                    "type": "string",
                    "id": "http://jsonschema.net/actions/4",
                    "default": "simpledownloadFile",
                    "required": false
                },
                {
                    "type": "string",
                    "id": "http://jsonschema.net/actions/5",
                    "default": "save",
                    "required": false
                }
            ]
        },
        "agencyId": {
            "type": "string",
            "id": "http://jsonschema.net/agencyId",
            "default": "sdafasdf",
            "required": true
        },
        "agencyName": {
            "type": "string",
            "id": "http://jsonschema.net/agencyName",
            "default": "Loducca",
            "required": true
        },
        "profile": {
            "type": "string",
            "id": "http://jsonschema.net/profile",
            "default": "agency",
            "required": true
        }
    }
}