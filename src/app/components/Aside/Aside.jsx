import styles from "./Aside.module.scss";
import Image from "next/image";
import Plant from "../../../../public/plant.png";

export default function Aside() {
  return (
    <div className={styles.Aside}>
      <div className={styles.left}>
        <h3>Lorem ipsum dolor sit amet.</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className={styles.right}>
        <Image src={Plant} alt="plant" />
      </div>
    </div>
  );
}
