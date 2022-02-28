import styles from "/styles/gallery/gallery.module.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";

const imagesList = ["gallery0.jpg", "gallery1.jpg", "gallery2.jpg"];
const textsList = [
  "We have all kinds of Indian grocery for your needs.",
  "We have dairy items as well as pickles.",
  "We sell fresh fruits and vegetables daily."
]
let count = 0;
const total = imagesList.length;

export default function GalleryMain() {
  const [image, setImage] = useState('gallery0.jpg');
  const [helloText, setHelloText] = useState(textsList[0])
  const updateImage = (direction) => {
    count = count + direction ;
    console.log("outside", count)
    if (count < total && count > -1) {
      setImage(imagesList[count])
      setHelloText(textsList[count])
      console.log("inside", count)
    }else if(count >= total) {
      count = 0
      setImage(imagesList[count])
      setHelloText(textsList[count])
      console.log("greater eq total", count)
    }else if(count < 0){
      count = total-1
      setHelloText(textsList[count])
      setImage(imagesList[count])
    }
  };
  
  return (
    <div className={styles.main}>
      <button onClick={() => updateImage(-1)} className={styles.arrowLeft}>
        <FaArrowLeft />
      </button>
      <img src={`/images/gallery/`+image} className={styles.galleryImage} />
      <span className={styles.helloText}>{helloText}</span>
      <button onClick={() => updateImage(1)} className={styles.arrowRight}>
        <FaArrowRight />
      </button>
    </div>
  );
}
