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
            "default": "Date Modified",
            "required": false
        },
        "before": {
            "type": "string",
            "id": "http://jsonschema.net/before",
            "default": "13/02/2015",
            "required": false
        },
        "date": {
            "type": "string",
            "id": "http://jsonschema.net/date",
            "default": "2015-03-17T18:25:43-05:00",
            "required": false
        },
        "now": {
            "type": "string",
            "id": "http://jsonschema.net/now",
            "default": "20/02/2015",
            "required": false
        },
        "type": {
            "type": "string",
            "id": "http://jsonschema.net/type",
            "default": "history",
            "required": false
        },
        "userName": {
            "type": "string",
            "id": "http://jsonschema.net/userName",
            "default": "Valter Gomes",
            "required": false
        }
    }
}