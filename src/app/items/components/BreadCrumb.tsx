"use client";
import { useContext } from "react";
import styles from "../styles/breadCrumb.module.css";
import { CategoriesItemContext } from "../context/categoriesItemContext";

export default function BreadCrumb() {
  const categoriesContext = useContext(CategoriesItemContext);

  return (
    <aside className={styles.container}>
      {categoriesContext &&
        categoriesContext.categories.map((categorie) => (
          <p className={styles.categorie} key={categorie}>
            {categorie}
          </p>
        ))}
    </aside>
  );
}
