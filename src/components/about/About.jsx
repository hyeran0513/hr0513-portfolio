import React from "react";
import styles from "./About.module.scss";

import {
  skillList,
  contactDetails,
  careerList,
  certificationList,
  projectList,
} from "./data.js";

const About = () => {
  return (
    <div
      className={styles.page}
      style={{
        "--backgroundImage": `url(${process.env.ASSET_PREFIX}/backgrounds/bg_about.png)`,
      }}
    >
      <div className={styles.infoSection}>
        <div
          className={styles.profilePhoto}
          style={{
            background: `url(${process.env.ASSET_PREFIX}/profile/me.jpg) no-repeat center/cover`,
          }}
        ></div>

        <div className={styles.personalInfo}>
          <div className={styles.name}>김혜란</div>
          <div className={styles.birthYear}>2000 (24세)</div>

          <div className={styles.contactDetails}>
            {contactDetails.map((item, index) => (
              <div key={index} className={styles.infoItem}>
                <div className={styles.infoTitle}>{item.title}</div>
                <div className={styles.infoContent}>{item.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.careerSection}>
          <p className={styles.title}>경력</p>

          <ul className={styles.list}>
            {careerList.map((career, index) => (
              <li key={index} className={styles.listItem}>
                <div className={styles.period}>{career.period}</div>
                <span className={styles.company}>{career.company}</span>
                <span className={styles.employmentType}>
                  {career.employmentType}
                </span>
                <span className={styles.role}>{career.role}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.certificationSection}>
          <p className={styles.title}>자격/수상</p>

          <ul className={styles.list}>
            {certificationList.map((cert, index) => (
              <li key={index} className={styles.listItem}>
                <div className={styles.period}>{cert.date}</div>
                <div className={styles.detail}>{cert.detail}</div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.skillSection}>
          <p className={styles.title}>스킬</p>

          <div className={styles.skillList}>
            {skillList.map((skillItem, index) => (
              <div key={index} className={styles.skillItem}>
                {skillItem}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.projectSection}>
          <p className={styles.title}>프로젝트</p>

          <ul className={styles.list}>
            {projectList.map((project, index) => (
              <li key={index} className={styles.listItem}>
                <div className={styles.period}>{project.period}</div>
                <div className={styles.company}>{project.company}</div>
                <div className={styles.projectName}>{project.name}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
