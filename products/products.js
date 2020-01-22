import gear from '../data/inventory-data.js';
import renderProducts from './render-products.js';

const list = document.getElementById('gear');

for (let i = 0; i < gear.length; i++) {
    const gearArray = gear[i];
    const dom = renderProducts(gearArray);
    list.appendChild(dom);
}