document.addEventListener("DOMContentLoaded", (e) => {
    obtenerProductos();
});

const listaProductos = document.querySelector("#lista-productos");
const footerCarrito = document.querySelector("#footer-carrito");
const itemsCarrito = document.querySelector("#items");
let carrito = [];

const obtenerProductos = async () => {
    try {
        const res = await fetch("../JS/Api.json");
        const data = await res.json();
        insertarTemplate(data);
        eventoBotones(data);
    } catch (error) {
        console.log(error);
    }
};

const insertarTemplate = (data) => {
    const template = document.querySelector("#template-producto").content;
    const fragment = new DocumentFragment();
    data.forEach((producto) => {
        template.querySelector("img").setAttribute("src", producto.img);
        template.querySelector("h5").textContent = producto.title;
        template.querySelector(".card-text span").textContent = producto.precio;

        template.querySelector("button").setAttribute("data-id", producto.id);
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    listaProductos.appendChild(fragment);
};

const eventoBotones = (data) => {
    const btnAgregar = document.querySelectorAll(".btn-dark");
    btnAgregar.forEach((btn) => {
        btn.addEventListener("click", () => {

            const [producto] = data.filter(
                (item) => item.id === parseInt(btn.dataset.id)
            );

        const productoCarrito = {
            id: producto.id,
            title: producto.title,
            cantidad: 1,
            precioTotal: producto.precio
        }

        const exiteEnCarrito = carrito.some(item => item.id === productoCarrito.id)

        if (exiteEnCarrito) {
            const productos = carrito.map(item => {
                if (item.id === productoCarrito.id) {
                    item.cantidad++
                    item.precioTotal = item.precioTotal + productoCarrito.precioTotal
                    return item;
                } else {
                    return item
                }
            })
            carrito = [...productos]
        } else {
                carrito.push(productoCarrito);
            }
        
            pintarEnCarrito();
        });
    });
};

const totalFooter = () => {
    if (carrito.length === 0) {
        footerCarrito.innerHTML = `<th scope="row" colspan="5">Su carrito está vacío!</th>`
        return
    }

    const nProductos = carrito.reduce((a, b) => ({ cantidad: a.cantidad + b.cantidad }))


    const nPrecio = carrito.reduce((a, b) => ({ precioTotal: a.precioTotal + b.precioTotal }))

    footerCarrito.innerHTML = ''
    const template = document.querySelector("#template-footer").content;
    const fragment = document.createDocumentFragment();

    template.querySelectorAll('td')[0].textContent = nProductos.cantidad
    template.querySelector('.font-weight-bold span').textContent = nPrecio.precioTotal

    const clone = template.cloneNode(true)
    fragment.appendChild(clone)
    footerCarrito.appendChild(fragment)


    const vaciarCarrito = document.querySelector('#vaciar-carrito')
    vaciarCarrito.addEventListener('click', () => {
        carrito = []
        pintarEnCarrito()
    })
}


const pintarEnCarrito = () => {


    itemsCarrito.innerHTML = ''

    const template = document.querySelector("#template-carrito").content;
    const fragment = document.createDocumentFragment();


    carrito.forEach(item => {
        template.querySelector("th").textContent = item.id;
        template.querySelectorAll("td")[0].textContent = item.title;
        template.querySelectorAll("td")[1].textContent = item.cantidad;
        template.querySelector('.btn-danger').setAttribute('data-id', item.id)
        template.querySelector('.btn-info').setAttribute('data-id', item.id)
        template.querySelectorAll("td")[3].textContent = item.precioTotal;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    })
    
    itemsCarrito.appendChild(fragment);  
    borrarItemCarrito()
    totalFooter();
};

const borrarItemCarrito = () => {

    const btnAgregar = document.querySelectorAll('#items .btn-info')
    const btnEliminar = document.querySelectorAll('#items .btn-danger')

    btnAgregar.forEach(btn => {
        btn.addEventListener('click', () => {

            const arrayFiltrado = carrito.map(item => {
                if (item.id === parseInt(btn.dataset.id)) {
                    item.precioTotal = item.precioTotal + item.precioTotal/item.cantidad
                    item.cantidad++

                    return item;
                } else {
                    return item
                }
            })

            carrito = [...arrayFiltrado]
            pintarEnCarrito()
            totalFooter()
        })
    })

    btnEliminar.forEach(btn => {
        btn.addEventListener('click', () => {
            const arrayFiltrado = carrito.filter(item => {
                if (item.id === parseInt(btn.dataset.id)) {
                    item.precioTotal = item.precioTotal - item.precioTotal/item.cantidad
                    item.cantidad--

                    if (item.cantidad === 0) {
                        return
                    }
                    return item;
                } else {
                    return item
                }
            })

            carrito = [...arrayFiltrado]
            pintarEnCarrito()
            totalFooter()
        })
    })

}





























































// const articulos = [
//     {
//         nameItem: "ANIMAL",
//         precio: 350,
//         stock: 36,
//     },
//     {
//         nameItem: "GORRO",
//         precio: 130,
//         stock: 65,
//     },
//     {
//         nameItem: "BUFANDA",
//         precio: 200,
//         stock: 94,
//     },
//     {
//         nameItem: "LLAVERO",
//         precio: 60,
//         stock: 25,
//     },
//     {
//         nameItem: "JOYA",
//         precio: 260,
//         stock: 53,
//     },
// ];


// alert('Bienvenido a nuestra tienda, estamos en desarrollo, así que por favor, sigue las instrucciones al pie de la letra, Gracias!!');

// let nameCostumer = prompt('Por favor ingresa tu nombre.');
// alert('Gracias ' + nameCostumer.toUpperCase() + ', ahora vamos a elegir los artículos de tu compra.');

// let carritoCompras = [];

// let ready = prompt('¿Estás listo para iniciar? Escribe: Si o No').toUpperCase();

// if (ready == "SI") { 
//     alert('Te mostraré la lista de artículos disponibles.');
//     let listItem = articulos.map((articulo) => articulo.nameItem + " - " + "$"  + articulo.precio);
//     alert(listItem.join("\n"));
// } else if (ready = "NO") {
//     alert('Entiendo ... vuelve cuando estés listo ... ¡Gracias por venir!');
// }

// while (ready != "NO") {
//     let articulo = prompt("Agrega el nombre del artículo que deseas:\n ANIMAL\n GORRO\n BUFANDA\n LLAVERO\n JOYA").toUpperCase();
//     let precio = 0;

//     if (
//         articulo == "ANIMAL" ||
//         articulo == "GORRO" ||
//         articulo == "BUFANDA" ||
//         articulo == "LLAVERO" ||
//         articulo == "JOYA"
//     ) {
//         switch (articulo) {
//             case "ANIMAL":
//                 precio = 350;
//                 break;
//             case "GORRO":
//                 precio = 130;
//                 break;
//             case "BUFANDA":
//                 precio = 200;
//                 break;
//             case "LLAVERO":
//                 precio = 60;
//                 break;
//             case "JOYA":
//                 precio = 260;
//                 break;
//             default:
//                 break;
//         }
//         let cantidad = parseInt(prompt('¿Cuántos artículos quieres agregar?'));
//         carritoCompras.push({articulo, cantidad, precio});
//     }   else {
//         alert("El producto que ingresaste no existe");
//     }

//     ready = prompt('¿Deseas agregar otro artículo? SI / NO').toUpperCase(); 

//     while (ready == "NO") {
//         alert('Gracias por su compra');

//         carritoCompras.forEach((carritoTotal) => {
//             alert(`Artículo: ${carritoTotal.articulo}, cantidad: ${carritoTotal.cantidad}, Total por artículo: ${(carritoTotal.cantidad * carritoTotal.precio)}`);
//         });
//         break;
//     }
// }

// const total = carritoCompras.reduce((acc, con) => acc + con.precio * con.cantidad, 0);
// console.log(`el total a pagar por su compra es de: ${total}`);

// class Cliente {
//     constructor(nombreFiscal, rfc, domicilioFiscal) {
//         this.nombreFiscal = nombreFiscal,
//         this.rfc = rfc,
//         this.domicilioFiscal = domicilioFiscal
//     }
// }

// function agregarCliente() {
//     let nombreFiscal = prompt('Ingresa el nombre o razón social:').toUpperCase();
//     let rfc = prompt('Ingresa el RFC del cliente, en caso de no tener ingresa "Sin RFC"').toUpperCase();
//     let domicilioFiscal = prompt('Ingresa el domicilio').toUpperCase();

//     const clientes = [];

//     clientes.push(new Cliente (nombreFiscal, rfc, domicilioFiscal))
//     alert(`Nombre o razón social: ${nombreFiscal} RFC: ${rfc} Dirección ${domicilioFiscal}`);

//     alert('Ups!! Falta agregar el número de teléfono');

//     let numTel = prompt(`Ingresa el número para guardarlo: `).toUpperCase();

//         clientes.push(numTel);
//         console.log(clientes);

//     let ready = prompt('¿Deseas agregar otro dato? Si / No').toUpperCase();

//     while (ready != "SI" && ready != "NO") {
//         alert('Solo se admiten las opciones SI o NO')
//         ready = prompt('¿Deseas agregar otro dato? Si / No').toUpperCase();
//     }

    
//     while (ready != "NO") {
//         let nuevoDato = prompt('Ingresa el dato que quieres agregar:\n CORREO\n SUCURSAL\n OTRO:').toUpperCase();

//         if (
//             nuevoDato == "CORREO" ||
//             nuevoDato == "SUCURSAL" ||
//             nuevoDato == "OTRO"
//         ) {
//             switch (nuevoDato) {
//                 case "CORREO":
//                     nuevoDato = prompt(`Ingresa el correo para agregarlo a los datos del cliente`);
//                     break;
//                 case "SUCURSAL":
//                     nuevoDato = prompt(`Ingresa domicilio de sucursal para agregarlo a los datos del cliente`);
//                     break;
//                 case "OTRO":
//                     nuevoDato = prompt(`Ingresa el dato para agregarlo a los datos del cliente`);
//                     break;
//             }
//             clientes.push(nuevoDato);
//             alert('Dato agregado correctamente');
//         } else {
//             alert('Por favor ingresa OTRO para agregar mas datos')
//         }

//         ready = prompt('¿Deseas agregar otro dato? Si / No').toUpperCase();

//         while (ready == "NO") {
//             alert('Cliente agregado correctamente');
//             console.log(clientes);
//                 break;
//         }
//     }
// }


// alert('Bien!! vamos a dar de alta un cliente');

// const altaCliente = agregarCliente();
// console.log(altaCliente);

// ready1 = prompt('¿Deseas agregar otro cliente? Si / No').toUpperCase();

// while (ready1 != "SI" && ready1 != "NO") {
//     alert('Solo se admiten las opciones SI o NO')
//     ready1 = prompt('¿Deseas agregar otro dato? Si / No').toUpperCase();
// }

// while (ready1 != "NO") {
//     const altaCliente = agregarCliente();
//     console.log(altaCliente);
//     ready1 = prompt('¿Deseas agregar otro cliente? Si / No').toUpperCase();
// }

//     while (ready1 == "NO") {
//     alert('Continuemos');
//     break;
// }


// class Item {
//     constructor(articulo, costo, inventario) {
//         this.articulo = articulo,
//         this.costo = parseFloat(costo),
//         this.inventario = parseFloat(inventario)
//     }
// }

// function agregarArticulo() {
//     let articulo = 0;
//     let inventario = 0;
//     let costo = 0;

//     while(!articulo || articulo == 0 || articulo > 5) {
//         articulo = parseInt(prompt("¿Qué artículo tejido deseas agregar?:\n 1: Abrigo ($350.00) 20 Piezas \n 2: Juguete ($130.00) 36 Piezas \n 3: Manta ($200.00) 29 Piezas \n 4: Lapicera ($60.00) 18 Piezas\n 5: Artesanía ($260.00) 9 Piezas"));
//     }

//     switch(articulo){
//         case 1:
//             articulo = "Abrigo";
//             costo = 350;
//             inventario = 20;
//             break;
//         case 2:
//             articulo = "Juguete";
//             costo = 130;
//             inventario = 36;
//             break;
//         case 3:
//             articulo = "Manta";
//             costo = 200;
//             inventario = 29;
//             break;
//         case 4:
//             articulo = "Lapicera";
//             costo = 60;
//             inventario = 18;
//             break;
//         case 5:
//             articulo = "Artesanía";
//             costo = 260;
//             inventario = 9;
//             break;
        
//     }

//     const articulos = []

//     articulos.push(new Item (articulo, costo, inventario));

//     return articulos;
// }


// alert('Ahora necesito que me ayudes a dar de alta un nuevo articulo, de igual manera, te pido que sigas las instrucciones al pie de la letra.')

// alert( nameCostumer.toUpperCase()+', ahora te mostraré la lista de artículos nuevos que daremos de alta')

// const alta = agregarArticulo();
// console.log(alta);

// alert("Muchas gracias por tu ayuda " + nameCostumer.toUpperCase() + ", vamos mejorando pero aún nos falta.");
// alert("Hasta el próximo desafío ... ")