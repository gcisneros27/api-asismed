import { Types } from "mongoose";
import { httpMethods } from "../types/httpMethodsEnum";
export interface IPermiso {
  _id: Types.ObjectId;
  grupo: string;
  metodo: httpMethods;
  path:string;
  descripcion: string;
  activo:boolean
}
