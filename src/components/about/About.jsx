import React from "react";
import styles from "./About.module.scss";

const About = () => {
  const skills = [
    "Nuxt.js",
    "Vue.js",
    "Next.js",
    "PHP",
    "SCSS",
    "HTML",
    "jQuery",
  ];

  return (
    <div className={styles.page}>
      <div className={styles.info}>
        <div className={styles.userName}>김혜란</div>
        <div className={styles.age}>2000 (24세)</div>

        <div className={styles.contactInfo}>
          <dl className={styles.infoItem}>
            <dt className={styles.infoTitle}>이메일</dt>
            <dd className={styles.infoContent}>hr_0513@naver.com</dd>
          </dl>

          <dl className={styles.infoItem}>
            <dt className={styles.infoTitle}>휴대폰</dt>
            <dd className={styles.infoContent}>010-3129-8980</dd>
          </dl>

          <dl className={styles.infoItem}>
            <dt className={styles.infoTitle}>깃허브</dt>
            <dd className={styles.infoContent}>
              https://github.com/hyeran0513
            </dd>
          </dl>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.career}>
          <p className={styles.title}>경력</p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              2023.11 ~ 2024.09 (주)윌비소프트 정규직 - 프론트엔드 & 퍼블리셔
            </li>
            <li className={styles.listItem}>
              2022.08 ~ 2023.03 (주)핌즈 일학습병행 및 정규직 - 백엔드
            </li>
          </ul>
        </div>

        <div className={styles.award}>
          <p className={styles.title}>자격/수상</p>

          <ul className={styles.list}>
            <li className={styles.listItem}>2024.04 SQL개발자(SQLD 자격)</li>
            <li className={styles.listItem}>2023.02 IPP형 일학습병행 우수상</li>
            <li className={styles.listItem}>
              2022.01 캡스톤디자인 경진대회 동상
            </li>
            <li className={styles.listItem}>2021.12 한이음 공모전 입선</li>
          </ul>
        </div>

        <div className={styles.skill}>
          <p className={styles.title}>스킬</p>

          <div className={styles.stack}>
            {skills &&
              skills.map((item, index) => (
                <div key={index} className={styles.stackItem}>
                  {item}
                </div>
              ))}
          </div>
        </div>

        <div className={styles.project}>
          <p className={styles.title}>프로젝트 (최신순)</p>

          <ul className={styles.list}>
            <li className={styles.listItem}>
              2024.07 ~ 2024.09 TIP 매니저 활동지원 시스템 (M.A.P) (주)
              윌비소프트
            </li>

            <li className={styles.listItem}>
              2024.01 ~ 2024.04 사스다(SAASDA) 서비스 홈페이지 (주) 윌비소프트
            </li>

            <li className={styles.listItem}>
              2023.11 ~ 2024.09 사스다(SAASDA) 운영 홈페이지 (주) 윌비소프트
            </li>

            <li className={styles.listItem}>
              2023.11 ~ 2023.12 하남 커리어넷 (주) 윌비소프트
            </li>

            <li className={styles.listItem}>
              2022.08 ~ 2023.08 자사 홈페이지 웹 개발 및 유지보수 (주) 핌즈
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
