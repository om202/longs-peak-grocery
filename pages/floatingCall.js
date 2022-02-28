import { FaPhone } from "react-icons/fa";
import styles from "/styles/floatingCall.module.css";

export default function FloatingCall() {
  return (
    <a href="tel:3037722044" className={styles.main}>
      <div className={styles.submain}>
        <FaPhone className={styles.icon} />
      </div>
      <span className={styles.callnow}>Call Now!</span>
    </a>
  );
}
