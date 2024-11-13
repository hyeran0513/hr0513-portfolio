import React, { useEffect, useRef, useState } from "react";
import styles from "./ProjectCard.module.scss";
import { FcServices, FcBrokenLink, FcSms } from "react-icons/fc";

const ProjectCard = ({ project }) => {
  return (
    <div className={styles.projectCard}>
      <p className={styles.projectName}>{project.projectName}</p>

      <div className={styles.projectInfo}>
        <span className={styles.date}>{project.projectPeriod}</span>
        <span className={styles.division}>/</span>
        <span className={styles.person}>{project.person}</span>
      </div>

      <p className={styles.projectDescription}>{project.description}</p>

      <div className={styles.flexBox}>
        <div className={styles.thumb}>
          <div
            className={styles.thumbImg}
            style={{
              background: `url(${process.env.ASSET_PREFIX}/${project.thumb}) no-repeat center/cover`,
            }}
          ></div>
        </div>

        <div className={styles.info}>
          <div className={styles.infoItem}>
            <p className={styles.title}>
              <FcServices />
              스택
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
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.title}>
              <FcBrokenLink />
              링크
            </p>

            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          </div>

          <div className={styles.infoItem}>
            <p className={styles.title}>
              <FcSms />
              소감
            </p>

            <div className={styles.review}>{project.review}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;