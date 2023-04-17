import { productosManager } from "../managers/manager.productos.js";


export async function postProductosController(req, res, next) {

    const datosP = req.body;
    const result = await productosManager.guardar(datosP)
    //console.log('result. '+result);
    res.json(result);
}
