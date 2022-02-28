import styles from '/styles/items/item.module.css'

export default function Item({title, qty, color}){
    return(
        <div className={styles.main}>
            {/* <div className={styles.itemImage} /> */}
            <span className={styles.itemTitle} style={{"color": color}}>{title}</span>
            <span className={styles.itemQty}>{qty}</span>
        </div>
    )
}