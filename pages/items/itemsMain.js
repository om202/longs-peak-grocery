import Item from './item'
import styles from '/styles/items/itemsMain.module.css'

export default function ItemsMain({itemsData}) {
    return (
        <div>
            <h2>Items on self</h2>
            <div className={styles.main}>
            {
                itemsData.map((item, index)=>{
                   return <Item key={index} title={item.item} qty={item.qty}/>
                })
            }
            </div>
        </div>
    )
}