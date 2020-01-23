import gear from '../data/inventory-data.js';
import cart from '../data/cart.js';
import { findById, calcLineTotal, calcOrderTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    // arrange
    const id = 'midi';
    const expected = 'Cool Midi Thing';

    // act
    const foundProducts = findById(gear, id);

    // assert
    assert.ok(foundProducts);
    assert.equal(foundProducts.name, expected);
});

test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundProducts = findById(gear, id);

    // assert
    assert.equal(foundProducts, expected);
});

test('calculate line total', (assert) => {
    // arrange
    const quantity = 3;
    const price = 150;
    const expected = 450;

    // act 
    const total = calcLineTotal(quantity, price);

    // assert
    assert.equal(total, expected);
});

// This one can be left to students to do...
test('calculate order total', (assert) => {
    // arrange
    const expected = 5915;

    // act
    const orderTotal = calcOrderTotal(cart, gear);

    // assert
    assert.equal(orderTotal, expected);
});