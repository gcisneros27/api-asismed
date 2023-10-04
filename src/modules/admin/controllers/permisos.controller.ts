import { Request, Response } from "express";

import { customResponse as response } from "../../../helpers/Response.helper";

import { v4 as uuidv4 } from "uuid";
import { Permiso } from "../../../models/Permisos";
import { IPermiso } from "../../../interfaces/IPermiso";

export const getAllPermisos = async (req: Request, res: Response) => {
  const permisos = await Permiso.find({ activo: true });
  response.Ok(res, "Listado de permisos", 200, permisos);
};

export const getPermisoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const permiso = await Permiso.findOne({ _id: id, activo: true });
  if (!permiso) return response.NotFound(res, "No se encontro el permiso");
  return response.Ok(res, "Detalle del permiso", 200, permiso);
};

export const newPermiso = async (req: Request, res: Response) => {
  try {
    const newpermiso: IPermiso = req.body;
    const permiso = new Permiso(newpermiso);
    const permisoCreado = await permiso.save();
    console.log(permisoCreado);
    response.Created(res, "Permiso Creado", 201, permisoCreado);
  } catch (error) {
    response.Error(res,"Ocurrio un error", error);
  }
};

export const updatepermiso = async (req: Request, res: Response) => {
  console.log('Update permiso')
  try {
    const { id } = req.params;
    const body = req.body;
    const permiso = await Permiso.findByIdAndUpdate(id, body, { new: true });
    console.log(permiso);
    response.Ok(res, "Permiso Actualizado", 200, permiso);
  } catch (error) {
    response.Error(res,"Ocurrio un error", error);
  }
};

export const deletepermiso = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const permiso = await Permiso.findByIdAndUpdate(
      id,
      { activo: false },
      { new: true }
    );
    if (permiso) return response.Eliminado(res, "permiso eliminado");
    return response.NotFound(res, "No se encontro el permiso");
  } catch (error) {
    response.Error(res,"Ocurrio un error", error);
  }
};
