import mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ticket = new Schema({
    id: new mongoose.Types.ObjectId,
    name:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    },
    movie:{
        type:String,
        required:true
    },
    venue:{
        type:String,
        required:true
    },
    amount:{
        type:String,
        required:true
    }
});
export var Ticket = mongoose.model('tickets',ticket);