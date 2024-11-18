import Button from "../Button/Button";
import styles from "./Menu.module.scss";

export default function Menu() {
  return (
    <div className={styles.Menu}>
      <h3>CHILLED GRAPE</h3>

      <div className={styles.navHolder}>
        <ul className={styles.list}>
          <li className={styles.link}>
            <a href="#">Home</a>
          </li>
          <li className={styles.link}>
            <a href="#">About</a>
          </li>
          <li className={styles.link}>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
        </ul>

        <Button text="Login" />
      </div>
    </div>
  );
}
