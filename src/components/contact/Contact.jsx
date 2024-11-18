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
    <div
      className={styles.page}
      style={{
        "--background-image": `url(${process.env.ASSET_PREFIX}/backgrounds/bg_about.png)`,
        "--background-mob-image": `url(${process.env.ASSET_PREFIX}/backgrounds/bg_mob_about.png)`,
      }}
    >
      <p ref={titleRef} className={styles.title}>
        Contact
      </p>

      <ul className={styles.contactList}>
        <li className={styles.contactListItem}>
          <a
            title="hyeran0513 깃허브 방문하기"
            href="https://github.com/hyeran0513"
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubInverted />
            https://github.com/hyeran0513
          </a>
        </li>

        <li className={styles.contactListItem}>
          <a
            title="hr_0513@naver.com 메일 보내기"
            href="mailto:hr_0513@naver.com"
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
