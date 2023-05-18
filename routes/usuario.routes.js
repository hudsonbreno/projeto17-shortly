import { Router } from "express";
import { validateSchema } from "../../projeto16-boardcamp/middlewares/validateSchema.middlewares.js";
import { usuariosSchema, loginSchema }  from "../schemas/usuarios.schema.js";
import { signUp, signIn } from "../controllers/usuarios.controller.js"

const usuariosRouter = Router()

usuariosRouter.post("/signup",validateSchema(usuariosSchema) ,signUp)
usuariosRouter.post("/signin", validateSchema(loginSchema), signIn)

export default usuariosRouter