import { Router } from "express";
import { deleteCliente, getAllClientes, getClienteById, newCliente, updateCliente } from "../controllers/clientes.controller";
import { validationHandler } from "../../../middlewares/validationHandler.middleware";
import { clienteSchemaNew,clienteSchemaUpdate } from "../schemas/Cliente.schema";
const routes = Router()


routes.get('/',getAllClientes)
routes.get('/:id', getClienteById)
routes.post('/',[validationHandler(clienteSchemaNew)],newCliente)
routes.put('/:id',[validationHandler(clienteSchemaUpdate)],updateCliente)
routes.delete('/:id',deleteCliente)
export default routes;