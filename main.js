class Product {
    constructor(nombre, precio, descripcion, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        this.cantidad = cantidad;
    }
}

class UI {
    añadirProducto(product){
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${product.nombre}
                    <strong>Precio</strong>: ${product.precio}
                    <strong>Descripcion</strong>: ${product.descripcion}
                    <strong>Cantidad</strong>: ${product.cantidad}
                </div>
            </div>
        `
        productList.appendChild(element)

    }

    deleteProduct(){

    }

    showMessage(){

    }
}



 document.getElementById('product-form').addEventListener('submit', function(e){
        e.preventDefault();
        
        const nombre = document.getElementById('nombre').value
        const precio = document.getElementById('precio').value
        const descripcion = document.getElementById('descripcion').value
        const cantidad = document.getElementById('cantidad').value

        console.log(nombre + precio + descripcion + cantidad)

        const producto = new Product(nombre,precio,descripcion,cantidad)

        const ui = new UI()
        ui.añadirProducto(producto)

        console.log(inventario)


        
    }) 

