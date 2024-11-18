// ProductItem.jsx
import styles from "./ProductItem.module.scss";
import Image from "next/image";

export default function ProductItem({ data }) {
  return (
    <div className={styles.Listing}>
      <div className={styles.img}>
        <Image
          src={data.image} // Assuming 'image' is the URL of the image
          alt={data.product_name} // Assuming 'title' is the product title
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={styles.productInfo}>
        <p className={styles.productName}>{data.product_name}</p>
        <p className={styles.productPrice}>£{data.price}</p>
      </div>
    </div>
  );
}
