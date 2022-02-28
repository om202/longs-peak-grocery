import styles from "/styles/brands/brands.module.css";
import BrandItem from "./brandItem";
import BrandsData from "/public/brands.json";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Brands() {
  const brandList = useRef(0);

  const scroll = (off) => {
    brandList.current.scrollLeft+=off;
  };

  return (
    <div className={styles.main}>
      <h2>Brands</h2>
      <div className={styles.listHolder}>
        <button onClick={() => scroll(-60)} className={styles.arrowButtons}>
          <FaArrowLeft />
        </button>
        <div ref={brandList} className={styles.brandlist}>
          {BrandsData.map((brand, index) => {
            return (
              <BrandItem key={index} name={brand.name} image={brand.image} />
            );
          })}
        </div>
        <button onClick={(e) => scroll(60)} className={styles.arrowButtons}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
