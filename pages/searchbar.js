import styles from "../styles/searchbar.module.css";
import { FaSearch } from "react-icons/fa";
import {useRef, useEffect} from 'react'

export default function Searchbar({ setSearchTerm, liveSearchResults }) {
  let redShadow = {};
  let redText = {};
  const searchInput = useRef(0)

  useEffect(()=>{
    searchInput.current.value = ""
    searchInput.current.focus();
  }, [])

  if (liveSearchResults.length === 0) {
    redShadow = {
      boxShadow: "0 10px 20px rgba(255,0,0,0.19), 0 6px 6px rgba(255,0,0,0.23)",
      border: "none",
      color: "red",
    };
    redText = {
      color: "red",
    };
  } else {
    // window.scrollTo(0,0)
    redShadow = {};
    redText = {};
  }

  return (
    <form className={styles.main}>
      <div className={styles.searchBar} style={redShadow}>
        <FaSearch className={styles.searchIcon} />
        <input
          ref = {searchInput}
          style={redText}
          onChange={(event) => {
            setSearchTerm(event.currentTarget.value);
          }}
          className={styles.searchInput}
          type="text"
        placeholder="Search Longs Peaks..."
        />
      </div>
    </form>
  );
}
