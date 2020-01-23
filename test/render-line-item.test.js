import gear from '../data/render-products.js';
import { findById } from '../common/utils.js';
import renderLineItem from '../shopping-cart/render-line-item.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', expect => {
    // arrange
    const lineItem = {
        id: 'midi',
        quantity: 1
    };
    const products = findById(gear, lineItem.id);
    const expected = '<tr></tr><td class="align-left"><td>Cool Midi Thing</td><td>2</td><td>$150</td><td class="line-item-total">$300</td></tr>';

    // act
    const dom = renderLineItem(lineItem, products);
    const html = dom.outerHTML;
    
    // expect
    expect.equal(html, expected);
});