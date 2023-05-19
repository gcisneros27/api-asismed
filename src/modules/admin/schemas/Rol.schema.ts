import * as Joi from "joi";

export const rolSchemaNew: any = Joi.object({
    nombre: Joi.string().required(),
    permisos: Joi.array().items(
        Joi.string()
    ),
    descripcion: Joi.string().required()
});