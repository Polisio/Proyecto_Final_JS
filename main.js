const articulos = [
    {
        nameItem: "ANIMAL",
        precio: 350,
        stock: 36,
    },
    {
        nameItem: "GORRO",
        precio: 130,
        stock: 65,
    },
    {
        nameItem: "BUFANDA",
        precio: 200,
        stock: 94,
    },
    {
        nameItem: "LLAVERO",
        precio: 60,
        stock: 25,
    },
    {
        nameItem: "JOYA",
        precio: 260,
        stock: 53,
    },
];


alert('Bienvenido a nuestra tienda, estamos en desarrollo, así que por favor, sigue las instrucciones al pie de la letra, Gracias!!');

let nameCostumer = prompt('Por favor ingresa tu nombre.');
alert('Gracias ' + nameCostumer.toUpperCase() + ', ahora vamos a elegir los artículos de tu compra.');

let carritoCompras = [];

let ready = prompt('¿Estás listo para iniciar? Escribe: Si o No').toUpperCase();

if (ready == "SI") { 
    alert('Te mostraré la lista de artículos disponibles.');
    let listItem = articulos.map((articulo) => articulo.nameItem + " - " + "$"  + articulo.precio);
    alert(listItem.join("\n"));
} else if (ready = "NO") {
    alert('Entiendo ... vuelve cuando estés listo ... ¡Gracias por venir!');
}

while (ready != "NO") {
    let articulo = prompt("Agrega el nombre del artículo que deseas:\n ANIMAL\n GORRO\njoya BUFANDA\n LLAVERO\n JOYA").toUpperCase();
    let precio = 0;

    if (
        articulo == "ANIMAL" ||
        articulo == "GORRO" ||
        articulo == "BUFANDA" ||
        articulo == "LLAVERO" ||
        articulo == "JOYA"
    ) {
        switch (articulo) {
            case "ANIMAL":
                precio = 350;
                break;
            case "GORRO":
                precio = 130;
                break;
            case "BUFANDA":
                precio = 200;
                break;
            case "LLAVERO":
                precio = 60;
                break;
            case "JOYA":
                precio = 260;
                break;
            default:
                break;
        }
        let cantidad = parseInt(prompt('¿Cuántos artículos quieres agregar?'));
        carritoCompras.push({articulo, cantidad, precio});
    }   else {
        alert("El producto que ingresaste no existe");
    }

    ready = prompt('¿Deseas agregar otro artículo? SI / NO').toUpperCase(); 

    while (ready == "NO") {
        alert('Gracias por su compra');

        carritoCompras.forEach((carritoTotal) => {
            alert(`Artículo: ${carritoTotal.articulo}, cantidad: ${carritoTotal.cantidad}, Total por artículo: ${(carritoTotal.cantidad * carritoTotal.precio)}`);
        });
        break;
    }
}

const total = carritoCompras.reduce((acc, con) => acc + con.precio * con.cantidad, 0);
console.log(`el total a pagar por su compra es de: ${total}`);

class Cliente {
    constructor(nombreFiscal, rfc, domicilioFiscal) {
        this.nombreFiscal = nombreFiscal,
        this.rfc = rfc,
        this.domicilioFiscal = domicilioFiscal
    }
}

function agregarCliente() {
    let nombreFiscal = prompt('Ingresa el nombre o razón social:').toUpperCase();
    let rfc = prompt('Ingresa el RFC del cliente, en caso de no tener ingresa "Sin RFC"').toUpperCase();
    let domicilioFiscal = prompt('Ingresa el domicilio').toUpperCase();

    const clientes = [];

    clientes.push(new Cliente (nombreFiscal, rfc, domicilioFiscal))
    alert(`Nombre o razón social: ${nombreFiscal} RFC: ${rfc} Dirección ${domicilioFiscal}`);
    console.log(clientes);

    alert('Ups!! Falta agregar el número de teléfono');

    let numTel = prompt(`Ingresa el número para guardarlo: `).toUpperCase();

        clientes.push(numTel);
        console.log(clientes);

    let ready = prompt('¿Deseas agregar otro dato? Si / No').toUpperCase();

    while (ready != "SI" && ready != "NO") {
        alert('Solo se admiten las opciones SI o NO')
        ready = prompt('¿Deseas agregar otro dato? Si / No').toUpperCase();
    }

    
    while (ready != "NO") {
        let nuevoDato = prompt('Ingresa el dato que quieres agregar:\n CORREO\n SUCURSAL\n OTRO:').toUpperCase();

        if (
            nuevoDato == "CORREO" ||
            nuevoDato == "SUCURSAL" ||
            nuevoDato == "OTRO"
        ) {
            switch (nuevoDato) {
                case "CORREO":
                    nuevoDato = prompt(`Ingresa el correo para agregarlo a los datos del cliente`);
                    break;
                case "SUCURSAL":
                    nuevoDato = prompt(`Ingresa domicilio de sucursal para agregarlo a los datos del cliente`);
                    break;
                case "OTRO":
                    nuevoDato = prompt(`Ingresa el dato para agregarlo a los datos del cliente`);
                    break;
            }
            clientes.push(nuevoDato);
            alert('Dato agregado correctamente');
        } else {
            alert('Por favor ingresa OTRO para agregar mas datos')
        }

        ready = prompt('¿Deseas agregar otro dato? Si / No').toUpperCase();

        while (ready == "NO") {
            alert('Cliente agregado correctamente');
            console.log(clientes);
                break;
        }
    }
}


alert('Bien!! vamos a dar de alta un cliente');

const altaCliente = agregarCliente();
console.log(altaCliente);

ready1 = prompt('¿Deseas agregar otro cliente? Si / No').toUpperCase();

while (ready1 != "SI" && ready1 != "NO") {
    alert('Solo se admiten las opciones SI o NO')
    ready1 = prompt('¿Deseas agregar otro dato? Si / No').toUpperCase();
}

if (ready1 != "NO") {
    const altaCliente = agregarCliente();
    console.log(altaCliente);
} else if (ready1 == "NO") {
    alert('Continuemos')
}


class Item {
    constructor(articulo, costo, inventario) {
        this.articulo = articulo,
        this.costo = parseFloat(costo),
        this.inventario = parseFloat(inventario)
    }
}

function agregarArticulo() {
    let articulo = 0;
    let inventario = 0;
    let costo = 0;

    while(!articulo || articulo == 0 || articulo > 5) {
        articulo = parseInt(prompt("¿Qué artículo tejido deseas agregar?:\n 1: Abrigo ($350.00) 20 Piezas \n 2: Juguete ($130.00) 36 Piezas \n 3: Manta ($200.00) 29 Piezas \n 4: Lapicera ($60.00) 18 Piezas\n 5: Artesanía ($260.00) 9 Piezas"));
    }

    switch(articulo){
        case 1:
            articulo = "Abrigo";
            costo = 350;
            inventario = 20;
            break;
        case 2:
            articulo = "Juguete";
            costo = 130;
            inventario = 36;
            break;
        case 3:
            articulo = "Manta";
            costo = 200;
            inventario = 29;
            break;
        case 4:
            articulo = "Lapicera";
            costo = 60;
            inventario = 18;
            break;
        case 5:
            articulo = "Artesanía";
            costo = 260;
            inventario = 9;
            break;
        
    }

    const articulos = []

    articulos.push(new Item (articulo, costo, inventario));

    return articulos;
}


alert('Ahora necesito que me ayudes a dar de alta un nuevo articulo, de igual manera, te pido que sigas las instrucciones al pie de la letra.')

alert( nameCostumer.toUpperCase()+', ahora te mostraré la lista de artículos nuevos que daremos de alta')

const alta = agregarArticulo();
console.log(alta);

alert("Muchas gracias por tu ayuda " + nameCostumer.toUpperCase() + ", vamos mejorando pero aún nos falta.");
alert("Hasta el próximo desafío ... ")

