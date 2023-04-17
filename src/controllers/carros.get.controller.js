import { carrosManager } from "../managers/manager.carros.js";



export async function getCarrosController(req, res, next) {
    let cart = req.params.cid
    const carros = await  carrosManager.obtenerSugunID(cart)
    console.log(carros)
    res.json(carros);
    
}

