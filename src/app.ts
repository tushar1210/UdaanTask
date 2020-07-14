// Import Node Modules and other files
import express = require ('express');
import mongoose = require('mongoose');
import userRoter from './Routers/user'

require('dotenv').config()

mongoose.Promise = global.Promise ;
const PORT = process.env.PORT || 50;
// Instatiate an express App
var app = express();
app.set('json spaces', 4);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
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

