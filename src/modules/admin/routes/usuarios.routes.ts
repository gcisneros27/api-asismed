import { Router } from "express";
import { validationHandler } from "../../../middlewares/validationHandler.middleware";
import { newUsuario } from "../controllers/usuarios.controller";
import { usuarioSchemaNew } from "../schemas/Usuario.schema";
const routes = Router()


// routes.get('/clientes',getAllClientes)
// routes.get('/clientes/:id', getClienteById)
routes.post('/',[validationHandler(usuarioSchemaNew)],newUsuario)
// routes.put('/clientes/:id',[validationHandler(clienteSchemaUpdate)],updateCliente)
// routes.delete('/clientes/:id',deleteCliente)
export default routes;