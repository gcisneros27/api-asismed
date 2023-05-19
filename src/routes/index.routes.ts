import { Router } from "express";
import clienteRoutes from '../modules/admin/routes/clientes.routes'
import usuariosRoutes from '../modules/admin/routes/usuarios.routes'
import permisosRoutes from '../modules/admin/routes/permisos.routes'
import rolesRoutes from '../modules/admin/routes/roles.routes'

const routes = Router()
const base = '/api/v1'

routes.get(`${base}/status`, (req, res) => {
    res.send(`Servicio api-ventas up ${new Date()}` )
})

routes.use(`${base}/admin/clientes`, clienteRoutes )
routes.use(`${base}/admin/usuarios`, usuariosRoutes )
routes.use(`${base}/admin/permisos`, permisosRoutes )
routes.use(`${base}/admin/roles`, rolesRoutes )

export default routes