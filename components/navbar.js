import React, {useState, useEffect, useCallback} from "react";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarName}>
        <p className={styles.navbarNameText}>Cliff</p>
      </div>
      <div className={styles.navbarContent}>
        <div className={styles.navbarItem}>
          <Link href="/" passHref>
            <a className="styles.navbarLink">Home</a>
          </Link>
        </div>
        <div className={styles.navbarItem}>
          <Link href="/latest" passHref>
            <a>Latest</a>
          </Link>
        </div>
        <div className={styles.navbarItem}>
          <Link href="/projects" passHref>
            <a>Projects</a>
          </Link>
        </div>
        <div className={styles.navbarItem}>
          <Link href="/others" passHref>
            <a>Others</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
