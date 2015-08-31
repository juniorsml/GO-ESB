{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
    "additionalProperties": false,
    "required": true,
    "properties": {
        "agency": {
            "type": "string",
            "id": "http://jsonschema.net/agency",
            "default": "",
            "required": true
        },
        "annotations": {
            "type": "string",
            "id": "http://jsonschema.net/annotations",
            "default": "",
            "required": true
        },
        "costumer": {
            "type": "string",
            "id": "http://jsonschema.net/costumer",
            "default": "",
            "required": true
        },
        "createdAt": {
            "type": "string",
            "id": "http://jsonschema.net/createdAt",
            "default": "",
            "required": true
        },
        "files": {
            "type": "array",
            "id": "http://jsonschema.net/files",
            "required": true
        },
        "history": {
            "type": "object",
            "id": "http://jsonschema.net/history",
            "required": true,
            "properties": {
                "advertisement": {
                    "type": "array",
                    "id": "http://jsonschema.net/history/advertisement",
                    "required": true
                },
                "campaign": {
                    "type": "array",
                    "id": "http://jsonschema.net/history/campaign",
                    "required": true
                },
                "job": {
                    "type": "array",
                    "id": "http://jsonschema.net/history/job",
                    "required": true
                }
            }
        },
        "jobNum": {
            "type": "string",
            "id": "http://jsonschema.net/jobNum",
            "default": "",
            "required": true
        },
        "jobs": {
            "type": "array",
            "id": "http://jsonschema.net/jobs",
            "required": true
        },
        "name": {
            "type": "string",
            "id": "http://jsonschema.net/name",
            "default": "new campaign",
            "required": true
        },
        "notifications": {
            "type": "object",
            "id": "http://jsonschema.net/notifications",
            "required": false,
            "properties": {
                "advertisement": {
                    "type": "array",
                    "id": "http://jsonschema.net/notifications/advertisement",
                    "required": true
                },
                "campaign": {
                    "type": "array",
                    "id": "http://jsonschema.net/notifications/campaign",
                    "required": true
                },
                "job": {
                    "type": "array",
                    "id": "http://jsonschema.net/notifications/job",
                    "required": true
                }
            }
        },
        "status": {
            "type": "string",
            "id": "http://jsonschema.net/status",
            "default": "aberto",
			"enum" : ["aberto" , "fechado"],
            "required": true
        },
        "timeFrame": {
            "type": "string",
            "id": "http://jsonschema.net/timeFrame",
            "default": "",
            "required": true
        },
        "type": {
            "type": "string",
            "id": "http://jsonschema.net/type",
            "default": "campaign",
            "required": true
        },
        "userName": {
            "type": "string",
            "id": "http://jsonschema.net/userName",
            "default": "User",
            "required": true
        }
    }
}