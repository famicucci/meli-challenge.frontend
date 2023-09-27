import styles from "../../styles/menu.module.css";
import { FormSearch } from "../search";
import Image from "next/image";
import logo from "../../../../public/logo-meli.png";

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logoAndSearch}>
        <Image src={logo} alt="logo-mercadolibre" width={40} />
        <FormSearch />
      </div>
    </nav>
  );
}
