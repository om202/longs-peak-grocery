import Item from "./items/item";
import styles from "/styles/items/itemsMain.module.css";

export default function LiveSearch({ liveSearchResults }) {
  return liveSearchResults.length === 0 || liveSearchResults[0]===1? (
    <></>
  ) : (
    <div className={styles.main}>
      {liveSearchResults.map((item, index) => (
        <Item key={index} title={item.item} qty={item.qty} />
      ))}
    </div>
  );
}
