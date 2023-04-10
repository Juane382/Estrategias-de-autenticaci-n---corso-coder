import mongoose from "mongoose";
import { MONGODB_CNX_STR } from "../config/database.js";

await mongoose.connect(MONGODB_CNX_STR)

const schemaVideojuegos = new  mongoose.Schema({
    nombre: { type: String , required: true},
    genero: { type: String , required: true},
    plataforma: { type: String , required: true},
},{versionKey:false})

export const videojuegosBd = mongoose.model('videojuegos', schemaVideojuegos)