{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
	"additionalProperties":false,
    "required": true,
    "properties": {
        "ap": {
            "type": "string",
            "id": "http://jsonschema.net/ap",
            "required": true
        },
        "channel": {
            "type": "object",
            "id": "http://jsonschema.net/channel",
            "required": true,
            "properties": {
                "contact": {
                    "type": "object",
                    "id": "http://jsonschema.net/channel/contact",
                    "required": false,
                    "properties": {
                        "address": {
                            "type": "string",
                            "id": "http://jsonschema.net/channel/contact/address",
                            "required": false
                        },
                        "email": {
                            "type": "string",
                            "id": "http://jsonschema.net/channel/contact/email",
                            "required": false
                        },
                        "nome": {
                            "type": "string",
                            "id": "http://jsonschema.net/channel/contact/nome",
                            "required": false
                        },
                        "phone": {
                            "type": "string",
                            "id": "http://jsonschema.net/channel/contact/phone",
                            "required": false
                        },
                        "type": {
                            "type": "string",
                            "id": "http://jsonschema.net/channel/contact/type",
                            "required": false
                        }
                    }
                },
                "id": {
                    "type": "string",
                    "id": "http://jsonschema.net/channel/id",
                    "required": true
                },
                "name": {
                    "type": "string",
                    "id": "http://jsonschema.net/channel/name",
                    "required": true
                },
                "sendMode": {
                    "type": "string",
                    "id": "http://jsonschema.net/channel/sendMode",
                    "required": true
                },
                "type": {
                    "type": "string",
                    "id": "http://jsonschema.net/channel/type",
                    "default": "channel",
                    "required": true
                }
            }
        },
        "checkin": {
            "type": "object",
            "id": "http://jsonschema.net/checkin",
            "required": true,
            "properties": {
                "date": {
                    "type": "string",
                    "id": "http://jsonschema.net/checkin/date",
                    "required": false
                },
                "status": {
                    "type": "boolean",
                    "id": "http://jsonschema.net/checkin/status",
                    "default": false,
                    "required": false
                },
                "userID": {
                    "type": "string",
                    "id": "http://jsonschema.net/checkin/userID",
                    "required": false
                },
                "userName": {
                    "type": "string",
                    "id": "http://jsonschema.net/checkin/userName",
                    "required": false
                }
            }
        },
        "dateDelivery": {
            "type": "string",
            "id": "http://jsonschema.net/dateDelivery",
            "required": true
        },
        "datePublication": {
            "type": "string",
            "id": "http://jsonschema.net/datePublication",
            "required": true
        },
        "file": {
            "type": "object",
            "id": "http://jsonschema.net/file",
            "required": true
        },
        "sent": {
            "type": "object",
            "id": "http://jsonschema.net/sent",
            "required": true
        },
        "solicitations": {
            "type": "array",
            "id": "http://jsonschema.net/solicitations",
            "required": true
        },
        "status": {
            "type": "string",
            "id": "http://jsonschema.net/status",
            "required": true
        }
    }
}
}