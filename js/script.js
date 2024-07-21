let arrProductos = ["Yerba", 'Producto 2', 'Producto 3', 'Producto 4', 'Producto 5', 'Producto 6', 'Producto 7', 'Producto 8', 'Producto 9', 'Producto 10'];
let arrPrecios=[100,50,60,90,80,70,90,40,5,20];
let arrStock=[10,5,6,8,7,10,3,4,5,6];



/* FUNCIONA PERO NO VIMOS FLAG
var alertaMostrada = false;
setTimeout(function(){
    if (!alertaMostrada) {
        alert('No te olvides de visitar nuestras ofertas !!!!!');
        alertaMostrada = true; // Actualizamos la bandera para indicar que la alerta ya se mostró
    }
}, 5000);
*/


/*
    setTimeout(function(){
        alert(`No te olvides de contactarnos !!!!! `);
        }, 15000);
*/

let items = document.querySelectorAll('.product-item');
function llenarListaProductos(arrProductos, items) {
    for (let i = 0; i < arrProductos.length; i++) {
        items[i].textContent = arrProductos[i];
    }
}
llenarListaProductos(arrProductos, items);


let precios = document.querySelectorAll('.price-item');
function llenarListaPrecios(arrPrecios, precios) {
    for (let i = 0; i < arrPrecios.length; i++) {
        precios[i].textContent = arrPrecios[i];
    }
}
llenarListaPrecios(arrPrecios, precios);

let input = document.querySelectorAll('input');
function controlStock(arrStock, input) {
    for (let i = 0; i < arrStock.length; i++) {
        input[i].max = arrStock[i];
    }
}
controlStock(arrStock, input);

document.querySelector("button").addEventListener("click", () => {
    let cantidades = document.querySelectorAll("input.stock");
    let total = 0;
    for (let i = 0; i < arrStock.length; i++) {
        let cantidad = Number(cantidades[i].value);
        if (cantidad >= 0 && (arrStock[i] - cantidad) >= 0) {
            arrStock[i] -= cantidad; // Actualiza el stock después de la compra
            total += cantidad * arrPrecios[i]; //Acumula la totalidad de la compra
        } else {
            alert("Ingrese una cantidad mayor a cero o no hay suficiente stock");
            //return; // Detiene la ejecución si hay un error
        }
    }
    //Agregue una validacion que al no haber compra, el total quede vacio.
    if(total>0){
        document.getElementById("total").innerText=total;
    }else{
        total="";
    }
    
    controlStock(arrStock, input); // Actualiza los valores máximos de los inputs (el stock)
});







