import renderProducts from './render-products.js';

import { getProducts } from '../common/utils.js';

const gear = getProducts();
const list = document.getElementById('fruits');

const button = document.querySelector('button');

button.addEventListener('click', (_eventObject) => {
    _eventObject.preventDefault();
    const form = document.querySelector('form');
    
    // create the weird form data object with the .get(key) method
    const data = new FormData(form);

    const numberizedPrice = Number(data.get('price'));
    // make a new product object using that form data
    const newGear = {
        name: data.get('name'),
        id: data.get('id'),
        price: '$' + numberizedPrice.toFixed(2),
        image: data.get('image')
    };

    // log out the new fruit object
    console.log(newGear);
    gear.push(newGear);

    const stringyGear = JSON.stringify(gear);
    localStorage.setItem('___gear', stringyGear);
    // build the new list item element
    const element = renderProducts(newGear);
    // remove the button
    element.querySelector('button').remove();
    // add the element to the list
    list.appendChild(element);
    
});

for (let i = 0; i < gear.length; i++) {
    const gearArray = gear[i];
    const element = renderProducts(gearArray);
    element.querySelector('button').remove();

    list.appendChild(element);
}