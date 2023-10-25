import { Request, Response } from "express";

import { customResponse as response } from "../../../helpers/Response.helper";

import { v4 as uuidv4 } from "uuid";
import { Rol } from "../../../models/Roles";
import { IRol } from "../../../interfaces/IRol";

export const getAllRoles = async (req: Request, res: Response) => {
  const roles = await Rol.find({ activo: true });
  response.Ok(res, "Listado de roles", 200, roles);
};

export const getRolById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const rol = await Rol.findOne({ _id: id, activo: true });
  if (!rol) return response.NotFound(res, "No se encontro el rol");
  return response.Ok(res, "Detalle del rol", 200, rol);
};

export const newRol = async (req: Request, res: Response) => {
  try {
    const newrol: IRol = req.body;
    newrol.codigo=uuidv4()
    const rol = new Rol(newrol);
    const rolCreado = await rol.save();
    console.log(rolCreado);
    response.Created(res, "Rol Creado", 201, rolCreado);
  } catch (error) {
    response.Error(res,'Ocurrio un error' ,error);
  }
};

export const updateRol = async (req: Request, res: Response) => {
  console.log('Update rol')
  try {
    const { id } = req.params;
    const body = req.body;
    const rol = await Rol.findByIdAndUpdate(id, body, { new: true });
    console.log(rol);
    response.Ok(res, "Rol Actualizado", 200, rol);
  } catch (error) {
    response.Error(res,'Ocurrio un error' ,error);
  }
};

export const deleteRol = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const rol = await Rol.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true }
    );
    if (rol) return response.Deteled(res, "Rol eliminado");
    return response.NotFound(res, "No se encontro el rol");
  } catch (error) {
    response.Error(res,'Ocurrio un error' ,error);
  }
};
