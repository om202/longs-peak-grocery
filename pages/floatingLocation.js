import { FaLocationArrow } from "react-icons/fa";
import styles from "/styles/floatingLocation.module.css";

export default function FloatingLocation() {
  return (
    <a
      href="https://www.google.com/maps/dir//longs+peak+grocery+market/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x876bf966796bc12f:0x96f347ac4534f3de?sa=X&ved=2ahUKEwiazqz34qL2AhUqJTQIHc2dBmwQ9Rd6BAgyEAU"
      target="_blank"
      className={styles.main} rel="noreferrer"
    >
      <div className={styles.submain}>
        <FaLocationArrow className={styles.icon} />
      </div>
      <span className={styles.callnow}>Drive Now!</span>
    </a>
  );
}
