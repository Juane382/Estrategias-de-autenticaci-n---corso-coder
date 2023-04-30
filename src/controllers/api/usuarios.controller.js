import { usuarioModel } from '../../models/usuario.model.js'

export async function postUsuarios(req, res, next) {
  console.log(req.body)
  try {
    const usuarioCreado = await usuarioModel.create(req.body)

  req.session.user = {
    name: usuarioCreado.first_name + ' ' + usuarioCreado.last_name,
    email: usuarioCreado.email,
    age: usuarioCreado.age,
  }
  res.status(201).json(usuarioCreado)
  } catch (error) {
    res.status(400).json({error : "usuario existente"})
  }
  
  
}