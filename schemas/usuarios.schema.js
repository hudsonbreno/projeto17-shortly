import joi from "joi"

export const usuariosSchema = joi.object({
    name: joi.string().required(),
    email:joi.string().required(),
    password: joi.string().required(),
    isPassword: joi.string().min(6).required()
})

export const loginSchema = joi.object({
    email:joi.string().required(),
    password:joi.string().min(6).required()
})