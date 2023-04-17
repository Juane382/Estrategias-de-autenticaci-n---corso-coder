import { carrosManager } from "../managers/manager.carros.js";



export async function postCarrosController(req, res, next) {

    const datosC = req.body;
    const result = await carrosManager.guardar(datosC)
    console.log('result. '+ result);
    res.json(result);
    //res.send('<h1>POST Carro nuevo</h1>')
}

