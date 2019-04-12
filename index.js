var express = require('express');
var app = express();
var http = require('http');

//now, we will write get request to call rest api.
//for example bookwriter.com/api/novelname---rest api we need to call using.

app.get('/', function(req,res){
    var api_response ="";
    //firstly we will define params
    var options = {
        host : "bookwriter.com",
        port : 80,
        path : '/api/emma',
        method: 'GET'
    } 

//now we will define callback

    callback = function(response){
        response.on("data", function(chunk){
            api_response = chunk, //write response chunk by chunk.
        });
        
        response.on("end", function(){
        console.log("api response is:" api_response);
        });
    }

    //we will use http to make our request
        var req = http.request(options, callback);
        req.end();
        res.send('call completed successdully')
});

//first of all, we will create server
app.listen(1338, function(req,res){
    console.log('Server listening at port no 1338');
}); 
