import Item from '../ts/classes/item';
import Cart from '../ts/classes/cart';
import Common from '../ts/classes/common';

let cart: Cart;
let movie: Item;
let phones: Common;

beforeEach(() => {
    cart = new Cart();
    movie = new Item(1, 10000, 'Pooka');
    phones = new Common(2, 20000, 'Iphones', 30);

    cart.add(movie);
    cart.add(phones);
});

test('amountDecrease', () => {
    cart.amountDecrease(2, 2);

    const impacted: Common = <Common>cart.getAll()[1];
    const result = impacted.getAmount();
    const expected = 28;

    expect(result).toBe(expected);
});

test('priceMultiply', () => {
    const result = phones.getProdPrice();
    const expected = 600000;

    expect(result).toBe(expected);
});
