import { Router } from "express"
import usuariosRouter from "./usuario.routes.js"
import urlsRouter from "./urls.routes.js"

const router = Router()
router.use(usuariosRouter)
router.use(urlsRouter)

export default router