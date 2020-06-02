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

    //drop down menu for quantity
    const sel = document.createElement('select');
    sel.className = 'quantity';
    sel.name = 'drop1';
    sel.id = 'Select1';

    const quantityData = [
        1,
        2,
        3,
        4,
        5
    ];

    let options_str = '';

    quantityData.forEach(function(quantityData) {
        options_str += '<option value="' + quantityData + '">' + quantityData + '</option>';
    });

    sel.innerHTML = options_str;

    li.appendChild(sel);

    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = gear.id;

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
                quantity: sel.value
            };

            cart.push(lineItem);
        } else {
            lineItem.quantity = sel.value;
        }

        json = JSON.stringify(cart);
        localStorage.setItem('CART', json);

        alert(sel.value + ' ' + gear.name + ' added to cart');
    });
    p.appendChild(button);

    li.appendChild(p);
    

    return li;
}

export default renderProducts;