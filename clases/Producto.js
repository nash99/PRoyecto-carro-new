export class Producto {
    codigo;
    nombre;
    marca;
    categoria;
    precio;
    cantidad;
    stock;
    alerta;

    constructor(codigo,nombre,marca,categoria,precio,cantidad,stock){
        this.codigo = codigo;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
        this.cantidad = cantidad;
        this.stock = stock;
    }

    mostrarCodigo(id){
        console.log(id)
    }



}