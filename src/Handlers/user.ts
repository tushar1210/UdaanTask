import * as models from '../Models/user' ;
import mongoose = require('mongoose');
import {loginResponse} from '../Interfaces/response'
const User = models.User;
export async function login(username:string,password:string){
    return await User.findOne({username:username,password:password}).exec() ;
}

export async function register(username:string,password:string,name:string,phone:string){

    return new Promise((resolve,reject)=>{
        User.findOne({username:username,password:password},(err,user)=>{
            if(err){
                reject(err);
            }
            if(user){
                reject(user);
            }else{
                var u= new User({
                    _id:new mongoose.Types.ObjectId,
                    password:password,
                    name:name,
                    phone:phone,
                    username:username
                });
                resolve(u.save())
            }
      });  
    });
}