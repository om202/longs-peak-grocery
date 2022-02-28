import { useState } from "react";
import styles from "../styles/main.module.css";
import Brands from "./brands/brands";
import FloatingCall from "./floatingCall";
import FloatingLocation from "./floatingLocation";
import GalleryMain from "./gallery/galleryMain";
import ItemsMain from "./items/itemsMain";
import LiveSearch from "./liveSearch";
import Navbar from "./navbar";
import Searchbar from "./searchbar";
import ItemsData from "/public/itemlist.json";

const triggerSearch = (searchTerm, itemsData) => {
  if (searchTerm.length > 1) {
    const result = itemsData.filter((item) => {
      const rawValues = Object.values(item);
      const values = [rawValues[0], rawValues[2]];
      return values
        .join(" ")
        .replace(/,/g, "")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });
    return result
  }
};

export default function Main() {
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsData, setItemsData] = useState(ItemsData);

  // trigger search
  const liveSearchResults = triggerSearch(searchTerm, itemsData) || [1];

  return (
    <div className={styles.main}>
      <div className={styles.fixednav}>
        <Navbar />
      </div>
      <div className={styles.body}>
        <div className={styles.bodyItems}>
          <Searchbar liveSearchResults={liveSearchResults} setSearchTerm={setSearchTerm} />
          <LiveSearch liveSearchResults={liveSearchResults}/>
          <GalleryMain/>
          <Brands />
          <ItemsMain itemsData={itemsData} />
        </div>
      </div>
      <FloatingCall/>
      <FloatingLocation/>
    </div>
  );
}
