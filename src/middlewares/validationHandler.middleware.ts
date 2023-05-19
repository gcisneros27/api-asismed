import {Response,Request, NextFunction } from "express";
import { customResponse as response } from "../helpers/Response.helper";
import { AppClientErrors } from '../interfaces/IErrores';

export const validationHandler = (schema:any) =>  (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    console.log('Validando datos de entrada')
        const {error}= schema.validate(req.body,{abortEarly: false})
        if (error) {
          next(error)}
        next()
  } catch (error) {
    next(error)
  } 
};
