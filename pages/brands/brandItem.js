import styles from "/styles/brands/brandItem.module.css";

export default function BrandItem({ name, image }) {
    const imgsrc = `/images/brands/${image}`;
    console.log("name image in bi ", name, imgsrc)
  return (
    <div className={styles.main}>
      <img src={imgsrc} className={styles.brandImage} />
      <span className={styles.title}>{name}</span>
    </div>
  );
}
