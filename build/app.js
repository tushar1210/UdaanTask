"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Node Modules and other files
var express = require("express");
var mongoose = require("mongoose");
var user_1 = __importDefault(require("./Routers/user"));
require('dotenv').config();
mongoose.Promise = global.Promise;
var PORT = process.env.PORT || 50;
// Instatiate an express App
var app = express();
app.all('*', function (req, res, next) {
    var origin = req.get('origin');
    res.header('Access-Control-Allow-Origin', origin);
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.set('json spaces', 4);
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
// });
app.use(express.static(__dirname + '/Views'));
app.get('/', function (request, response) {
    response.sendFile(__dirname + "/Views/index.html");
});
app.use('/user', user_1.default);
app.listen(PORT, function () {
});
//Mongoose connection to MongoAtlas
var connString = String(process.env.CONNECTION_STRING);
mongoose.connect(connString, { useNewUrlParser: true, useUnifiedTopology: true }, function () {
    console.log("In mongo");
});
//Gracefull  disconnect
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log("Mongoose default connection is disconnected due to application termination");
        process.exit(0);
    });
});
