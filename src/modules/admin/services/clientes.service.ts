
import { crearCliente, deleteCliente, findAllClientes, findCliente, modificarCliente } from "../../../dao/Cliente.dao";
import { ICliente } from "../../../interfaces/ICliente";
import { Cliente } from "../../../models/Clientes";
import { IResponseService } from '../../../types/IResponseServices.type';
import { v4 as uuidv4 } from 'uuid';
import { CODES } from '../../../types/appCodesEnum';
import { ITransaction } from "../../../types/ITransaction.type"


export const getAllClientesService=async(transaction:any):Promise<IResponseService>=>{
  try {
    const clientes=await findAllClientes({activo:true})
    return {
      success: true,
      code:CODES.OK,
      message: `Listado de clientes`,
      data: clientes,
    };
  } catch (error) {
    throw error
  }
}
export const getClienteByIdService=async(id:string):Promise<IResponseService>=>{
  try {
    const clientes=await findCliente(id)
    return {
      success: true,
      code:CODES.OK,
      message: `Listado de clientes`,
      data: clientes,
    };
  } catch (error) {
    throw error
  }
}

export const crearClienteService = async (
  cliente: ICliente,
  transaction:ITransaction
): Promise<IResponseService> => {
  try {
    const clienteCreado=await crearCliente(cliente,transaction)
    return {
      success: true,
      code:CODES.CREATED,
      message: `Cliente Creado`,
      data: clienteCreado,
    };
  } catch (error) {
    console.error('========>+++',error);
      throw error;
  }
};

export const actualizarClienteService = async (
  id: string,
  cliente: object
): Promise<IResponseService> => {
  try {
    const clienteUpd=await modificarCliente(id,cliente)
    if(!clienteUpd) return {
      success: false,
      code:CODES.NOT_FOUND,
      message: `El cliente ${id} no existe`,
      data: {},
    }
    return {
      success: true,
      code:CODES.OK,
      message: `Cliente Creado`,
      data: clienteUpd,
    };
  } catch (error) {
    console.error(error);
    throw error
  }
};
export const deleteClienteService = async (
  id: string,
): Promise<IResponseService> => {
  try {
    const clienteDlt=await deleteCliente(id)
    if(!clienteDlt) return {
      success: false,
      code:CODES.NOT_FOUND,
      message: `El cliente ${id} no existe`,
      data: {},
    }
    return {
      success: true,
      code:CODES.OK,
      message: `Cliente con ID: ${id} eliminado`,
      data: {},
    };
  } catch (error) {
    console.error(error);
    throw error
  }
};
