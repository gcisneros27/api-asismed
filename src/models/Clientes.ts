import { Schema, model} from 'mongoose';
import { ICliente } from '../interfaces/ICliente';
import { boolean } from 'joi';
const clienteSchema = new Schema<ICliente>({
    codigo: { type: String, required: true },
    nombre: { type: String, required: true },
    tipo_cliente: { type: String, required: true },
    tipo_documento_identidad: { type: String, required: true },
    numero_documento_identidad: { type: String, required: true },
    pais: { type: String, required: true },
    email: { type: String, required: true },
    activo:{ type: Boolean, required: true,default:true},
  });

  export const Cliente = model<ICliente>('Cliente', clienteSchema);