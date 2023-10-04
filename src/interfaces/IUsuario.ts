import { Types } from "mongoose";
import { codigoTipoDI } from "../types/tipoDocumentoIdentidad.enum";
export interface IUsuario {
  _id?: Types.ObjectId;
  _cliente: Types.ObjectId;
  _codigo_cliente:string;
  tipo_di: codigoTipoDI;
  documento_identidad: string;
  username: string;
  password: string;
  datos_personales: IDatosPersonalesUsuario;
  contacto: IContactoUsuario;
  roles:Array<Types.ObjectId>
  activo:boolean
}

interface IDatosPersonalesUsuario {
  primer_nombre: string;
  segundo_nombre?: string;
  primer_apellido: string;
  segundo_apellido?: string;
  fecha_nacimiento: Date;
}

interface IContactoUsuario {
  email: string;
  telefono?: string;
}
