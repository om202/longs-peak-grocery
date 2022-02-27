import styles from "../styles/searchbar.module.css";
import {FaSearch} from "react-icons/fa"

export default function Searchbar() {
  return (
    <form className={styles.main}>
      <input className={styles.searchInput} type="text" />
      <button className={styles.searchButton}> <FaSearch className={styles.searchIcon}/> Search</button>
    </form>
  );
}
