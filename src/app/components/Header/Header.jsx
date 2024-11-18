import Menu from "../Menu/Menu";
import MobileMenu from "../MobileMenu/MobileMenu";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.inner}>
        <Menu />
        <MobileMenu />
        <PageTitle />
      </div>
    </header>
  );
}
