"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./navbar.module.css";
import ToggleMode from "../modeButton/button-mode";
import SvgUserComponent from "../svg/user-svg";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNavigation, setSelectedNavigation] = useState<number | null>(
    null
  );
  const router = useRouter();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleNavigation = (index: number) => {
    setSelectedNavigation(index);
    if (index === 1) {
      router.push("/interest");
    } else if (index === 0) {
      router.push("/");
    } else if (index === 2) {
      router.push("/contact");
    }
    setMenuOpen(false);
  };

  return (
    <>
      <div className={styles.menuIcon}>
        <div onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
          <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
          <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
        </div>
      </div>
      <div className={`${styles.container} ${menuOpen ? styles.menuOpen : ""}`}>
        <div className={styles.content}>
          <div className={styles.darkMode} onClick={toggleDarkMode}>
            <ToggleMode />
          </div>

          <div className={styles.navigation}>
            <div
              className={`${styles["navigation-item"]} ${
                selectedNavigation === 0 ? styles.selected : ""
              }`}
              onClick={() => handleNavigation(0)}
            >
              About me
            </div>
            <div
              className={`${styles["navigation-item"]} ${
                selectedNavigation === 1 ? styles.selected : ""
              }`}
              onClick={() => handleNavigation(1)}
            >
              Interest
            </div>

            <div
              className={`${styles["navigation-item"]} ${
                selectedNavigation === 2 ? styles.selected : ""
              }`}
              onClick={() => handleNavigation(2)}
            >
              Contact
            </div>
          </div>
          <div className={styles.profile}>
            <div>User</div>
            <SvgUserComponent height="50" width="50" fill="var(--img-color)" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
