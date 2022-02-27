import styles from "../styles/main.module.css";
import Brands from "./brands/brands";
import ItemsMain from "./items/itemsMain";
import Navbar from "./navbar";
import Searchbar from "./searchbar";

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.fixednav}>
        <Navbar />
      </div>
      <div className={styles.body}>
        <div className={styles.bodyItems}>
          <Searchbar />
          <Brands/>
          <ItemsMain/>
        </div>
      </div>
    </div>
  );
}
