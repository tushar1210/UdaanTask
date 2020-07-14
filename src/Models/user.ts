import mongoose = require('mongoose');
var Schema = mongoose.Schema

var user = new Schema({
    id : mongoose.Types.ObjectId,
    username : {
        type:String,
        required:true,
        minlength:1,
        trim:true,
        unique:true
    },
    password : {
        type:String,
        required:true,
        minlength:8,
        trim:false,
    },
    name :{
        type:String,
        required:true,
        minlength:1,
        trim:false,
    },
    phone :{
        type:String,
        required:true,
        length:10,
        trim:true
    }
});
export var User = mongoose.model('User',user) ;