import { Inventario } from "../clases/Inventario.js";
import { Producto } from "../clases/Producto.js";

const cardsInventario = document.getElementById("cards-inventario")


const apiURL = '/api.json';
const obtenerJson = async() => {
    try{
        const res = await fetch(apiURL)
        const data = await res.json()
        const inventario = new Inventario() //instanciar inventario

        data.forEach(producto => {
            const nuevoProducto = new Producto(producto.codigo,producto.nombre,producto.marca,producto.categoria,producto.precio,producto.cantidad,producto.stock)
            inventario.agregarProducto(nuevoProducto)
        });
        
        inventario.productos.forEach(producto => {
            const card = document.createElement('div')
            card.classList.add('card-body')
            card.innerHTML =
            `
            <div>
                <strong>Producto</strong>: ${producto.nombre}
                <strong>Categoria</strong>: ${producto.categoria}
                <strong>Precio</strong>: $${producto.precio}
                <strong>Stock</strong>: ${producto.stock}    
                ${producto.codigo}
            </div>
            <div>
                <button class="btn btn-primary">Editar</button>
                <button class="btn btn-danger">Eliminar</button>
            </div>
            `
            cardsInventario.appendChild(card)
        })
    } catch(error){
        console.log(error)
    }
}
obtenerJson()

function mostrar(){
    console.log("hola")
}