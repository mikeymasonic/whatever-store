import renderProducts from '../products/render-products.js';

const test = QUnit.test;

QUnit.module('Render Products');

test('renders some gear', assert => {
    // arrange
    const midiController = {
        id: 'midi',
        name: 'Cool Midi Thing',
        image: 'midicontroller.png',
        description: 'A sicky lil MIDI controller for all your sick gear',
        category: 'controllers',
        price: 150,
        cost: 35
    };
    
    const expected = '<li class="controllers" title="A sicky lil MIDI controller for all your sick gear"><h3>Cool Midi Thing</h3><img src="../assets/midicontroller.png" alt="Cool Midi Thing image"><p class="price">$150.00<button value="undefined">Add</button></p></li>';
    
    // act
    const dom = renderProducts(midiController);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});

