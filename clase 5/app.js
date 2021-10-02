class Productos {
    constructor({
        nombreProducto = "Sin nombre",
        categoriaProducto = "Sin categoria",
        precioProducto = 0,
        stockProducto = 0,
        disponibleProducto
    }) {
        this.nombre = nombreProducto,
            this.categoria = categoriaProducto,
            this.precio = precioProducto,
            this.stock = stockProducto,
            this.disponible = disponibleProducto
        }
    
        comprar(cantidad){
        if (this.stock <= 0) {
            console.log("no podes comprar no nos queda stock");
            this.disponible = false
        } else {
            this.stock = this.stock - cantidad
            alert(`Compraste un ${this.nombre}, te salio ${this.precio * cantidad}`);
        }
    }
}

const producto1 = new Productos({
    stockProducto: 30,
    disponibleProducto: true,
    precioProducto: 4000,
    nombreProducto: "Campera",
    categoriaProducto: "Adidas",
})

const producto2 = new Productos({
    stockProducto: 50,
    disponibleProducto: true,
    precioProducto: 600,
    nombreProducto: "Medias",
    categoriaProducto: "Adidas",
})

console.log(producto1);
console.log(producto2);
