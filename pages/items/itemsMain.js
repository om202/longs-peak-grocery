import Item from './item'
import styles from '/styles/items/itemsMain.module.css'
import ItemsData from '/public/itemlist.json'

export default function ItemsMain() {
    return (
        <div className={styles.main}>
            {
                ItemsData.map((item, index)=>{
                   return <Item key={index} title={item.item} qty={item.qty}/>
                })
            }
        </div>
    )
}