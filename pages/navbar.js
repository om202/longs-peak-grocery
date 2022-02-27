import styles from '/styles/navbar.module.css'

export default function Navbar() {
    return <>
        <div className={styles.main}>
            <img className={styles.logo} src='/images/logo.png'/>
            <span className={styles.title}>Longs Peak Grocery Market</span>
        </div>
    </>
}
