import gear from '../data/inventory-data.js';
import renderProducts from './render-products.js';

const list = document.getElementById('fruits');

for (let i = 0; i < gear.length; i++) {
    const gear = gear[i];
    const dom = renderProducts(gear);
    list.appendChild(dom);
}