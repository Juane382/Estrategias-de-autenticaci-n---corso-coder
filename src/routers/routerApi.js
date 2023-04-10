import { Router } from 'express';
import { videojuegosBd } from '../database/mongoose';

export const routerApi = Router();
routerApi.post('/videojuegos', async (req, res, next) => {
    
    const datosVJ = req.body
    const result = await videojuegosBd.create(datosVJ)
    console.log(result);
    res.json(result);
});
