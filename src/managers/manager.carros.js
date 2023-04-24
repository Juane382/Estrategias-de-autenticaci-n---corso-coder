
import mongoose from "mongoose"


const schemaCarro = new  mongoose.Schema({
    products: { 
        type: [
        {
            product:{
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'product'
            },
            quantity: {type: Number, ref:'product', default: 1}
        }
    ],
    default:[],
    } 
})


class CarrosManager {
    #carrosBd
    constructor(){
        this.#carrosBd = mongoose.model('carros', schemaCarro)
    }

    async guardar(datosC){
        const cGuardado = await  this.#carrosBd.create(datosC)
        return cGuardado
    }
    async obtenerTodos(){
        const crrs = await  this.#carrosBd.find().lean()
        return crrs
    }
    async obtenerSugunID(id){
            const c = await  this.#carrosBd.findById(id).lean()
            return c        
    }
    async actualizarUno(id,c){
        const crr = await this.#carrosBd.updateOne({_id:`${id}`},c)
        
        return crr
    }

    async borrarUno(id){
        const crr = await this.#carrosBd.deleteOne({_id:`${id}`})
        
        return crr
    }
}

export const carrosManager = new CarrosManager()


// let carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
// export class cart {
//     constructor(products = []) {
//         this.products = products
//         this.idc = carts.length + 1
//         carts.push({ idc: this.idc, products: this.products })
//     }

// }

// export async function addCart(carro) {
//     carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
//     carts.push(carro)
//     const json = JSON.stringify(carts, null, 2)
//     await fs.writeFile(paths.cart, json)

// }

// export async function getCartById(idc) {

//     let carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
//     let cart = carts.find(cart => cart.idc == idc)
//     cart ? cart : cart = 'Carrito no encontrado'
//     return cart
// }

// export async function addProductCart(idc, pid) {

//     let carts = JSON.parse(await fs.readFile(paths.cart, 'utf-8'))
//     let cart = carts.find(cart => cart.idc == idc)

//     let prodTrue = cart.products.find(prod => prod.pid == pid)
//     let index = cart.products.indexOf(prodTrue)


//     const productsList = new productManager(paths.products)
//     let product = await productsList.getProductById(pid)

//     product === 'Producto no encontrado' ? product = '' :
//         prodTrue ? cart.products.splice(index, 1, { pid: pid, quantity: cart.products[index].quantity + 1 }) :
//             cart.products.push({ pid: pid, quantity: 1 })

//     const json = JSON.stringify(carts, null, 2)
//     await fs.writeFile(paths.cart, json)

// }
