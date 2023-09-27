import Image from "next/image";
import styles from "../styles/itemDetails.module.css";
import { ItemDetailsProps } from "../models/ItemDetailsProps";

export default function ItemDetails({ item }: { item: ItemDetailsProps }) {
  return (
    <div className={styles.card}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image src={item.picture} alt={item.title} width={500} height={500} />
        </div>
        <div>
          <p>
            {item.condition} - {item.sold_quantity} vendidos
          </p>
          <p className={styles.title}>{item.title}</p>
          <p className={styles.price}>
            {item.price.currency} {item.price.amount}
          </p>
          <button className={styles.button}>Comprar</button>
        </div>
      </div>
      <h4 className={styles.descriptionTitle}>Descripción del producto</h4>
      <p>{item.description}</p>
    </div>
  );
}
