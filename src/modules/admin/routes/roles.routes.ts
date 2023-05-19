import { Router } from "express";
import { validationHandler } from "../../../middlewares/validationHandler.middleware";
import { deleteRol, getAllRoles, getRolById, newRol, updateRol } from "../controllers/roles.controller";
import { rolSchemaNew } from "../schemas/Rol.schema";
const routes = Router()

routes.get('/',getAllRoles)
routes.get('/:id',getRolById)
routes.post('/',[validationHandler(rolSchemaNew)],newRol)
routes.put('/:id',[validationHandler(rolSchemaNew)],updateRol)
routes.delete('/:id',deleteRol)
export default routes;