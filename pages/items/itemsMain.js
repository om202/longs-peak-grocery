import Item from './item'
import styles from '/styles/items/itemsMain.module.css'
import randomColor from 'randomcolor'

export default function ItemsMain({itemsData}) {
    return (
        <div>
            <h2>Items on self</h2>
            <div className={styles.main}>
            {
                itemsData?.map((item, index)=>{
                    const randomClr = randomColor({hue: 'red', luminosity: 'bright'});
                   return <Item key={index} title={item.item} qty={item.qty} color={randomClr}/>
                })
            }
            </div>
        </div>
    )
}