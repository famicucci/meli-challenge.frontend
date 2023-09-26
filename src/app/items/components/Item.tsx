import Image from "next/image";
import { Item } from "../models/Item";
import styles from "../styles/item.module.css";

export default function Item({ item }: { item: Item }) {
  return (
    <div className={styles.grid}>
      <Image
        src={item.picture}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div className={styles.info}>
        <div className={styles.price}>
          <p>{item.price.currency}</p>
          <p className={styles.amount}>{item.price.amount}</p>
        </div>
        <p className={styles.title}>{item.title}</p>
      </div>
      <p className={styles.condition}>{item.condition}</p>
    </div>
  );
}
