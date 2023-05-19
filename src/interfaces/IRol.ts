import { Types } from "mongoose";
export interface IRol {
  _id: Types.ObjectId;
  codigo: string;
  nombre: string;  
  permisos:Array<Types.ObjectId>
  activo:boolean
}
