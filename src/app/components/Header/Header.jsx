import Menu from "../Menu/Menu";
import MobileMenu from "../MobileMenu/MobileMenu";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.inner}>
        <div className={styles.mobileTitle}>
          <h3>CHILLED GRAPE</h3>
        </div>
        <Menu />
        <MobileMenu />
        <PageTitle />
      </div>
    </header>
  );
}
