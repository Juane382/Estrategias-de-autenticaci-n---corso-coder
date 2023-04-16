import mongoose from "mongoose"

const schemaVideojuegos = new  mongoose.Schema({
    nombre: { type: String , required: true},
    genero: { type: String , required: true},
    plataforma: { type: String , required: true},
},{versionKey:false})



class VideojuegosManager {
    #videojuegosBd
    constructor(){
        this.#videojuegosBd = mongoose.model('videojuegos', schemaVideojuegos)
    }

    async guardar(datosVJ){
        const vjGuardado = await  this.videojuegosBd.create(datosVJ)
        return vjGuardado
    }
    async obtenerTodos(){
        const vjs = await  this.videojuegosBd.find().lean()
        return vjs
    }
    async obtenerSugunID(id){
        const vj= await  this.videojuegosBd.findById(id).lean()
        return vj
    }
}

export const videojuegosManager = new VideojuegosManager()