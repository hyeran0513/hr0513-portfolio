"use client";

import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.headerInner}>
        <div>Hyeran&apos;s portfolio</div>

        <div className={styles.isActive}>활동 중</div>
      </div>
    </div>
  );
};

export default Header;