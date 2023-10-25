import {Response,Request, NextFunction } from "express";
import { customResponse as response } from "../helpers/Response.helper";


export const errorHandler=(err:Error, req:Request, res:Response, next:NextFunction)=>{
    if(err.name==='ValidationError'){
        const mensajes= err.message.split('.')
       return response.ValidationError(res,mensajes,err)
    }
return response.Error(res,`Ocurrio un error interno`,err)
}