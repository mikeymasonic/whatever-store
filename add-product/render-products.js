import { findById } from '../common/utils.js';
import { toUSD } from '../common/utils.js';

const makeCart = () => {
    const somePossibleCart = localStorage.getItem('CART');

    if (somePossibleCart) {
        return JSON.parse(somePossibleCart);
    } else {
        return [];
    }
};

function renderProducts(gear) {
    const li = document.createElement('li');
    li.className = gear.category;
    li.title = gear.description;

    const h3 = document.createElement('h3');
    h3.textContent = gear.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = gear.image;
    img.alt = gear.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(gear.price);
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = gear.id;
    button.addEventListener('click', () => {
        console.log('==================');
        // go and get the cart
        const cart = makeCart(); // []

        console.log('before', cart);
        // check if the cart has the item already
        let gearThatIsAlreadyInCart = findById(cart, gear.id); // {}

        // if it doesnt, put one in with quantity one
        if (!gearThatIsAlreadyInCart) {
            const initialItem = {
                id: gear.id,
                quantity: 1
            };

            cart.push(initialItem);
        } else {
            // ontherwise, increase the quantity
            gearThatIsAlreadyInCart.quantity++;
        }
        console.log('after', cart);

        const newCartState = JSON.stringify(cart);
        localStorage.setItem('CART', newCartState);


    });
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderProducts;