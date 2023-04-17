import { Router } from 'express';
import { postProductosController } from '../controllers/productos.post.controller.js';

export const routerApi = Router();

routerApi.post('/productos', postProductosController);
