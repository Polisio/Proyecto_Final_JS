// let carrito = [];

// function vitrina() {
    
//     const contenido = document.getElementById('shop');

//     itemsAnimales.forEach((itm) => {
//         let item = document.createElement("div");
//         item.classList.add('col-12');
//         item.classList.add('col-md-6');
//         item.classList.add('col-lg-4');
//         item.classList.add('col-xl-4');
//         item.innerHTML = `
//         <fieldset class="formStyle">
//         <a href="#" data-bs-toggle="modal" data-bs-target="#${itm.nombre}">
//         <img class="w-50 mb-4 rounded modalimg" src = ${itm.img} alt="${itm.descripcion}">
//         </a><br>
//         <div tabindex="-1" aria-labelledby="${itm.nombre}" aria-hidden="true" class="modal fade" id="${itm.nombre}">
//         <div class="modal-dialog modal-md modal-dialog-centered">
//             <div class="modal-content">
//                 <img src="${itm.img}" alt="${itm.descripcion}">
//             </div>
//         </div>
//         </div>
//         <p class="style">${itm.nombre}</p><br>
//         <p class="style">${itm.descripcion}</p><br>
//         <label><b>Precio: $ ${itm.precio}</b></label><br>
//         <button class="boton" id="${itm.id}" type="submit"><span>Agregar</span></button>
//         </fieldset>
//         `;

//         shop.append(item);

//         item.querySelector('button').addEventListener('click', ()=>{
//             addItem(itm.id);

//         })

//     })

// }

// vitrina();


// function addItem(id){

//     let item = itemsAnimales.find(item => item.id === id);

//     let itemCesta = carrito.find(item => item.id === id);

//     if(itemCesta){

//         itemCesta.cantidad++;

//         console.log(carrito);
        
//     }else {

//         item.cantidad = 1;

//         carrito.push(item);

//         console.log(carrito);
//     }

//     actualizarCarrito();

// }



// function actualizarCarrito(){

//     const dmt = document;
//     let carritoHTML = dmt.querySelector('#carrito');

//     carritoHTML.innerHTML = '';
    
//     carrito.forEach((itemCar, id) => {
//         let itemCarrito = document.createElement("div");
//         itemCarrito.classList.add('col-12');
//         itemCarrito.classList.add('col-md-6');
//         itemCarrito.classList.add('col-lg-4');
//         itemCarrito.classList.add('col-xl-4');
//         itemCarrito.innerHTML =`
//         <div class="card text-dark" style="width: 18rem;">
//             <img class="card-img-top" src="${itemCar.img}" alt="">
//             <div class="card-body">
//                 <h5 class="card-title">${itemCar.nombre}</h5>
//                 <p>Precio: $ ${itemCar.precio}</p>
//                 <p>Cantidad: ${itemCar.cantidad}</p>
//                 <button class="boton"><span>Eliminar</>span></button>
//             </div>
//         </div>
//         `;

//         carritoHTML.appendChild(itemCarrito);

//     })
// }


// //FORMULARIO//

// const d = document;

// const form = d.getElementById('formulario');
// form.addEventListener('submit', (e) => {

//     e.preventDefault();

//     checkInputs();

//     const nombre = d.getElementById('nombre').value;
//     const email = d.getElementById('email').value;
//     const telefono = d.getElementById('telefono').value;
//     const domicilio = d.getElementById('domicilio').value;
//     const colonia = d.getElementById('colonia').value;
//     const ciudadMunicipio = d.getElementById('ciudadMunicipio').value;
//     const estado = d.getElementById('estado').value;
//     const codigoPostal = d.getElementById('codigoPostal').value;
//     const referencias = d.getElementById('referencias').value;

//     const datos = JSON.parse(localStorage.getItem("cliente")) || [];
    
//     const datosCliente = {
//         nombre,
//         email,
//         telefono,
//         domicilio,
//         colonia,
//         ciudadMunicipio,
//         estado,
//         codigoPostal,
//         referencias
//     }

    
//     datos.push(datosCliente);

//     localStorage.setItem("Cliente", JSON.stringify(datos));

//     datos.forEach((envio) => {
//         envio = alert( envio.nombre + ' Tus datos han sido guardados para procesar tu envío a ' +envio.ciudadMunicipio+ ', ' +envio.estado+ ', en cuanto termines tu compra.');
//     })

//     console.log(datos);

// })

// function checkInputs() {
//     const nombreValue = nombre.value.trim();
//     const emailValor = email.value.trim();
//     const telefonoValor = telefono.value.trim();
//     const domicilioValor = domicilio.value.trim();
//     const coloniaValor = colonia.value.trim();
//     const ciudadMunicipioValor = ciudadMunicipio.value.trim();
//     const estadoValor = estado.value.trim();
//     const codigoPostalValor = codigoPostal.value.trim();
//     const referenciasValor = referencias.value.trim();

//     nombreValue === '' ? setErrorFor(nombre, 'El nombre no puede quedar vacío') : setSuccessFor(nombre);
//     emailValor ==='' ? setErrorFor(email, 'Ingresa un correo válido.') : (!isEmail(emailValor)) ? setErrorFor(email, 'No ingresaste email válido.') : setSuccessFor(email);
//     telefonoValor ==='' ? setErrorFor(telefono, 'Solo puedes ingresar números hasta 14 dígitos.') : (!isTelefono(telefonoValor)) ? setErrorFor(telefono, 'No ingresaste teléfono válido.') : setSuccessFor(telefono);
//     domicilioValor ===''? setErrorFor(domicilio, 'Este campo no puede quedar vacío.') : setSuccessFor(domicilio);
//     coloniaValor ===''? setErrorFor(colonia, 'Este campo no puede quedar vacío.') : setSuccessFor(colonia);
//     ciudadMunicipioValor ===''? setErrorFor(ciudadMunicipio, 'Este campo no puede quedar vacío.') : setSuccessFor(ciudadMunicipio);
//     estadoValor ===''? setErrorFor(estado, 'Este campo no puede quedar vacío.') : setSuccessFor(estado);
//     codigoPostalValor ==='' ? setErrorFor(codigoPostal, 'Este campo no puede quedar vacío.') : (!isCodigoPostal(codigoPostalValor)) ? setErrorFor(codigoPostal, 'Solo puedes ingresar números hasta 5 dígitos.') : setSuccessFor(codigoPostal);
//     referenciasValor ===''? setErrorFor(referencias, 'Ingresa la mayor cantidad de referencias para poder hacer el envío.') : setSuccessFor(referencias);
// }

// function setErrorFor(input, message) {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = 'form-control error';
//     small.innerText = message;
// }

// function setSuccessFor(input){
//     const formControl = input.parentElement;
//     formControl.className = 'form-control success';
// }

// function isEmail(email) {
// 	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
// }

// function isTelefono(telefono) {
// 	return /^\d{7,14}$/.test(telefono);
// }

// function isCodigoPostal(codigoPostal) {
// 	return /^\d{5}$/.test(codigoPostal);
// }

const doc = document
let list = doc.getElementsByName('li');
for (let i=0; i<list.length; i++){
    list[i].onmouseover = function(){
        let j = 0;
        while (j < list.length){
            list[j++].className = 'list';
        }
        list[i].className = 'list activeNav';
    }
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