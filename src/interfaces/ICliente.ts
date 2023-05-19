import { Types } from "mongoose";
export interface ICliente {
  _id: Types.ObjectId;
  codigo: string;
  nombre: string;
  tipo_cliente:string
  tipo_documento_identidad:string
  numero_documento_identidad:string
  pais:string
  email:string
  activo:boolean
}
