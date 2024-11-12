"use client";

import React from "react";
import styles from "./Project.module.scss";
import { data } from "./data";
import { FcServices, FcBrokenLink, FcSms } from "react-icons/fc";

const ProjectClient = () => {
  return (
    <>
      {data.length > 0 &&   
        data.map((item, index) => (
          <div className={styles.projectBox} key={index}>
            <p className={styles.projectName}>{item.projectName}</p>

            <div className={styles.projectInfo}>
              <span className={styles.date}>{item.projectPeriod}</span>
              <span className={styles.division}>/</span>
              <span className={styles.person}>{item.person}</span>
            </div>

            <p className={styles.projectDescription}>{item.description}</p>

            <div className={styles.flexBox}>
              <div className={styles.thumb}>
                <div
                  className={styles.thumbImg}
                  style={{
                    background: `url(${process.env.ASSET_PREFIX}/${item.thumb}) no-repeat center/cover`,
                  }}
                ></div>
              </div>

              <div className={styles.info}>
                <div className={styles.infoItem}>
                  <p className={styles.title}><FcServices />Tech Stack</p>
                  <ul className={styles.stackList}>
                    {item.stack.map((tech, techIndex) => (
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
                  <p className={styles.title}><FcBrokenLink />Link</p>
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    {item.link}
                  </a>
                </div>

                <div className={styles.infoItem}>
                  <p className={styles.title}><FcSms />Review</p>
                  <p>{item.review}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProjectClient;
