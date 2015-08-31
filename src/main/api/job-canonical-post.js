{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
    "required": true,
    "properties": {
        "advertisements": {
            "type": "array",
            "id": "http://jsonschema.net/advertisements",
            "required": true
        },
        "annotations": {
            "type": "string",
            "id": "http://jsonschema.net/annotations",
            "default": "dsfsfsadfsadfdsfffffffffffffffffffadsfadsf",
            "required": true
        },
        "baseFile": {
            "type": "object",
            "id": "http://jsonschema.net/baseFile",
            "required": true,
            "properties": {
                "anotations": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/anotations",
                    "default": "",
                    "required": false
                },
                "dateUpload": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/dateUpload",
                    "default": "2015-03-17T18:25:43-05:00",
                    "required": false
                },
                "extension": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/extension",
                    "default": "pdf",
                    "required": false
                },
                "height": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/height",
                    "default": "210",
                    "required": false
                },
                "name": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/name",
                    "default": "teste",
                    "required": false
                },
                "path": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/path",
                    "default": "/teste/teste",
                    "required": false
                },
                "size": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/size",
                    "default": "6mb",
                    "required": false
                },
                "type": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/type",
                    "default": "file",
                    "required": false
                },
                "width ": {
                    "type": "string",
                    "id": "http://jsonschema.net/baseFile/width ",
                    "default": "270",
                    "required": false
                }
            }
        },
        "formato": {
            "type": "string",
            "id": "http://jsonschema.net/formato",
            "default": "210x227",
            "required": true
        },
        "status": {
            "type": "string",
            "id": "http://jsonschema.net/status",
            "default": "aberto",
			"enum" : ["aberto" , "fechado"]
            "required": true
        }
    }
}