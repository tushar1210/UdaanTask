// Import Node Modules and other files
import express = require ('express');
import mongoose = require('mongoose');
import userRoter from './Routers/user'
import cors=require('cors');

require('dotenv').config()
mongoose.Promise = global.Promise ;
const PORT = process.env.PORT || 50;

// Instatiate an express App
var app = express();
app.use(cors());
app.set('json spaces', 4);
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

