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

