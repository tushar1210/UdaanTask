import {Request,Response,Router} from 'express';
import mongoose = require('mongoose');
import * as handler from '../Handlers/user';
import {loginResponse} from '../Interfaces/response'
const router = Router();


router.post('/login',async(request:Request, response:Response)=>{
    
    const username = String(request.query.username?.toString());
    const password = String(request.query.password?.toString());
   
    if((username === '' && password === '')||(username === 'undefined' && password === 'undefined')){
        var res:loginResponse = {
            success:false,
            error:'Invalid Query Parameters',
            message : 'Bad request'
        }
        return response.status(400).json(res);
    }
    await handler.login(username,password)
    .then((data)=>{
        if(data==null) {
            var res:loginResponse={
                success:false,
                error:'User not found',
                message:'Invalid Credentials'
            }
            return response.status(400).json(res);
        }
        var res:loginResponse={
            success:true,
            data:data?.toJSON()
        }
        return response.json(res);

    }).catch((e)=>{
        var res:loginResponse = {
            success:false,
            error:'Server error',
            message : e
        }
        return response.status(500).json(res);
    });
});

//handle
router.post('/register',async(request:Request, response:Response)=>{
    const username = String(request.query.username?.toString());
    const password = String(request.query.password?.toString());
    const name = String(request.query.name?.toString());
    const phone = String(request.query.phone?.toString());

    if((username === '' && password === '' && name==='' && phone==='')|| (username === 'undefined' && password === 'undefined' && name==='undefined' && phone==='undefined')){
        var res:loginResponse = {
            success:false,
            error:'Invalid Query Parameters',
            message : 'Bad request'
        }
        return response.status(400).json(res);
    }


    await handler.register(username,password,name,phone)
    .then((data)=>{
        var res:loginResponse = {
            success:true
        }
        response.json(res);
    })
    .catch((e)=>{
        var res:loginResponse={
            success:false,
            error:'User already exists',
            message:e
        }
        return response.status(400).json(res);
    });
});




export default router;
