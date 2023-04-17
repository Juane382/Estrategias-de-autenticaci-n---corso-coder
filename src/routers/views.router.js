import { Router } from 'express';

import { productosManager } from '../managers/manager.productos.js';

export const routerVistas = Router();
routerVistas.get('/', (req, res, next) => {
    res.redirect('/productos');
});
routerVistas.get('/productos',async  (req, res, next) => {

    const productos = await  productosManager.obtenerTodos()


    res.render('cargaproductos', {
        pageTitle: 'productos',
        hayProductos : productos.length > 0,
        productos
    });
});
