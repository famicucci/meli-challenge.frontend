import styles from "../../styles/menu.module.css";
import { FormSearch } from "../search";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <FormSearch />
    </nav>
  );
}
