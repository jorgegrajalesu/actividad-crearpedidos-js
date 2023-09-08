// crear un objeto de window
window.onload = function() {
    // crer un objeto literal
    const baseDeDatos = [
        {
            id: 1,
            nombre:'Hotdog',
            precio:4000,
            imagen:'/images/hotdog.jpg'
        },
        {
            id: 2,
            nombre:'Hamburguesa',
            precio:5000,
            imagen:'/images/hamburger.jpg'
        },
        {
            id: 1,
            nombre:'Pizza',
            precio:8000,
            imagen:'/images/pizza.jpg'
        },
    ]
};

// crear variables del pedido, total, localstorage e items
let pedido = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMPedido = document.querySelector('#Pedido');
const DOMtotal = document.querySelector('#total');
const DOMbotonVaciar = document.querySelector('#boton-vaciar');
const milocalStorage = window.localStorage;

// crear funciones

/**
 * @params sin parametros, funcion renderizar los productos, hace la captura de los productos que están en la base de datos
 */

function renderizarProductos() {
    // recorrer la base de datos con un foreach
    baseDeDatos.forEach((info) => {
        // estructura 
    });
    
}
