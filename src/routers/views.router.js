import { Router } from 'express';

import { productosManager } from '../managers/manager.productos.js';
import { carrosManager } from '../managers/manager.carros.js';

export const routerVistas = Router();
routerVistas.get('/', (req, res, next) => {
    res.redirect('/productos');
});
routerVistas.get('/productos',async  (req, res, next) => {

    const productos = await  productosManager.obtenerTodos()
    const carros = await  carrosManager.obtenerTodos()

    res.render('cargaproductos', {
        pageTitle: 'Carrito',
        hayProductos : productos.length > 0,
        productos,
        hayCarros : carros.length > 0,
        carros
    });

    
});
