import styles from "./Aside.module.scss";
import Image from "next/image";
import plantDesktop from "../../../../public/plant.png";
import plantMobile from "../../../../public/plant-mobile.png";
import Button from "../Button/Button";

export default function Aside() {
  return (
    <div className={`${styles.Aside} ${styles.inner}`}>
      <div className={styles.left}>
        <h2>
          LOREM IPSUM DOLOR SIT
          <br /> AMET.
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>

        <Button text="Read More" />
      </div>
      <div className={styles.right}>
        <div className={styles.desktop}>
          <Image src={plantDesktop} alt="plant" />
        </div>
        <div className={styles.mobile}>
          <Image src={plantMobile} alt="plant" />
        </div>
      </div>
    </div>
  );
}
