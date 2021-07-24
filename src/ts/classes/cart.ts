import Common from './common';
import Item from './item';

export default class Cart {
    private items: Item[] = [];

    add(item: Item): void {
        this.items.push(item);
    }

    getAll(): Item[] {
        return [...this.items];
    }

    getCost(): number {
        return this.items.reduce((total, element) => (
            total + element.getProdPrice()), 0);
    }

    getDiscountCost(discount: number): number {
        const cost = this.getCost();

        return cost * (1 - discount);
    }

    productDelete(id: number): string|boolean {
        const productIndex = this.items.findIndex((element) => element.getProdId() === id);

        if (productIndex > -1) {
            this.items.splice(productIndex, 1);
            return true;
        }
        return 'there is no element with this id';
    }

    amountDecrease(id: number, amount: number): void|string {
        const product = this.items.find((element) => element.getProdId() === id);
        const commonProduct: Common = <Common>product; // Как здесь избежать переприсвоения типа?

        if ('amount' in commonProduct) {
            commonProduct.amountDecrease(amount);
        }
    }
}
