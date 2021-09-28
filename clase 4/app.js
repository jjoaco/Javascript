var productoConIva,productoSinIva,numeroDeProducto,iva;
var resultado=[];
function inicioDeDatos(){
    productoSinIva=prompt('Introduzca el importe del producto');
    productoSinIva=Number(productoSinIva);
    numeroDeProducto=prompt('Introduzca el numero de producto "1" o "2"');
    numeroDeProducto=Number(numeroDeProducto);
    
    if(numeroDeProducto==1 || numeroDeProducto==2){
        obtenerproductoConIva(productoSinIva,numeroDeProducto);
    }else{
        alert('No existe este tipo de producto');
    }
    obtenerproductoConIva2(productoSinIva);
}
function obtenerproductoConIva(productoSinIva,numeroDeProducto) {
    if(numeroDeProducto==1){
        iva=1.21;
    }
    else if(numeroDeProducto==2){
        iva=1.1;
        }
        productoConIva=productoSinIva*iva;
    alert('El importe con iva del producto numero '+numeroDeProducto+ ' es: $'+productoConIva+ '\n\n');	
}