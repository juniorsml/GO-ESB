	{
    "_id": "5787bcb0142d72f9e984293837092de3",
    "_rev": "101-167f68f63cc817689bfcc28460e267b0",
    "type": "campaign",
    "userName": "valter.gomes",
    "name": "a sample Campaign",
    "agency": "Red Chili",
    "costumer": "Nextel",
    "jobNum": "123456",
    "status": "aberto",
    "timeFrame": "2015-03-17T18:25:43-05:00",
    "createdAt": "2015-03-17T18:25:43-05:00",
    "annotations": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt scelerisque ipsum, id posuere nulla vulputate sed. Phasellus aliquam lacinia posuere. Curabitur convallis egestas eros, id lacinia sem. Quisque eleifend ac enim ut bibendum. Quisque laoreet dui elit",
    "notifications": {
        "campaign": [
            "dasfdsf65654",
            "dfdsf14654"
        ],
        "job": [
            "fdsf654654",
            "fdsf3121"
        ],
        "advertisement": [
            "asdf312",
            "dfdsf1321"
        ]
    },
    "history": {
        "campaign": [
            "dasfdsf65654",
            "dfdsf14654"
        ],
        "job": [
            "fdsf654654",
            "fdsf3121"
        ],
        "advertisement": [
            "asdf312",
            "dfdsf1321"
        ]
    },
    "files": [
         {
                "type": "file",
                "path": "/teste/teste",
                "name": "teste",
				"dateUpload" : "2015-03-17T18:25:43-05:00" ,
                "extension": "pdf",
                "height": "210",
                "width ": "270",
                "anotations": "Veiculacao na primeira pagi",
                "size": "6mb"
				"generatedFiles" ["dfdsafdsf", "asdfdsfads" , "13d1fsdf"]
			} ,
			 {
                "type": "file",
                "path": "/teste/teste",
                "name": "teste",
				"dateUpload" : "2015-03-17T18:25:43-05:00" ,
                "extension": "pdf",
                "height": "210",
                "width ": "270",
                "anotations": "Veiculacao na primeira pagi",
                "size": "6mb"
				"generatedFiles" ["dfdsafdsf", "asdfdsfads" , "13d1fsdf"]
			} 
    ],
    "jobs": [
        {
            "type": "job",
            "id": 1,
            "formato": "210x227",
            "baseFile":  {
							"type": "file",
							"path": "/teste/teste",
							"name": "teste",
							"dateUpload" : "2015-03-17T18:25:43-05:00" ,
							"extension": "pdf",
							"height": "210",
							"width ": "270",
							"anotations": "Veiculacao na primeira pagi",
							"size": "6mb"
							"generatedFiles" ["dfdsafdsf", "asdfdsfads" , "13d1fsdf"]
			} ,
            "status": "aberto",
            "annotations": "dsfsfsadfsadfdsfffffffffffffffffffadsfadsf",
            "advertisements": [
                {
                    "type": "advertisement",
                    "ap": "132dsad",
                    "dateDelivery": "2015-03-17T18:25:43-05:00",
                    "datePublication": "2015-03-17T18:25:43-05:00",
					"checkin" : {
									"userName" : "valter.gomes",
									"userID"   : "fdsfdlçsf5654"
									"date"     : "2015-03-17T18:25:43-05:00"
									"status"   : true  
								}
					
					,
                    "channel" : {
								"type" : "channel" ,
								"name" : "Estadão" ,
								"id"    : "1",
								"contact": {
									"type" : "contact" ,
									"nome": "teste",
									"email": "teste@teste.com.br",
									"address": "fdsafdsfdsaf",
									"phone": "953603146"
									}
								"sendMode" : "FTP" 
					},
                    "file": {
							"type": "file",
							"path": "/teste/teste",
							"name": "teste",
							"dateUpload" : "2015-03-17T18:25:43-05:00" ,
							"extension": "pdf",
							"height": "210",
							"width ": "270",
							"anotations": "Veiculacao na primeira pagi",
							"size": "6mb"
							
			} ,
                    "status": "modified",
					"sent"  :{
							"userName" : "valter.junior",
							"userID"    : "1231",
							"date" : "2015-03-17T18:25:43-05:00" ,
							"status" : "enviado"
								
							},
                    "id": 0,
                    "solicitations": [
                        "11ds1fd",
                        "ddsfdsf",
                        "dsfdsfdsf"
                    ]
                }
            ]
        }
    ]
}

///
"file": {
                "type": "file",
                "path": "/teste/teste",
                "name": "teste",
				"dateUpload" : "2015-03-17T18:25:43-05:00" ,
                "extension": "pdf",
                "height": "210",
                "width ": "270",
                "anotations": "Veiculacao na primeira pagi",
                "size": "6mb"
				"generatedFiles" ["dfdsafdsf", "asdfdsfads" , "13d1fsdf"]
			} ,

///
"channel": {
				"type" : "channel" ,
				"name" : "Estadão" ,
				"contact": {
			     	"type" : "contact" ,
					"nome": "teste",
                    "email": "teste@teste.com.br",
                    "address": "fdsafdsfdsaf",
                    "phone": "953603146"
                    }
				"sendMode" : "FTP" 
					
	
	}					
						
	///
"solicitation" : {
		"id"   : "sadfsdfdsf" ,	
		"type" : "solicitation" ,
		"name" : "PRINT" ,
		"date" : "2015-03-17T18:25:43-05:00" 
}

///
"notification" : {
			"id"   : "sadfsdfdsf" ,	
			"type" : "notification" ,
			"name" : "edit name"  ,
			"date" : "2015-03-17T18:25:43-05:00" 
		}

///
"user" : {
		"id" : "dfsdafads" ,
		"type" : "user",
		"agency" : "sdafasdf" ,
		"profile" : "agency" ,
		"actions" : [  "createJob",
					   "editJob",
					   "uploadFile",
					   "fileDetail",
					   "simpledownloadFile",
					   "save"
					]
}

///
"costumers" ["nextel" , "CeA" , "Sansung"]

///
"agency" : {
	"type" : "agency" , 
	"id" : "sadfdsfdsf" ,
	"name" : "Loducca",
	"contact": {
			     	"type" : "contact" ,
					"nome": "teste",
                    "email": "teste@teste.com.br",
                    "address": "fdsafdsfdsaf",
                    "phone": "953603146"
                    }
					
}
///
"history" : {
		
		"type" : "history",
		"userName" : "Valter Gomes",
		"date" : "2015-03-17T18:25:43-05:00" ,
		"action" : "Data Alterada",
		"before" : "13/02/2015";
		"now" : "20/02/2015"
		

}

