import { carrosManager } from "../managers/manager.carros.js"



export async function deleteProducto(req, res, next){
    const idc = req.params.cid
    const idp = req.params.pid
    let carro = await carrosManager.obtenerSugunID(idc)


    if (carro) {
        const finProduct = carro.products.find(({ product }) => product == idp)

        if (finProduct) {
            let index = carro.products.indexOf(finProduct)
            carro.products.splice(index,1)
        }
        
        await carrosManager.actualizarUno(idc, carro)
    }
    res.json(carro)
}