export interface ItemDetailsProps {
    id: string;
    picture: string;
    description: string;
    soldQuantity: number;
    title: string;
    condition: string;
    price: {
        currency: string;
        amount: number;
        decimals: number;
    };
}