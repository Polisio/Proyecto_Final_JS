const listaProductos = document.querySelector("#lista-productos");
const footerCarrito = document.querySelector("#footer-carrito");
const itemsCarrito = document.querySelector("#items");
let carrito = [];

document.addEventListener("DOMContentLoaded", (e) => {
    obtenerProductos();

    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        insertarEnCarrito()
    };
});



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
        template.querySelector("h5").textContent = producto.nombre;
        template.querySelector(".card-text span").textContent = producto.precio;

        template.querySelector("button").setAttribute("data-id", producto.id);
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    });
    listaProductos.appendChild(fragment);
};

const eventoBotones = (data) => {
    const btnAgregar = document.querySelectorAll("#btnComp");
    btnAgregar.forEach((btn) => {
        btn.addEventListener("click", () => {

            const [producto] = data.filter(
                (item) => item.id === parseInt(btn.dataset.id)
            );

        const productoCarrito = {
            id: producto.id,
            nombre: producto.nombre,
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
        
            insertarEnCarrito();
        });
    });
};

const totalFooter = () => {
    if (carrito.length === 0) {
        footerCarrito.innerHTML = `<th scope="row" colspan="5">Su carrito est?? vac??o!</th>`
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
        insertarEnCarrito()
    })
}

const insertarEnCarrito = () => {


    itemsCarrito.innerHTML = ''

    const template = document.querySelector("#template-carrito").content;
    const fragment = document.createDocumentFragment();


    carrito.forEach(item => {
        template.querySelector("th").textContent = item.id;
        template.querySelectorAll("td")[0].textContent = item.nombre;
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

    localStorage.setItem('carrito', JSON.stringify(carrito));
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
            insertarEnCarrito()
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
            insertarEnCarrito()
            totalFooter()
        })
    })
}

//Formulario

//Formulario Disfraz

const formularioDis = document.getElementById('formularioDisfraz')

const nombre = document.getElementById('nombre');
const telefono = document.getElementById('telefono');
const correo = document.getElementById('correo');

const regNombre = /^[A-Za-z????????????????????????????\s]+$/;
const regCorreo = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;
const regTelefono = /^\d{7,14}$/;

formularioDis.addEventListener('submit', e => {
    e.preventDefault();

if (!regNombre.test(nombre.value) || !nombre.value.trim()) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formato inv??lido',
        footer: 'Solo puedes ingresar letras'
    })
    return;
}

if (!regTelefono.test(telefono.value) || !telefono.value.trim()) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formato inv??lido',
        footer: 'Ingresa un n??mero v??lido'
    })
    return;
} 

if (!regCorreo.test(correo.value) || !correo.value.trim()) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Formato inv??lido',
        footer: 'Ingresa un correo v??lido'
    })
    return;

} else {
        Swal.fire({
            icon: 'success',
            title: 'Muchas gracias ' + nombre.value,
            text: 'En breve nos pondremos en contacto',
            footer: 'Te haremos llegar todas las instrucciones para finalizar tu compra'
        })

    }

    const nombreCliente = document.getElementById('nombre').value;
    const telefonoCliente = document.getElementById('telefono').value;
    const correoCliente = document.getElementById('correo').value;

    const inputData = JSON.parse(localStorage.getItem("cliente")) || [];

    const datosCliente = {
        nombreCliente,
        telefonoCliente,
        correoCliente
    }

    inputData.push(datosCliente);

    localStorage.setItem("Cliente", JSON.stringify(inputData));

})






















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

    // const datos = JSON.parse(localStorage.getItem("cliente")) || [];
    
    // const datosCliente = {
    //     nombre,
    //     email,
    //     telefono,
    //     domicilio,
    //     colonia,
    //     ciudadMunicipio,
    //     estado,
    //     codigoPostal,
    //     referencias
    // }

    
    // datos.push(datosCliente);

    // localStorage.setItem("Cliente", JSON.stringify(datos));

//     datos.forEach((envio) => {
//         envio = alert( envio.nombre + ' Tus datos han sido guardados para procesar tu env??o a ' +envio.ciudadMunicipio+ ', ' +envio.estado+ ', en cuanto termines tu compra.');
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

//     nombreValue === '' ? setErrorFor(nombre, 'El nombre no puede quedar vac??o') : setSuccessFor(nombre);
//     emailValor ==='' ? setErrorFor(email, 'Ingresa un correo v??lido.') : (!isEmail(emailValor)) ? setErrorFor(email, 'No ingresaste email v??lido.') : setSuccessFor(email);
//     telefonoValor ==='' ? setErrorFor(telefono, 'Solo puedes ingresar n??meros hasta 14 d??gitos.') : (!isTelefono(telefonoValor)) ? setErrorFor(telefono, 'No ingresaste tel??fono v??lido.') : setSuccessFor(telefono);
//     domicilioValor ===''? setErrorFor(domicilio, 'Este campo no puede quedar vac??o.') : setSuccessFor(domicilio);
//     coloniaValor ===''? setErrorFor(colonia, 'Este campo no puede quedar vac??o.') : setSuccessFor(colonia);
//     ciudadMunicipioValor ===''? setErrorFor(ciudadMunicipio, 'Este campo no puede quedar vac??o.') : setSuccessFor(ciudadMunicipio);
//     estadoValor ===''? setErrorFor(estado, 'Este campo no puede quedar vac??o.') : setSuccessFor(estado);
//     codigoPostalValor ==='' ? setErrorFor(codigoPostal, 'Este campo no puede quedar vac??o.') : (!isCodigoPostal(codigoPostalValor)) ? setErrorFor(codigoPostal, 'Solo puedes ingresar n??meros hasta 5 d??gitos.') : setSuccessFor(codigoPostal);
//     referenciasValor ===''? setErrorFor(referencias, 'Ingresa la mayor cantidad de referencias para poder hacer el env??o.') : setSuccessFor(referencias);
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