import { Router } from "express";
import { postCarrosController } from "../controllers/carros.post.controllers.js";
import { getCarrosController } from "../controllers/carros.get.controller.js";
import { populateCarro } from "../controllers/populate.carro.js";

// import { addCart, addProductCart, cart, getCartById } from "../cartsManager.js";


export const cartsRouter = Router()


cartsRouter.post('/', postCarrosController)

cartsRouter.get('/:cid', getCarrosController)

cartsRouter.post('/:cid/product/:pid', populateCarro)