import mongoose from "mongoose"

const schemaProductos = new  mongoose.Schema({
    title: { type: String , required: true},
    description: { type: String , required: true},
    price: { type: String , required: true},
    thumbnail: { type: String , required: true},
    thumbnail: { type: String , required: true},
    status: { type: String , required: true},
    stock: { type: String , required: true}
},{versionKey:false})



class ProductosManager {
    #productosBd
    constructor(){
        this.#productosBd = mongoose.model('productos', schemaProductos)
    }

    async guardar(datosP){
        const pGuardado = await  this.#productosBd.create(datosP)
        return pGuardado
    }
    async obtenerTodos(){
        const prs = await  this.#productosBd.find().lean()
        return prs
    }
    async obtenerSugunID(id){
        const p = await  this.#productosBd.findById(id).lean()
        return p 
    }
}

export const productosManager = new ProductosManager()