import { ListItemsProps } from "../models";
import { Item as ItemProps } from "../models/Item";
import { getItems } from "../services";
import Item from "./Item";

export default async function ListItems(props: ListItemsProps) {
  const { textSearch } = props;
  const data = await getItems(textSearch);

  return (
    <div>
      {data.items.map((item: ItemProps) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
}
