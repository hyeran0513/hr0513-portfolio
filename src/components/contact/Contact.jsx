"use client";

import React from "react";
import styles from "./Contact.module.scss";
import { VscGithubInverted } from "react-icons/vsc";
import { VscMail } from "react-icons/vsc";
import { FaCloud } from "react-icons/fa";

const Contact = () => {
  return (
    <div className={styles.page}>
      <FaCloud className={`${styles.cloudIcon} ${styles.first}`} />
      <p className={styles.title}>Contact</p>
      <FaCloud className={`${styles.cloudIcon} ${styles.second}`} />

      <ul className={styles.list}>
        <li className={styles.listItem}>
          <a
            title="hyeran0513 깃허브 보러가기"
            href="https://github.com/hyeran0513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubInverted />
            https://github.com/hyeran0513
          </a>
        </li>

        <li className={styles.listItem}>
          <a title="hr_0513@naver.com에 연락하기" href="#Contact" target="_blank" rel="noopener noreferrer">
            <VscMail />
            hr_0513@naver.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
