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
            id: 3,
            nombre:'Pizza',
            precio:8000,
            imagen:'/images/pizza.jpg'
        },
    ]

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
            // estructura para crear los elementos para el html
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // body
            const miNodoCardBody= document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            // llamar de la base de datos el titulo
            miNodoTitle.textContent = info.nombre;
            // imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            // llamar la imagen de la base de datos
            miNodoImagen.setAttribute('src', info.imagen);
            // precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            // llamar el precio de la base de datos
            miNodoPrecio.textContent = '$' + info.precio;

            // boton y su evento
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = 'Agregar';
            miNodoBoton.setAttribute('marcador',info.id);
            miNodoBoton.addEventListener('click', agregarProducto);

            // insertar los elementos de la base de datos a sus respectivas etiquetas html
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);

        
        });
        
    }

    // Crear la función para el boton con su evento click, para agregar los produductos al pedido
    /**
     * 
     * @param {eventoClick} evento click para el boton agregar
     */
    function agregarProducto(evento) {
        // tener presente la etiqueta ul con id=Pedido, en el index, para agregar el producto
        Pedido.push(evento.target.setAttribute('marcador'));
    }

    // crear la función para el pedido
    function renderizarPedido() {
        // limpiar todo el los items en el html
        DOMPedido.textContent = '';
        // quitar los duplicados
        const PedidoSinDuplicados = [...new Set(Pedido)];
        // generar el pedido de acuerdo a los items
        PedidoSinDuplicados.forEach((item) => {
            // obtenemos los items de la base de datos
            const miItem = baseDeDatos.filter((itemBaseDatos) => {
                return itemBaseDatos.id === parseInt(item);
                
            });
            // contar el numeros de veces que se repite el producto
            const numeroUnidadesItem = Pedido.reduce((total, itemId) => {
                // si coinciden los id, incremento
                return itemId === item ? total += 1 : total;            
            }, 0);
            // crear la lista de los items del pedido
            const miNodo = document.createElement('li');
            miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}`;





        });
    
    }

    // funcion para calcular total del pedido

    function calcularTotal() {
        // vaciar el total anterior
        total = 0;
        // recorrer el array del pedido
        Pedido.forEach((item)=>{
            // de cada producto obtener el precio
            const miItem = baseDeDatos.filter((itemBaseDatos)=>{
                // retornar el valor
                return itemBaseDatos.id === parseInt(item);
            });
            // se hace el calculo
            total = total + miItem[0].precio;

        });
        // imprimir el total
        DOMtotal.textContent = total.toFixed(2);
        
    }


    // guardar en el localstorage
    function guardarPedidoLocalStorage() {
        milocalStorage.setItem('Pedido',JSON.stringify(Pedido));        
    }

    // cargar el pedido al localstorage
    function cargarLocalStorage() {
        if(milocalStorage.getItem('Pedido') !== null) {
            // carga la información
            Pedido = JSON.parse(milocalStorage.getItem('Pedido')); 
        }
        
    }



    // borrar item del pedido






    // llamar las funciones

    renderizarProductos();

    
}

