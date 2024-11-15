"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Contact.module.scss";
import { VscGithubInverted, VscMail } from "react-icons/vsc";

const Contact = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      titleRef.current,
      {
        scale: 1,
        opacity: 0.8,
      },
      {
        scale: 1.1,
        opacity: 1,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)",
        repeat: -1,
        yoyo: true,
      }
    );
  }, []);

  return (
    <div className={styles.page}>
      <p ref={titleRef} className={styles.title}>
        Contact
      </p>

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
          <a
            title="hr_0513@naver.com에 연락하기"
            href="#Contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscMail />
            hr_0513@naver.com
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;