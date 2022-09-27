let carrito = [];

function vitrina() {
    
    const contenido = document.getElementById('shop');

    itemsAnimales.forEach((itm) => {
        let item = document.createElement("div");
        item.classList.add('col-12');
        item.classList.add('col-md-6');
        item.classList.add('col-lg-4');
        item.classList.add('col-xl-4');
        item.innerHTML = `
        <fieldset class="formStyle">
        <a href="#" data-bs-toggle="modal" data-bs-target="#${itm.nombre}">
        <img class="w-50 mb-4 rounded modalimg" src = ${itm.img} alt="${itm.descripcion}">
        </a><br>
        <div tabindex="-1" aria-labelledby="${itm.nombre}" aria-hidden="true" class="modal fade" id="${itm.nombre}">
        <div class="modal-dialog modal-md modal-dialog-centered">
            <div class="modal-content">
                <img src="${itm.img}" alt="${itm.descripcion}">
            </div>
        </div>
        </div>
        <p class="style">${itm.nombre}</p><br>
        <p class="style">${itm.descripcion}</p><br>
        <label><b>Precio: $ ${itm.precio}</b></label><br>
        <button class="boton" id="${itm.id}" type="submit"><span>Agregar</span></button>
        </fieldset>
        `;

        shop.append(item);

        item.querySelector('button').addEventListener('click', ()=>{
            addItem(itm.id);
        })

    })

}

vitrina();


function addItem(id){

    let item = itemsAnimales.find(item => item.id === id);

    console.log(item);

}