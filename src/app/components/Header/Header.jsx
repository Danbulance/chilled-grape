import Menu from "../Menu/Menu";
import PageTitle from "../PageTitle/PageTitle";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.inner}>
        <Menu />
        <PageTitle />
      </div>
    </header>
  );
}
