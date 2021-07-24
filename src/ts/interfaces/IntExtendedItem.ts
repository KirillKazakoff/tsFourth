interface IntItem {
    readonly id: number,
    readonly price: number,
    readonly name: string,
    amount?: number,
}

interface IntFunctions {
    readonly id: number,
    readonly price: number,
    readonly name: string,
    amount?: number,
    
    getProdPrice(): number,
    getProdId(): number,
    amountDecrease(amount: number): void;
}

type IntExtendedItem = IntFunctions | IntItem;

export default IntExtendedItem;


// export default interface IntExtendedItem {
//     readonly id: number,
//     readonly price: number,
//     readonly name: string,
//     amount?: number,

//     getProdPrice(): number,
//     getProdId(): number,
//     amountDecrease(amount: number): void;
// }
