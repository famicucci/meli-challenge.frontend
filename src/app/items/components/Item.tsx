"use client";
import Image from "next/image";
import { Item } from "../models/Item";
import styles from "../styles/item.module.css";
import { useRouter } from "next/navigation";
import { CONDITION_ITEM, CURRENCY } from "../utils";

export default function Item({ item }: { item: Item }) {
  const router = useRouter();

  return (
    <div
      className={`${styles.card} ${styles.grid}`}
      onClick={() => {
        router.push(`/items/${item.id}`);
      }}
    >
      <Image
        src={item.picture}
        alt="Picture of the author"
        width={200}
        height={200}
      />
      <div className={styles.info}>
        <div className={styles.price}>
          <p>{CURRENCY[item.price.currency.toLowerCase()]}</p>
          <p className={styles.amount}>
            {new Intl.NumberFormat("de-De").format(item.price.amount)}
          </p>
        </div>
        <p className={styles.title}>{item.title}</p>
      </div>
      <p className={styles.condition}>{CONDITION_ITEM[item.condition]}</p>
    </div>
  );
}
