import { findById } from '../common/utils.js';
import { toUSD } from '../common/utils.js';

function renderProducts(gear) {
    const li = document.createElement('li');
    li.className = gear.category;
    li.title = gear.description;

    const h3 = document.createElement('h3');
    h3.textContent = gear.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../assets/' + gear.image;
    img.alt = gear.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(gear.price);

    // const div = document.createElement('div');
    // div.className = 'quantity';


    // const usd = '$' + gear.price.toFixed(2);
    // p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = gear.id;

    // const quantity = 

    button.addEventListener('click', () => {

        let json = localStorage.getItem('CART');
        let cart;
        if (json) {
            cart = JSON.parse(json);
        } else {
            cart = [];
        }

        let lineItem = findById(cart, gear.id);

        if (!lineItem) {
            lineItem = {
                id: gear.id,
                quantity: 1
            };

            cart.push(lineItem);
        } else {
            lineItem.quantity++;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert('1 ' + gear.name + ' added to cart');
    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderProducts;