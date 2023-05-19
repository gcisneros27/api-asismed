import { Types } from "mongoose";
import { httpMethods } from "../types/http_methods_enum";
export interface IPermiso {
  _id: Types.ObjectId;
  grupo: string;
  metodo: httpMethods;
  path:string;
  descripcion: string;
  activo:boolean
}
