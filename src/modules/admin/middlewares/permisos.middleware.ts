import {Response,Request, NextFunction } from "express";
import { customResponse as response } from "../../../helpers/Response.helper";
import { checkUniquePath } from "../services/permisos.service";


export const validationUniquePermisos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {

    const body=req.body

    const permisoUnico= await checkUniquePath(body.metodo,body.path)
    if(!permisoUnico) next({
        message:'Ya existe la clave (metodo,ruta)',
        details: {
            metodo:body.metodo,
            path:body.path
        }
    })
    next()

  } catch (error) {
    next(error)
  } 
};
