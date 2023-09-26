import { BreadCrumbProps } from "../models/BreadCrumbProps";
import styles from "../styles/breadCrumb.module.css";

export default function BreadCrumb(props: BreadCrumbProps) {
  return (
    <aside className={styles.container}>
      {props.categories.map((categorie) => (
        <p className={styles.categorie} key={categorie}>
          {categorie}
        </p>
      ))}
    </aside>
  );
}
