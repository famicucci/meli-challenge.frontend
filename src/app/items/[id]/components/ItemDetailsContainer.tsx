import { ItemDetailsContainerProps } from "../models";
import { getItemDetails } from "../services";
import ItemDetails from "./ItemDetails";

export default async function ItemDetailsContainer(
  props: ItemDetailsContainerProps
) {
  const { id } = props;
  const data = await getItemDetails(id);

  return <ItemDetails item={data.item} />;
}
