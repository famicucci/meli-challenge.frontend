import { ItemDetailsContainer } from "./components";
import { ItemDetailPageProps } from "./models/ItemDetailPageProps";

export default function Items(props: ItemDetailPageProps) {
  const { params } = props;

  return <ItemDetailsContainer id={params.id} />;
}
