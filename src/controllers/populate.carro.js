import { carrosManager } from "../managers/manager.carros.js";
import mongoose from "mongoose"


export async function populateCarro(req, res, next) {
    //await carrosManager.borrarUno("64404471e7bff30cba1f1cc5") 
    const idc = req.params.cid
    const idp = req.params.pid
    let carro = await carrosManager.obtenerSugunID(idc)


    if (carro) {
        const finProduct = carro.products.find(({ product }) => product == idp)

        if (finProduct) {
            let index = carro.products.indexOf(finProduct)
            carro.products[index].quantity++
        }
        else {
            carro.products.push({ product: `${idp}` })
        }
        await carrosManager.actualizarUno(idc, carro)
    }
    res.json(carro)
}



