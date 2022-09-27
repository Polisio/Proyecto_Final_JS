class Pedido {
    constructor(producto, precio, cantidad){
        this.producto = producto,
        this.precio = precio,
        this.cantidad = cantidad,
        this.envio = 0,
        this.subTotal = 0,
        this.total = 0
    }
    calcularSubTotal() {
        this.subTotal = this.precio * this.cantidad;
    }
    calcularIva() {
        return this.subTotal * 0.16;
    }
    calcularEnvio() {
        if(this.subTotal >= 5000) {
            this.envio = 0;
        } else {
            this.envio = 650;
        }
    }
    calcularTotal() {
        this.total = this.subTotal + this.envio + this.calcularIva();
    }
}

function comprarProducto() {
    let producto = 0;
    let cantidadProducto = 0;
    let precio = 0;

    while(!producto || producto == 0 || producto > 5) {
        producto = parseInt(prompt("¿Qué artículo tejido desea comprar?:\n 1: Animal ($350.00)\n 2: Gorro ($130.00)\n 3: Bufanda ($200.00)\n 4: Llavero ($60.00)\n 5: Joya ($260.00"));
    }

    switch(producto){
        case 1:
            producto = "Animal";
            precio = 350;
            break;
        case 2:
            producto = "Gorro";
            precio = 130;
            break;
        case 3:
            producto = "Bufanda";
            precio = 200;
            break;
        case 4:
            producto = "Llavero";
            precio = 60;
            break;
        case 5:
            producto = "Joya";
            precio = 260;
            break;
    }

    while(!cantidadProducto || cantidadProducto == 0){
        cantidadProducto = parseInt(prompt("Artículo elegido: "+ producto + "\nIntroduzca con números la cantidad deseada."));
    }

    const compra = new Pedido(producto, precio, cantidadProducto);

    return compra;
}








alert('Bienvenido a nuestra tienda, estamos en desarrollo, así que por favor, sigue las instrucciones al pie de la letra, Gracias!!')

let nameCostumer = prompt('Por favor ingresa tu nombre.')
alert('Gracias '+nameCostumer+', ahora vamos a elegir los artículos de tu compra.')

alert('Te mostraré la lista de artículos disponibles, debes seleccionar el producto que quieras e ingresar el número que le corresponde.')

const pedido = comprarProducto();
console.log(pedido)

pedido.calcularSubTotal();
pedido.calcularEnvio();
pedido.calcularTotal();

alert("Detalle de tu compra:\n\n"+
    "- " + pedido.producto + " x " + pedido.cantidad + ": $" + pedido.precio * pedido.cantidad +"\n" +
    "- IVA 16%: $" + pedido.calcularIva() + "\n" +
    "- Costo de envío: $" + pedido.envio + "\n\n" +
    "Total = $" + pedido.total
);


///////// Array /////////

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

    const items = []

    items.push(new Item (articulo, costo, inventario));

    return items;
}


alert('Ahora necesito que me ayudes a dar de alta un nuevo articulo, de igual manera, te pido que sigas las instrucciones al pie de la letra.')

alert( nameCostumer+', ahora te mostraré la lista de artículos nuevos que daremos de alta')

const alta = agregarArticulo();
console.log(alta);

alert("Muchas gracias por tu ayuda " + nameCostumer + ", poco a poco iremos agregando más funciones para que la página siga creciendo.");
alert("Hasta el próximo desafío ... ")

