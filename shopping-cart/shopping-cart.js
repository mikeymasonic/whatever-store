import cart from '../data/cart.js';
import gear from '../data/inventory-data.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './render-line-item.js';

const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const products = findById(gear, lineItem.id);
    const dom = renderLineItem(lineItem, products);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, gear);
orderTotalCell.textContent = toUSD(orderTotal);


// import cart from '../data/cart.js';
// import fruits from '../data/fruits.js';
// import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
// import renderLineItem from './render-line-item.js';

// const tbody = document.querySelector('tbody');
// const orderTotalCell = document.getElementById('order-total-cell');

// for (let i = 0; i < cart.length; i++) {
//     const lineItem = cart[i];
//     const fruit = findById(fruits, lineItem.id);
//     const dom = renderLineItem(lineItem, fruit);

//     tbody.appendChild(dom);
// }

// const orderTotal = calcOrderTotal(cart, fruits);
// orderTotalCell.textContent = toUSD(orderTotal);