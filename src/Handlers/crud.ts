import * as models from '../Models/crud';
import { model } from 'mongoose';

export async function getTicket(id:string){
    var ticket = models.Ticket;

    return await ticket.findOne({id:id}).exec() ;
}