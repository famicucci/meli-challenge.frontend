import { getItems } from "../services";

interface ListItemsProps {
  textSearch: string | null;
}

export default async function ListItems(props: ListItemsProps) {
  const { textSearch } = props;
  const data = await getItems(textSearch);

  return <div>{JSON.stringify(data.items)}</div>;
}
