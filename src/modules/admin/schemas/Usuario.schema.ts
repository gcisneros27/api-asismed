import * as Joi from "joi";
import { IUsuario } from "../../../interfaces/IUsuario";

export const usuarioSchemaNew = Joi.object({
    _cliente: Joi.string().required(),
    _codigo_cliente: Joi.string().required(),
    tipo_di: Joi.string().valid("CI", "RIF", "DNI"),
    documento_identidad: Joi.string().required(),
    username: Joi.string().required(),
    password: Joi.string().email().required(),
    datos_personales:{
        primer_nombre: Joi.string().required(),
        segundo_nombre: Joi.string().optional(),
        primer_apellido: Joi.string().required(),
        segundo_apellido: Joi.string().optional(),
        fecha_nacimiento: Joi.date().required(),
    },
    contacto:{
        email:Joi.string().email().required(),
        telefono:Joi.string(),
    }
    
});