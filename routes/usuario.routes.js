import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.middlewares.js";
import { usuariosSchema, loginSchema }  from "../schemas/usuarios.schema.js";
import { signUp, signIn, rankingUrl, meUrl } from "../controllers/usuarios.controller.js";
import { authValidation } from "../middlewares/auth.middleware.js";

const usuariosRouter = Router()

usuariosRouter.post("/signup",validateSchema(usuariosSchema) ,signUp)
usuariosRouter.post("/signin", validateSchema(loginSchema), signIn)
usuariosRouter.get("/users/me", authValidation, meUrl)
usuariosRouter.get("/ranking", rankingUrl)

export default usuariosRouter