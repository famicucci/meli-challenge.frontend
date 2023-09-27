import { getItemsAdapter } from "../adapters";
import { ListItemsProps } from "../models";
import { Item as ItemProps } from "../models/Item";
import { getItems } from "../services";
import BreadCrumbContainer from "./BreadCrumbContainer";
import Item from "./Item";

export default async function ListItems(props: ListItemsProps) {
  const { textSearch } = props;
  const data = await getItems(textSearch);
  const items = getItemsAdapter(data.items);
  const numberOfItems = 4;

  return (
    <BreadCrumbContainer categories={data.categories}>
      {items.slice(0, numberOfItems).map((item: ItemProps) => (
        <Item key={item.id} item={item} />
      ))}
    </BreadCrumbContainer>
  );
}
