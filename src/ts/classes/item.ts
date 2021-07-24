export default class Item {
    constructor(
       protected id: number,
       protected price: number,
       protected name: string,
    ) {}

    getProdPrice(): number {
        return this.price;
    }

    getProdId(): number {
        return this.id;
    }
}
