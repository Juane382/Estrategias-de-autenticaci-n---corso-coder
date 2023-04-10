import { videojuegosBd } from '../database/mongoose.js';

export async function postVideojuegosController(req, res, next) {

    const datosVJ = req.body;
    const result = await videojuegosBd.create(datosVJ);
    console.log(result);
    res.json(result);
}
