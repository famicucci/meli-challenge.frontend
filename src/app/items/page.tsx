// import { useSearchParams } from "next/navigation";
import ListItems from "./components/ListItems";
import { ItemsProps } from "./models";

export default function Items(props: ItemsProps) {
  const { searchParams } = props;

  return <ListItems textSearch={searchParams.search} />;
}
