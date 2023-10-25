import { Request, Response, NextFunction } from "express";
import { Cliente } from "../../../models/Clientes";
import { customResponse as response } from "../../../helpers/Response.helper";
import { ICliente } from "../../../interfaces/ICliente";
import { actualizarClienteService, crearClienteService, deleteClienteService, getAllClientesService, getClienteByIdService } from "../services/clientes.service";
import { Transaction } from "../../../helpers/Transaction.helper";


export const getAllClientes = async (req: Request, res: Response,next: NextFunction) => {
  try {
    const transaction=new Transaction(req)
    const {success,code,message,data}=await getAllClientesService(transaction)
    const clientes = await Cliente.find({ activo: true });
    response.Send(res,success, message, code, clientes);
  } catch (error) {
    next(error)
  }
};

export const getClienteById = async (req: Request, res: Response,next: NextFunction) => {
try {
  const { id } = req.params;
  const {success,code,message,data} = await getClienteByIdService(id)
  return response.Send(res,success, message, code, data);
} catch (error) {
  next(error)
}
};

export const newCliente = async (req: Request, res: Response,next: NextFunction) => {
  try {
    const transaction=new Transaction(req)
    const newCliente: ICliente = req.body;
    const {success,code,message,data:clienteCreado}=await crearClienteService(newCliente,transaction)
    response.Send(res,success, message, code, clienteCreado);
  } catch (error) {
    next(error)
  }
};

export const updateCliente = async (req: Request, res: Response,next: NextFunction) => {
  try {
    const { id } = req.params;
    const body = req.body;
    console.log(`===>`,body)
    const {success,code,message,data:clienteActualizado}=await actualizarClienteService(id,body)
    response.Send(res,success, message,code, clienteActualizado);
    
  } catch (error) {
    next(error)
  }
};

export const deleteCliente = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;
    const {success,code,message,data} = await deleteClienteService(id)
    response.Send(res,success, message,code, data);
  } catch (error) {
    next(error) 
  }
};
