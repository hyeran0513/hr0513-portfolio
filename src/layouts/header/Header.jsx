"use client";

import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div>Hyeran&apos;s portfolio</div>
      </div>
    </div>
  );
};

export default Header;