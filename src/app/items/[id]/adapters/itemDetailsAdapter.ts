import { ItemDetailsProps } from "../models/ItemDetailsProps"

const itemDetailsAdapter = (item: any): ItemDetailsProps => ({
    id: item.id,
    picture: item.picture,
    condition: item.condition,
    soldQuantity: item.soldQuantity,
    title: item.title,
    price: { currency: item.price.currency, amount: item.price.amount, decimals: 0 },
    description: item.description,
})

export default itemDetailsAdapter