const express = require('express');
const bodyParser = require('body-parser');

//create express app
const app = express();

//parse requests of content type-application  /x-www-form-urlencode
app.use(bodyParser.urlencoded({extended:true}))

//parse requests of content-type- application/json
app.use(bodyParser.json())

//configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
}).then(()=>{
    console.log("Successfully connectedto the database");
}).catch(error =>{
    console.log('Could not connect to the database, Exiting now...', err);
    process.exit();
});    
    
//define a simple route
app.get('/', (req,res) =>{
    res.json({"message": "welcome to Easynote application. take notes quickly. organize and keep track of all your notes."});
});

//listen for requests
app.listen(3000, () =>{
    console.log("Server is listening on port 3000");
});

