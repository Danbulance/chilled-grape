import styles from "./Test.module.scss";
import Image from "next/image";
import twitter from "../../../../public/twitter.png";

export default function Test() {
  return (
    <div className={styles.Product}>
      <div className={styles.img}>
        <Image src={twitter} alt="" fill style={{ objectFit: "cover" }} />
      </div>
      <p>tetgd</p>
      <p>£66666</p>
    </div>
  );
}
