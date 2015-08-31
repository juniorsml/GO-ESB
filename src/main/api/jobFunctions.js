{
"label" : "create job" ,
"url" : "/campaigns/{id}/jobs" ,
"method" : "POST"
},
{
"label" : "get allJobs " ,
"url" : "/campaigns/{id}/jobs" ,
"method" : "GET"
},
{
"label" : "get job" ,
"url" : "/campaigns/{id}/jobs/{id}" ,
"method" : "GET"
},
{
"label" : "update job" ,
"url" : "/campaigns/{id}/jobs/{id}" ,
"method" : "PUT"
},
{
"label" : "change statusJob" ,
"url" : "/campaigns/{id}/status/jobs/{id}/status" ,
"method" : "PUT"
},
{
"label" : "get historyJob" ,
"url" : "/campaigns/{id}/history" ,
"method" : "GET"
},

{
"label" : "create historyJob" ,
"url" : "/campaigns/{id}/history" ,
"method" : "POST"
},
{
"label" : "get jobBaseFileInfo" ,
"url" : "/campaigns/{id}/jobs/{id}/file" ,
"method" : "GET"
},
{
"label" : "create jobBaseFileInfo" ,
"url" : "/campaigns/{id}/jobs/{id}/file" ,
"method" : "POST"
},
{
"label" : "delete jobBaseFileInfo" ,
"url" : "/campaigns/{id}/jobs/{id}/file" ,
"method" : "DELETE"
},
{
"label" : "update jobBaseFileInfo" ,
"url" : "/campaigns/{id}/jobs/{id}/file" ,
"method" : "PUT"
},
{
"label" : "get jobBaseFileStream" ,
"url" : "/campaigns/{id}/jobs/{id}/file/download" ,
"method" : "GET"
},
{
"label" : "get jobsFileThumb" ,
"url" : "/campaigns/{id}/jobs/{id}/file/{id}/thumb" ,
"method" : "GET"
},
{
"label" : "get jobNotifications" ,
"url" : "/campaigns/{id}/jobs/{id}/notifications" ,
"method" : "GET"
},
{
"label" : "create jobNotifications" ,
"url" : "/campaigns/{id}/jobs/{id}/notifications" ,
"method" : "POST"
}