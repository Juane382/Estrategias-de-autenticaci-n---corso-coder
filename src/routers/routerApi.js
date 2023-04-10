import { Router } from 'express';
import { postVideojuegosController } from '../controllers/postVideojuegosController.js';

export const routerApi = Router();

routerApi.post('/videojuegos', postVideojuegosController);
