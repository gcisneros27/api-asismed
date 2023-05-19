import { Types } from "mongoose";
export interface ITipoDocumentoIdentidad {
  _id: Types.ObjectId;
  codigo: string;
  nombre: string;
}
