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



