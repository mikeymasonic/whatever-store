import gear from '../data/inventory-data.js';
import renderGear from './render-products.js';

const list = document.getElementById('fruits');

for (let i = 0; i < gear.length; i++) {
    const gear = gear[i];
    const dom = renderGear(gear);
    list.appendChild(dom);
}