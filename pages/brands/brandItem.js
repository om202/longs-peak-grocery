import styles from "/styles/brands/brandItem.module.css";

export default function BrandItem({ name, image }) {
    const imgsrc = `/images/brands/${image}`;
  return (
    <div className={styles.main}>
      <img src={imgsrc} className={styles.brandImage} />
    </div>
  );
}
