import BreadCrumb from "./components/BreadCrumb";
import { CategoriesItemProvider } from "./context/categoriesItemContext";
import styles from "./styles/layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <CategoriesItemProvider>
        <BreadCrumb />
        {children}
      </CategoriesItemProvider>
    </main>
  );
}
