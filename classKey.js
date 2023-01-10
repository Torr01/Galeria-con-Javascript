const contenedor = document.querySelector(".flex-container");

// const text_title = document.getElementById("title");
// const text_model = document.getElementById("model");
// const text_price = document.getElementById("price");

// const enter_button = document.getElementById("create");

// let text1 = text_title.value;
// let text2 = text_model.value;
// let text3 = text_price.value;


let items = [];

const addItem = (ev) => {
    ev.preventDefault();
    let itemJSON = {
        title: document.getElementById('title').value,
        model: document.getElementById('model').value,
        price: document.getElementById('price').value
    }

    items.push(itemJSON);
    console.log(items);
    document.querySelector('.input-form').reset();

    crearElementoLlave(items[0]['title'],items[0]['model'],items[0]['price']);
    console.log(items[0]['title'],items[0]['model'],items[0]['price']);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create').addEventListener('click', addItem);

});


const crearLlave = (title, model, price) => {
    img = `<img class="llave-img", src="davy_jones_key.jpg">`;
    title = `<h2>${title}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>Precio: <b>$${price}</b></p>`;
    return [img, title, model, price]
}

const crearElementoLlave = (title, model, price) => {
    let key = crearLlave(title, model, price);
    let div = document.createElement('DIV');
    div.tabIndex = 1;
    div.classList.add(`item-1`,'flex-item');
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    contenedor.appendChild(div);
}