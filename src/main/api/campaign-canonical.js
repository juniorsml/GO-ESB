{
    "type": "object",
    "$schema": "http://json-schema.org/draft-03/schema",
    "id": "http://jsonschema.net",
    "required": false,
    "properties": {
        "_id": {
            "type": "string",
            "id": "http://jsonschema.net/_id",
            "required": false
        },
        "_rev": {
            "type": "string",
            "id": "http://jsonschema.net/_rev",
            "required": false
        },
        "agency": {
            "type": "string",
            "id": "http://jsonschema.net/agency",
            "required": true
        },
        "annotations": {
            "type": "string",
            "id": "http://jsonschema.net/annotations",
           "required": true
        },
        "costumer": {
            "type": "string",
            "id": "http://jsonschema.net/costumer",
            "required": true
        },
        "createdAt": {
            "type": "string",
            "id": "http://jsonschema.net/createdAt",
            "required": true
        },
        "files": {
            "type": "array",
            "id": "http://jsonschema.net/files",
            "required": true,
            "items": {
                "type": "object",
                "id": "http://jsonschema.net/files/0",
                "required": true
                
            }
        },
        "history": {
            "type": "object",
            "id": "http://jsonschema.net/history",
            "required": true,
            "properties": {
                "advertisement": {
                    "type": "array",
                    "id": "http://jsonschema.net/history/advertisement",
                    "required": true,
                    "items": {
                        "type": "object",
                        "id": "http://jsonschema.net/history/advertisement/0",
                        "required": false,
                        "properties": {
                            "action": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/advertisement/0/action",
                                "default": "Date Modified",
                                "required": false
                            },
                            "before": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/advertisement/0/before",
                                "default": "13/02/2015",
                                "required": false
                            },
                            "date": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/advertisement/0/date",
                                "default": "2015-03-17T18:25:43-05:00",
                                "required": false
                            },
                            "now": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/advertisement/0/now",
                                "default": "20/02/2015",
                                "required": false
                            },
                            "type": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/advertisement/0/type",
                                "default": "history",
                                "required": false
                            },
                            "userName": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/advertisement/0/userName",
                                "default": "Valter Gomes",
                                "required": false
                            }
                        }
                    }
                },
                "campaign": {
                    "type": "array",
                    "id": "http://jsonschema.net/history/campaign",
                    "required": true,
                    "items": {
                        "type": "object",
                        "id": "http://jsonschema.net/history/campaign/0",
                        "required": false,
                        "properties": {
                            "action": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/campaign/0/action",
                                "default": "Date Modified",
                                "required": false
                            },
                            "before": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/campaign/0/before",
                                "default": "13/02/2015",
                                "required": false
                            },
                            "date": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/campaign/0/date",
                                "default": "2015-03-17T18:25:43-05:00",
                                "required": false
                            },
                            "now": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/campaign/0/now",
                                "default": "20/02/2015",
                                "required": false
                            },
                            "type": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/campaign/0/type",
                                "default": "history",
                                "required": false
                            },
                            "userName": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/campaign/0/userName",
                                "default": "Valter Gomes",
                                "required": false
                            }
                        }
                    }
                },
                "job": {
                    "type": "array",
                    "id": "http://jsonschema.net/history/job",
                    "required": true,
                    "items": {
                        "type": "object",
                        "id": "http://jsonschema.net/history/job/0",
                        "required": false,
                        "properties": {
                            "action": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/job/0/action",
                                "default": "Date Modified",
                                "required": false
                            },
                            "before": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/job/0/before",
                                "default": "13/02/2015",
                                "required": false
                            },
                            "date": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/job/0/date",
                                "default": "2015-03-17T18:25:43-05:00",
                                "required": false
                            },
                            "now": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/job/0/now",
                                "default": "20/02/2015",
                                "required": false
                            },
                            "type": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/job/0/type",
                                "default": "history",
                                "required": false
                            },
                            "userName": {
                                "type": "string",
                                "id": "http://jsonschema.net/history/job/0/userName",
                                "default": "Valter Gomes",
                                "required": false
                            }
                        }
                    }
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
            "required": true,
            "items": {
                "type": "object",
                "id": "http://jsonschema.net/jobs/0",
                "required": false,
                "properties": {
                    "advertisements": {
                        "type": "array",
                        "id": "http://jsonschema.net/jobs/0/advertisements",
                        "required": false,
                        "items": {
                            "type": "object",
                            "id": "http://jsonschema.net/jobs/0/advertisements/0",
                            "required": false,
                            "properties": {
                                "ap": {
                                    "type": "string",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/ap",
                                    "default": "132dsad",
                                    "required": false
                                },
                                "channel": {
                                    "type": "object",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/channel",
                                    "required": false,
                                    "properties": {
                                        "contact": {
                                            "type": "object",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/contact",
                                            "required": false,
                                            "properties": {
                                                "address": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/contact/address",
                                                    "default": "fdsafdsfdsaf",
                                                    "required": false
                                                },
                                                "email": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/contact/email",
                                                    "default": "teste@teste.com.br",
                                                    "required": false
                                                },
                                                "nome": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/contact/nome",
                                                    "default": "teste",
                                                    "required": false
                                                },
                                                "phone": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/contact/phone",
                                                    "default": "953603146",
                                                    "required": false
                                                },
                                                "type": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/contact/type",
                                                    "default": "contact",
                                                    "required": false
                                                }
                                            }
                                        },
                                        "id": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/id",
                                            "default": "1",
                                            "required": false
                                        },
                                        "name": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/name",
                                            "default": "Estadão",
                                            "required": false
                                        },
                                        "sendMode": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/sendMode",
                                            "default": "FTP",
                                            "required": false
                                        },
                                        "type": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/channel/type",
                                            "default": "channel",
                                            "required": false
                                        }
                                    }
                                },
                                "checkin": {
                                    "type": "object",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/checkin",
                                    "required": false,
                                    "properties": {
                                        "date": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/checkin/date",
                                            "default": "2015-03-17T18:25:43-05:00",
                                            "required": false
                                        },
                                        "status": {
                                            "type": "boolean",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/checkin/status",
                                            "default": true,
                                            "required": false
                                        },
                                        "userID": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/checkin/userID",
                                            "default": "fdsfdlçsf5654",
                                            "required": false
                                        },
                                        "userName": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/checkin/userName",
                                            "default": "valter.gomes",
                                            "required": false
                                        }
                                    }
                                },
                                "dateDelivery": {
                                    "type": "string",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/dateDelivery",
                                    "default": "2015-03-17T18:25:43-05:00",
                                    "required": false
                                },
                                "datePublication": {
                                    "type": "string",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/datePublication",
                                    "default": "2015-03-17T18:25:43-05:00",
                                    "required": false
                                },
                                "dispatch": {
                                    "type": "object",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/dispatch",
                                    "required": false,
                                    "properties": {
                                        "date": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/dispatch/date",
                                            "default": "2015-03-17T18:25:43-05:00",
                                            "required": false
                                        },
                                        "status": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/dispatch/status",
                                            "default": "enviado",
                                            "required": false
                                        },
                                        "userID": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/dispatch/userID",
                                            "default": "1231",
                                            "required": false
                                        },
                                        "userName": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/dispatch/userName",
                                            "default": "valter.junior",
                                            "required": false
                                        }
                                    }
                                },
                                "file": {
                                    "type": "object",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/file",
                                    "required": false,
                                    "properties": {
                                        "anotations": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/anotations",
                                            "default": "Veiculacao na primeira pagi",
                                            "required": false
                                        },
                                        "dateUpload": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/dateUpload",
                                            "default": "2015-03-17T18:25:43-05:00",
                                            "required": false
                                        },
                                        "extension": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/extension",
                                            "default": "pdf",
                                            "required": false
                                        },
                                        "height": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/height",
                                            "default": "210",
                                            "required": false
                                        },
                                        "name": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/name",
                                            "default": "teste",
                                            "required": false
                                        },
                                        "path": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/path",
                                            "default": "/teste/teste",
                                            "required": false
                                        },
                                        "size": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/size",
                                            "default": "6mb",
                                            "required": false
                                        },
                                        "type": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/type",
                                            "default": "file",
                                            "required": false
                                        },
                                        "width ": {
                                            "type": "string",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/file/width ",
                                            "default": "270",
                                            "required": false
                                        }
                                    }
                                },
                                "id": {
                                    "type": "number",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/id",
                                    "required": false
                                },
                                "solicitations": {
                                    "type": "array",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations",
                                    "required": false,
                                    "items": [
                                        {
                                            "type": "object",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/0",
                                            "required": false,
                                            "properties": {
                                                "date": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/0/date",
                                                    "default": "2015-03-17T18:25:43-05:00",
                                                    "required": false
                                                },
                                                "id": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/0/id",
                                                    "default": "0",
                                                    "required": false
                                                },
                                                "name": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/0/name",
                                                    "default": "PRINT",
                                                    "required": false
                                                },
                                                "type": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/0/type",
                                                    "default": "solicitation",
                                                    "required": false
                                                }
                                            }
                                        },
                                        {
                                            "type": "object",
                                            "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/1",
                                            "required": false,
                                            "properties": {
                                                "date": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/1/date",
                                                    "default": "2015-03-17T18:25:43-05:00",
                                                    "required": false
                                                },
                                                "id": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/1/id",
                                                    "default": "1",
                                                    "required": false
                                                },
                                                "name": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/1/name",
                                                    "default": "PRINT",
                                                    "required": false
                                                },
                                                "type": {
                                                    "type": "string",
                                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/solicitations/1/type",
                                                    "default": "solicitation",
                                                    "required": false
                                                }
                                            }
                                        }
                                    ]
                                },
                                "status": {
                                    "type": "string",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/status",
                                    "default": "modified",
                                    "required": false
                                },
                                "type": {
                                    "type": "string",
                                    "id": "http://jsonschema.net/jobs/0/advertisements/0/type",
                                    "default": "advertisement",
                                    "required": false
                                }
                            }
                        }
                    },
                    "annotations": {
                        "type": "string",
                        "id": "http://jsonschema.net/jobs/0/annotations",
                        "default": "dsfsfsadfsadfdsfffffffffffffffffffadsfadsf",
                        "required": false
                    },
                    "baseFile": {
                        "type": "object",
                        "id": "http://jsonschema.net/jobs/0/baseFile",
                        "required": false,
                        "properties": {
                            "anotations": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/anotations",
                                "default": "Veiculacao na primeira pagi",
                                "required": false
                            },
                            "dateUpload": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/dateUpload",
                                "default": "2015-03-17T18:25:43-05:00",
                                "required": false
                            },
                            "extension": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/extension",
                                "default": "pdf",
                                "required": false
                            },
                            "height": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/height",
                                "default": "210",
                                "required": false
                            },
                            "name": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/name",
                                "default": "teste",
                                "required": false
                            },
                            "path": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/path",
                                "default": "/teste/teste",
                                "required": false
                            },
                            "size": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/size",
                                "default": "6mb",
                                "required": false
                            },
                            "type": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/type",
                                "default": "file",
                                "required": false
                            },
                            "width ": {
                                "type": "string",
                                "id": "http://jsonschema.net/jobs/0/baseFile/width ",
                                "default": "270",
                                "required": false
                            }
                        }
                    },
                    "formato": {
                        "type": "string",
                        "id": "http://jsonschema.net/jobs/0/formato",
                        "default": "210x227",
                        "required": false
                    },
                    "id": {
                        "type": "number",
                        "id": "http://jsonschema.net/jobs/0/id",
                        "default": 1,
                        "required": false
                    },
                    "status": {
                        "type": "string",
                        "id": "http://jsonschema.net/jobs/0/status",
                        "default": "aberto",
                        "required": false
                    },
                    "type": {
                        "type": "string",
                        "id": "http://jsonschema.net/jobs/0/type",
                        "default": "job",
                        "required": false
                    }
                }
            }
        },
        "name": {
            "type": "string",
            "id": "http://jsonschema.net/name",
            "default": "",
            "required": true
        },
        "notifications": {
            "type": "object",
            "id": "http://jsonschema.net/notifications",
            "required": true,
            "properties": {
                "advertisement": {
                    "type": "array",
                    "id": "http://jsonschema.net/notifications/advertisement",
                    "required": false,
                    "items": {
                        "type": "object",
                        "id": "http://jsonschema.net/notifications/advertisement/0",
                        "required": false,
                        "properties": {
                            "date": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/advertisement/0/date",
                                "default": "2015-03-17T18:25:43-05:00",
                                "required": false
                            },
                            "id": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/advertisement/0/id",
                                "default": "sadfsdfdsf",
                                "required": false
                            },
                            "name": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/advertisement/0/name",
                                "default": "edit name",
                                "required": false
                            },
                            "type": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/advertisement/0/type",
                                "default": "notification",
                                "required": false
                            }
                        }
                    }
                },
                "campaign": {
                    "type": "array",
                    "id": "http://jsonschema.net/notifications/campaign",
                    "required": false,
                    "items": {
                        "type": "object",
                        "id": "http://jsonschema.net/notifications/campaign/0",
                        "required": false,
                        "properties": {
                            "date": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/campaign/0/date",
                                "default": "2015-03-17T18:25:43-05:00",
                                "required": false
                            },
                            "id": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/campaign/0/id",
                                "default": "sadfsdfdsf",
                                "required": false
                            },
                            "name": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/campaign/0/name",
                                "default": "edit name",
                                "required": false
                            },
                            "type": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/campaign/0/type",
                                "default": "notification",
                                "required": false
                            }
                        }
                    }
                },
                "job": {
                    "type": "array",
                    "id": "http://jsonschema.net/notifications/job",
                    "required": false,
                    "items": {
                        "type": "object",
                        "id": "http://jsonschema.net/notifications/job/0",
                        "required": false,
                        "properties": {
                            "date": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/job/0/date",
                                "default": "2015-03-17T18:25:43-05:00",
                                "required": false
                            },
                            "id": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/job/0/id",
                                "default": "sadfsdfdsf",
                                "required": false
                            },
                            "name": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/job/0/name",
                                "default": "edit name",
                                "required": false
                            },
                            "type": {
                                "type": "string",
                                "id": "http://jsonschema.net/notifications/job/0/type",
                                "default": "notification",
                                "required": false
                            }
                        }
                    }
                }
            }
        },
        "status": {
            "type": "string",
            "id": "http://jsonschema.net/status",
            "default": "aberto",
			"enum" : ["aberto" , "fechado"]	
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
            "default": "",
            "required": true
        }
    }
}