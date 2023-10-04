import { Request, Response, response } from "express";
import { IUsuario } from "../../../interfaces/IUsuario";
import { crearUsuario } from "../services/usuarios.service";
import { customResponse } from "../../../helpers/Response.helper";

export const newUsuario = async (req: Request, res: Response) => {
  try {
    const newUsuario = req.body;
    const { success, message, data } = await crearUsuario(newUsuario);
    if (success) {
      customResponse.Created(res, message, 200, data);
    } else {
      customResponse.Error(res, message, data);
    }
  } catch (error) {
    customResponse.Error(res, "Ocurrio un error", error);
  }
};

export const editUsuario= async (req:Request,res:Response)=>{
    const modUsuario=req.body
    const idUsuario=req.params.id  
}