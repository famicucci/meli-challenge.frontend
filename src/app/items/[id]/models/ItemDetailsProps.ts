export interface ItemDetailsProps {
    id: string;
    picture: string;
    description: string;
    sold_quantity: number;
    title: string;
    condition: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
}