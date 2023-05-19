import * as Joi from "joi";

export const permisoSchemaNew: any = Joi.object({
    grupo: Joi.string().required(),
    metodo: Joi.string().valid("GET", "POST","PUT","DELETE"),
    path: Joi.string().required(),
    descripcion: Joi.string().required()
});