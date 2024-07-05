"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./navbar.module.css";
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedNavigation, setSelectedNavigation] = useState<number | null>(
    null
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const handleNavigation = (index: number) => {
    setSelectedNavigation(index);
    setMenuOpen(false);
    if (index === 1) {
      router.push("/interest");
    } else if (index === 0) {
      router.push("/aboutme");
    } else if (index === 2) {
      router.push("/contact");
    }
  };

  const router = useRouter();

  return (
    <div className={`${styles.container} ${menuOpen ? styles.menuOpen : ""}`}>
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.open : ""}`}></div>
      </div>
      <div className={styles.content}>
        <div className={styles.darkMode} onClick={toggleDarkMode}>
          <Image
            src={darkMode ? "/dark.svg" : "/light.svg"}
            height={20}
            width={20}
            alt={darkMode ? "dark" : "light"}
          />
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
          <Image src="./user.svg" width="50" height="50" alt="user" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
