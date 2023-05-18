import { Router } from "express";
import { validateSchema } from "../../projeto16-boardcamp/middlewares/validateSchema.middlewares.js";
import urlSchema from "../schemas/urls.schema.js";
import { urlsTransforming, urlGet } from "../controllers/urls.controller.js";
import { authValidation } from "../middlewares/auth.middleware.js";

const urlsRouter = Router()

urlsRouter.post("/urls/shorten", authValidation, urlsTransforming)
urlsRouter.get("/urls/:id", urlGet)
// urlsRouter.get("/urls/open/:shortUrl", )
// urlsRouter.delete("/urls/:id", authValidation)

export default urlsRouter