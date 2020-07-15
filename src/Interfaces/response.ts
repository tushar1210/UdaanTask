export interface loginResponse{
    success:boolean,
    data?:{
        _id?:string,
        name?:string,
        username?:string,    
        
    }|any,
    error?:string,
    message?:string
}

export interface getTicket{
    success:boolean,
    data?:{
        id:string,
        name:string,
        time:string,
        date:string,
        movie:string,
        venue:string,
        amount:string
    }|any,
    error?:string,
    message?:string

}