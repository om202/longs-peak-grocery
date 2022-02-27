import styles from '/styles/items/item.module.css'

export default function Item({title, qty}){
    return(
        <div className={styles.main}>
            <img className={styles.itemImage} src='images/fakeitem.png' />
            <span className={styles.itemTitle}>{title}</span>
            <span className={styles.itemQty}>{qty}</span>
        </div>
    )
}