"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import Node Modules and other files
var express = require("express");
var mongoose = require("mongoose");
var user_1 = __importDefault(require("./Routers/user"));
var cors = require("cors");
require('dotenv').config();
mongoose.Promise = global.Promise;
var PORT = process.env.PORT || 50;
// Instatiate an express App
var app = express();
app.use(cors());
app.set('json spaces', 4);
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
        process.exit(0);
    });
});
