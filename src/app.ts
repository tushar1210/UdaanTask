// Import Node Modules and other files
import express = require ('express');
import mongoose = require('mongoose');
import userRoter from './Routers/user'

require('dotenv').config()

mongoose.Promise = global.Promise ;
const PORT = process.env.PORT || 50;
// Instatiate an express App
var app = express();

app.all('*', function(req, res, next) {
    var origin = req.get('origin'); 
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});



app.set('json spaces', 4);
app.use(express.static(__dirname + '/Views'));
app.get('/',(request,response)=>{
    response.sendFile(__dirname+"/Views/index.html");
});

app.use('/user',userRoter);
app.listen(PORT,()=>{
});

//Mongoose connection to MongoAtlas
const connString = String(process.env.CONNECTION_STRING);
mongoose.connect(connString,{useNewUrlParser: true, useUnifiedTopology: true},()=>{
    console.log("In mongo");
});

//Gracefull  disconnect
process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log("Mongoose default connection is disconnected due to application termination");
       process.exit(0);
      });
});

