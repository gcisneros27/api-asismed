import { Router } from "express";
import { validationHandler } from "../../../middlewares/validationHandler.middleware";

import { permisoSchemaNew } from "../schemas/Permiso.schema";
import { deletepermiso, getAllPermisos, getPermisoById, newPermiso, updatepermiso } from '../controllers/permisos.controller';
import { validationUniquePermisos } from "../middlewares/permisos.middleware";
const routes = Router()

routes.get('/',getAllPermisos)
routes.get('/:id',getPermisoById)
routes.post('/',[validationHandler(permisoSchemaNew),validationUniquePermisos],newPermiso)
routes.put('/:id',[validationHandler(permisoSchemaNew)],updatepermiso)
routes.delete('/:id',deletepermiso)
export default routes;