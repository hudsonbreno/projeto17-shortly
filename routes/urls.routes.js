import { Router } from "express";
import { urlsTransforming, urlGet, urlOpen, urlDelete } from "../controllers/urls.controller.js";
import { authValidation } from "../middlewares/auth.middleware.js";

const urlsRouter = Router()

urlsRouter.post("/urls/shorten", authValidation, urlsTransforming)
urlsRouter.get("/urls/:id", urlGet)
urlsRouter.get("/urls/open/:shortUrl", urlOpen)
urlsRouter.delete("/urls/:id", authValidation, urlDelete)

export default urlsRouter