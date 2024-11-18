"use client";

import { useEffect, useState } from "react";
import styles from "./MobileMenu.module.scss";

export default function MobileMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Disable scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.menuToggle} ${menuOpen ? styles.open : ""}`} onClick={toggleMenu}>
        <span className={`${styles.bar} ${menuOpen ? styles.barTop : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.barMiddle : ""}`}></span>
        <span className={`${styles.bar} ${menuOpen ? styles.barBottom : ""}`}></span>
      </div>
      <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#services">Blog</a>
        </li>
        <li>
          <a href="#contact">Pricing</a>
        </li>
        <li>
          <a href="#contact">Login</a>
        </li>
      </ul>
    </nav>
  );
}
