import Item from "./items/item";
import styles from "/styles/items/itemsMain.module.css";
import randomColor from "randomcolor";

export default function LiveSearch({ liveSearchResults }) {
  return liveSearchResults && (liveSearchResults?.length === 0 || liveSearchResults[0] === 1) ? (
    <></>
  ) : (
    <div className={styles.main}>
      {liveSearchResults?.map((item, index) => {
        const randomClr = randomColor({ hue: "red", luminosity: "bright" });
        return <Item color={randomClr} key={index} title={item.item} qty={item.qty} />;
      })}
    </div>
  );
}
 