import styles from '/styles/brands/brands.module.css'
import BrandItem from './brandItem'
import BrandsData from "/public/brands.json"

export default function Brands () {
    return (
        <div className={styles.main}>
            <span className={styles.title}>Our Brands</span>
            <div className={styles.brandlist}>
                {
                    BrandsData.map((brand, index)=>{
                       return <BrandItem key={index} name={brand.name} image={brand.image}/>
                    })
                }
            </div>
        </div>
    )
}