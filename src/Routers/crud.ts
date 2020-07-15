import {Router,Request,Response} from 'express';
import * as handler from'../Handlers/crud';
import {getTicket} from '../Interfaces/response'
var router:Router = Router();

router.get('get-ticket/:id', async(request:Request,response:Response)=>{
    var id = request.params.id;
    if(id==''||id=='null'||id=='undefined'){
        var res:getTicket = {
            success:false,
            error:'Invalid Parameters',
            message:'Please pass the required Parameters'
        }
        response.status(400).json(res);
    }
});

