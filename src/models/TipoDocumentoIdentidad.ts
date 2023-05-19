import { Schema, model} from 'mongoose';
import { ICliente } from '../interfaces/ICliente';
import { ITipoDocumentoIdentidad } from '../interfaces/ITipoDocumentoIdentidad';
const tipoDocumentoIdentidadSchema = new Schema<ITipoDocumentoIdentidad>({
    codigo: { type: String, required: true },
    nombre: { type: String, required: true },
  });

  export const TipoDocumentoIdentidad = model<ITipoDocumentoIdentidad>('TipoDocumentoIdentidad', tipoDocumentoIdentidadSchema);