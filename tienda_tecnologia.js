let nombre = prompt("Ingrese el nombre del cliente:");
let edad = Number(prompt("Ingrese la edad del cliente:"));
let tipo = prompt("Ingrese el tipo de cliente: estudiante, empleado o cliente general");

let subtotal = 0;
let cantidadProductos = 0;
let continuar = "si";

while(continuar == "si"){

    let producto = prompt("Ingrese el nombre del producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));
    let cantidad = Number(prompt("Ingrese la cantidad comprada:"));

    let totalProducto = precio * cantidad;

    subtotal = subtotal + totalProducto;
    cantidadProductos = cantidadProductos + cantidad;

    continuar = prompt("¿Desea registrar otro producto? si/no");
}

let descuentoTipo = 0;

if(tipo == "estudiante"){
    descuentoTipo = subtotal * 0.05;
}
else if(tipo == "empleado"){
    descuentoTipo = subtotal * 0.10;
}
else{
    descuentoTipo = 0;
}

let subtotalDescuento = subtotal - descuentoTipo;

let descuentoExtra = 0;

if(subtotal > 1000){
    descuentoExtra = subtotal * 0.10;
}
else if(subtotal > 500){
    descuentoExtra = subtotal * 0.05;
}

let totalDescuentos = descuentoTipo + descuentoExtra;
let total = subtotal - totalDescuentos;


document.write("Nombre del cliente: " + nombre + "<br>");
document.write("Tipo de cliente: " + tipo + "<br>");
document.write("Cantidad de productos: " + cantidadProductos + "<br>");
document.write("Subtotal: Q" + subtotal + "<br>");
document.write("Descuento aplicado: Q" + totalDescuentos + "<br>");
document.write("Total a pagar: Q" + total + "<br>");
document.write("Compra realizada correctamente.<br>");
document.write("Gracias por su compra.");