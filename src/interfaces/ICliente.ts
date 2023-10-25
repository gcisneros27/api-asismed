import { Types } from "mongoose";
export interface ICliente  {
  id:string | undefined;
  codigo: string;
  nombre: string;
  tipo_cliente:string
  tipo_documento_identidad:string
  numero_documento_identidad:string
  pais:string
  email:string
  _activo:boolean
  _transaction:string;
  _created:Date | undefined;
  _updated:Date | undefined;
}
