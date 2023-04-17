import { Router } from "express";
import { postCarrosController } from "../controllers/carros.post.controllers.js";
import { getCarrosController } from "../controllers/carros.get.controller.js";

// import { addCart, addProductCart, cart, getCartById } from "../cartsManager.js";


export const cartsRouter = Router()


cartsRouter.post('/', postCarrosController)

cartsRouter.get('/:cid', getCarrosController)

cartsRouter.post('/:cid/product/:pid', async (req, res, next) => {
    try {

        // await addProductCart(req.params.cid, req.params.pid)
        res.send('<h1>POST :cid :pid Carro</h1>')
    } catch (error) {
        res.status(400).json({ message: error.message })
    }

})