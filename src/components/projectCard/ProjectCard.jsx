import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectCard.module.scss";
import { FcServices, FcBrokenLink, FcSms } from "react-icons/fc";

const ProjectCard = ({ project }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 한 번만 애니메이션 실행
        }
      },
      { threshold: 0.5 } // 50%가 화면에 보일 때 애니메이션 시작
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`${styles.projectCard} ${isVisible ? styles.visible : ""}`}
      ref={cardRef}
    >
      <p className={styles.projectName}>{project.projectName}</p>

      <div className={styles.projectInfo}>
        <span className={styles.date}>{project.projectPeriod}</span>
        <span className={styles.division}>/</span>
        <span className={styles.person}>{project.person}</span>
      </div>

      <p className={styles.projectDescription}>{project.description}</p>

      <div className={styles.flexBox}>
        <div
          className={`${styles.thumb} ${isVisible ? styles.thumbVisible : ""}`}
        >
          <div
            className={styles.thumbImg}
            style={{
              background: `url(${process.env.ASSET_PREFIX}/${project.thumb}) no-repeat center/cover`,
            }}
          ></div>
        </div>

        <div
          className={`${styles.info} ${isVisible ? styles.infoVisible : ""}`}
        >
          <div className={styles.infoItem}>
            <p className={styles.title}>
              <FcServices />
              Tech Stack
            </p>
            <ul className={styles.stackList}>
              {project.stack.map((tech, techIndex) => (
                <li className={styles.stackItem} key={techIndex}>
                  <div
                    className={`${styles.icon} ${styles[tech.icon]}`}
                    style={{
                      background: `url(${process.env.ASSET_PREFIX}/stack.png) no-repeat center/auto 100%`,
                    }}
                  ></div>
                  <div className={styles.txt}>{tech.txt}</div>
                  <div className={styles.percent}>{tech.percent}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.title}>
              <FcBrokenLink />
              Link
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.title}>
              <FcSms />
              Review
            </p>
            <p>{project.review}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;