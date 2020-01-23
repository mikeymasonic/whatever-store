import gear from '../data/inventory-data.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    const id = 'midi';
    const expected = 'Cool Midi Thing';
    const foundProducts = findById(gear, id);
    assert.ok(foundProducts);
    assert.equal(foundProducts.name, expected);
});

test('find product by id returns null if not found', assert => {
    const id = 'not found';
    const expected = null;
    const foundProducts = findById(gear, id);
    assert.equal(foundProducts, expected);
});

test('calculate line total', (assert) => {
    const quantity = 3;
    const price = 150;
    const expected = 450;
    const total = calcLineTotal(quantity, price);
    assert.equal(total, expected);
});

test('calculate order total', (assert) => {
    const expected = 5915;
    const orderTotal = calcOrderTotal(cart, gear);
    assert.equal(orderTotal, expected);
});