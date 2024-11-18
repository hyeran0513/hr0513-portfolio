import React from "react";
import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  return (
    <div
      className={styles.projectCard}
      style={{
        "--backgroundImage": `url(${process.env.ASSET_PREFIX}/backgrounds/bg_about.png)`,
      }}
    >
      <p className={styles.projectTitle}>{project.projectName}</p>

      <div className={styles.projectDetails}>
        <div className={styles.projectPeriod}>{project.projectPeriod}</div>
        <div className={styles.teamMembers}>{project.person}</div>
      </div>

      <p className={styles.projectDescription}>{project.description}</p>

      <div className={styles.projectContent}>
        <div className={styles.projectInfo}>
          <div className={styles.infoSection}>
            <p className={styles.infoTitle}>보유 기술</p>

            <ul className={styles.techList}>
              {project.tech.map((tech, index) => (
                <li className={styles.techItem} key={index}>
                  <div
                    className={`${styles.techIcon} ${styles[tech.icon]}`}
                    style={{
                      background: `url(${process.env.ASSET_PREFIX}/icons/icon_tech.png) no-repeat center/auto 100%`,
                    }}
                  ></div>

                  <div className={styles.techName}>{tech.txt}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoSection}>
            <p className={styles.infoTitle}>링크</p>

            <a
              className={styles.projectLink}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link}
            </a>
          </div>

          <div className={styles.infoSection}>
            <p className={styles.infoTitle}>설명 및 성과</p>

            <div className={styles.projectReview}>{project.review}</div>
          </div>
        </div>

        <div className={styles.thumbnailWrapper}>
          <div
            className={styles.thumbnailImage}
            style={{
              background: `url(${process.env.ASSET_PREFIX}/project-thumbnails/${project.thumb}) no-repeat center/cover`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
