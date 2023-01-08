const contenedor = document.querySelector(".flex-container");


const crearLlave = (name, model, price) => {
    img = `<img class="llave-img", src="davy_jones_key.jpg">`;
    name = `<h2>${name}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>Precio: <b>$${price}</b></p>`;
    return [img, name, model, price]
}

const crearElementoLlave = (name, model, price) => {
    let key = crearLlave(name, model, price);
    let div = document.createElement("DIV");
    div.classList.add(`item-1`,'flex-item');
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    contenedor.appendChild(div);
}

crearElementoLlave("llave", "xxxx", "32")
crearElementoLlave("llave", "xxxx", "32")
crearElementoLlave("llave", "xxxx", "32")