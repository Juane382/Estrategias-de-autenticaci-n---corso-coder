import { videojuegosManager } from "../managers/manager.videojuegos.js";


export async function postVideojuegosController(req, res, next) {

    const datosVJ = req.body;
    const result = await videojuegosManager.guardar(datosVJ)
    console.log(result);
    res.json(result);
}
