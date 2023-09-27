import { Item } from "../models";

const getItemsAdapter = (items: []): Item[] => {
    return items.map((item: any) => ({
        id: item.id,
        title: item.title,
        picture: item.picture,
        price: {
            currency: item.price.currency,
            amount: item.price.amount,
            decimals: item.price.decimals,
        },
        condition: item.condition,
    }))
}

export default getItemsAdapter;