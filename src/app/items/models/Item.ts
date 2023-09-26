export interface Item {
    id: string;
    title: string;
    picture: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
    condition: string;
}