import { Schema, model} from 'mongoose';
import { ICliente } from '../interfaces/ICliente';
import { IPermiso } from '../interfaces/IPermiso';
import { number } from 'joi';
import { httpMethods } from '../types/httpMethodsEnum';
const permisoSchema = new Schema<IPermiso>({

    grupo: { type: String, required: true },
    metodo: { type:String , required: true },
    path: { type: String, required: true },
    descripcion: { type: String, required: true },
    activo:{ type: Boolean, required: true,default:true},
  });

  export const Permiso = model<IPermiso>('Permiso', permisoSchema);