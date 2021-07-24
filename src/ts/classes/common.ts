import Item from './item';

export default class Common extends Item {
    constructor(id: number, price: number, name: string, private amount: number) {
        super(id, price, name);
        this.price *= this.amount;
    }

    amountDecrease(amount: number): void|string {
        this.amount -= amount;
    }

    getAmount(): number {
        return this.amount;
    }
}
