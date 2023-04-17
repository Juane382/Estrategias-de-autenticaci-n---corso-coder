import { carrosManager } from "../managers/manager.carros.js";



export async function getTotalCarrosController(req, res, next) {
    
    const carros = await  carrosManager.obtenerTodos()
    console.log(carros)
    res.json(carros);
    res.render('cargacarros', {
        pageTitle: 'carros',
        hayCarros : carros.length > 0,
        carros
    });
}

