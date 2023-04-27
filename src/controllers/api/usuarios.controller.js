import { usuarioModel } from "../../models/usuario.model.js"

export async function postUsuarios(req,res,next) {
    console.log(req.body)
    const usuarioCreado = await usuarioModel.create(req.body)
    res.status(201).json(usuarioCreado)
}