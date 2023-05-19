import { Request, Response } from "express";
import { Cliente } from "../../../models/Clientes";
import { customResponse as response } from "../../../helpers/Response.helper";
import { ICliente } from "../../../interfaces/ICliente";
import { v4 as uuidv4 } from "uuid";

export const getAllClientes = async (req: Request, res: Response) => {
  console.log("Controler clientes");
  const clientes = await Cliente.find({ activo: true });
  response.Ok(res, "Listado de clientes", 200, clientes);
};

export const getClienteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cliente = await Cliente.findOne({ _id: id, activo: true });
  if (!cliente) return response.NotFound(res, "No se encontro el cliente");
  return response.Ok(res, "Detalle del cliente", 200, cliente);
};

export const newCliente = async (req: Request, res: Response) => {
  try {
    const newCliente: ICliente = req.body;
    const cliente = new Cliente(newCliente);
    cliente.codigo = uuidv4();
    const clienteCreado = await cliente.save();
    console.log(clienteCreado);
    response.Created(res, "Cliente Creado", 201, clienteCreado);
  } catch (error) {
    response.Error(res, error);
  }
};

export const updateCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const cliente = await Cliente.findByIdAndUpdate(id, body, { new: true });
    console.log(body);
    response.Ok(res, "Cliente Actualizado", 200, cliente);
  } catch (error) {
    response.Error(res, error);
  }
};

export const deleteCliente = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const cliente = await Cliente.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true }
    );
    if (cliente) return response.Eliminado(res, "Cliente eliminado");
    return response.NotFound(res, "No se encontro el Cliente");
  } catch (error) {
    response.Error(res, error);
  }
};
