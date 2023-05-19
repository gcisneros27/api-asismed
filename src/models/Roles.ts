import { Schema, model} from 'mongoose';
import { IRol } from '../interfaces/IRol';
const rolSchema = new Schema<IRol>({

    codigo: { type: String, required: true },
    nombre: { type:String , required: true },
    permisos: [{ type: Schema.Types.ObjectId, ref: "Permiso" }],
    activo:{ type: Boolean, required: true,default:true},
  });

  export const Rol = model<IRol>('Rol', rolSchema);