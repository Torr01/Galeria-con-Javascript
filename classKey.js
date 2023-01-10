const contenedor = document.querySelector(".flex-container");

let items = [];
let idContador = 0;

const addItem = (ev) => {
    ev.preventDefault();
    let item = {
        url: document.getElementById('url').value,
        title: document.getElementById('title').value,
        model: document.getElementById('model').value,
        price: document.getElementById('price').value
    }

    items.push(item);
    console.log(items);
    document.querySelector('.input-form').reset();

    crearElementoLlave(items[idContador]['url'],items[idContador]['title'],items[idContador]['model'],items[idContador]['price']);
    idContador++;
    
    console.log(items[idContador]['url'],items[idContador]['title'],items[idContador]['model'],items[idContador]['price']);
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('create').addEventListener('click', addItem);

});


const crearLlave = (url, title, model, price) => {
    img = `<img class="llave-img", src="${url}">`;
    title = `<h2>${title}</h2>`;
    model = `<h3>${model}</h3>`;
    price = `<p>Precio: <b>$${price}</b></p>`;
    return [img, title, model, price];
}

const crearElementoLlave = (url, title, model, price) => {
    let key = crearLlave(url, title, model, price);
    let div = document.createElement('DIV');
    div.tabIndex = 1;
    div.classList.add(`item-1`,'flex-item');
    div.innerHTML = key[0] + key[1] + key[2] + key[3];
    contenedor.appendChild(div);
}