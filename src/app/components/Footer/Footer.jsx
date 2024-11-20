import styles from "./Footer.module.scss";
import Image from "next/image";
import Telegram from "../../../../public/telegram.png";
import Twitter from "../../../../public/twitter.png";
import Youtube from "../../../../public/youtube.png";
import Facebook from "../../../../public/facebook.png";
import Instagram from "../../../../public/instagram.png";
import Tiktok from "../../../../public/tiktok.png";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.inner}>
        <div className={styles.mainContainer}>
          <div className={styles.footerBackground}>
            <h2>CHILLED GRAPE</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.</p>
          </div>

          <section className={styles.footerColumnContainer}>
            <div className={styles.leftCol}>
              <p className={styles.listTitles}>Company</p>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Our Work</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <p className={styles.listTitles}>Products</p>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
                <li>
                  <a href="#">Our Work</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>

            <div className={styles.desktopIcons}>
              <p className={styles.listTitles}>Follow Us</p>

              <div className={styles.logosContainerTop}>
                <Image src={Telegram} alt="" />
                <Image src={Twitter} alt="" className={styles.footerTwitterImg} />
                <Image src={Youtube} alt="" />
              </div>

              <div className={styles.logosContainerBtm}>
                <Image src={Facebook} alt="" />
                <Image src={Instagram} alt="" className={styles.footerInstagramImg} />
                <Image src={Tiktok} alt="" />
              </div>
            </div>
          </section>

          <div className={styles.mobileIcons}>
            <p className={styles.listTitles}>Follow Us</p>

            <div className={styles.logosContainerTop}>
              <Image src={Telegram} alt="" />
              <Image src={Twitter} alt="" className={styles.footerTwitterImg} />
              <Image src={Youtube} alt="" />
            </div>

            <div className={styles.logosContainerBtm}>
              <Image src={Facebook} alt="" />
              <Image src={Instagram} alt="" className={styles.footerInstagramImg} />
              <Image src={Tiktok} alt="" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
