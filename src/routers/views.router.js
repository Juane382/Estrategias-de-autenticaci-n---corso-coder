import { Router } from 'express';

import { productosManager } from '../managers/manager.productos.js';
import { carrosManager } from '../managers/manager.carros.js';
import { postUsuarios } from '../controllers/api/usuarios.controller.js';
import { registrosVista } from '../controllers/web/registro.controler.js';
import { autenticacion } from '../middlewares/autenticacion.js';
import { profileView } from '../controllers/web/perfil.controller.js';

export const routerVistas = Router();
routerVistas.get('/', (req, res, next) => {
    res.redirect('/registro');
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

routerVistas.get('/registro', registrosVista);
routerVistas.get('/profile',autenticacion, profileView)

routerVistas.post('/api/usuarios',postUsuarios)