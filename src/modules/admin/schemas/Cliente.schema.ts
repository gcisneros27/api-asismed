import * as Joi from "joi";

export const clienteSchemaNew: any = Joi.object({
  nombre: Joi.string().required(),
  tipo_cliente: Joi.string().valid("N", "J"),
  tipo_documento_identidad: Joi.string().valid("CI", "RIF", "DNI"),
  numero_documento_identidad: Joi.string().required(),
  pais: Joi.string().required(),
  email: Joi.string().email().required(),
});


export const clienteSchemaUpdate: any = Joi.object({
  nombre: Joi.string().optional(),
  tipo_cliente: Joi.string().valid("N", "J").optional(),
  tipo_documento_identidad: Joi.string().valid("CI", "RIF", "DNI").optional(),
  numero_documento_identidad: Joi.string().optional(),
  pais: Joi.string().optional(),
  email: Joi.string().email().optional(),
});