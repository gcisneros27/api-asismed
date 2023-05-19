import { Schema, model } from "mongoose";
import { IUsuario } from "../interfaces/IUsuario";

const usuarioSchema = new Schema<IUsuario>({
  _cliente: { type: Schema.Types.ObjectId, ref: "Cliente" },
  _codigo_cliente: { type: String, required: true },
  tipo_di: { type: String, required: true },
  documento_identidad: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  datos_personales: {
    primer_nombre: { type: String, required: true },
    segundo_nombre: { type: String, required: false },
    primer_apellido: { type: String, required: true },
    segundo_apellido: { type: String, required: false },
    fecha_nacimiento: { type: Date, required: true },
  },
  contacto: {
    email: { type: String, required: true },
    telefono: { type: String, required: false },
  },
  roles:[{ type: Schema.Types.ObjectId, ref: "Rol" }]
});

export const Usuario = model<IUsuario>("Usuario", usuarioSchema);
