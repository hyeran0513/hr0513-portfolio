"use client";

import React from "react";
import styles from "./About.module.scss";
import {
  profileData,
  awardsData,
  activitiesData,
  projectData,
  stackData,
} from "./data";
import { FcFolder, FcCloseUpMode, FcBusinessContact, FcSupport, FcSportsMode } from "react-icons/fc";

const About = () => {
  return (
    <div className={styles.page}>
      <div className={styles.info}>
        {profileData.length > 0 && (
          <div className={styles.infoBox}>
            <p className={styles.title}><FcBusinessContact />PROFILE</p>

            <div className={styles.infoList}>
              {profileData.map((item, index) => (
                <dl className={styles.infoItem} key={index}>
                  <dt>{item.txt}</dt>
                  <dd>{item.value}</dd>
                </dl>
              ))}
            </div>
          </div>
        )}

        {awardsData.length > 0 && (
          <div className={styles.infoBox}>
            <p className={styles.title}><FcCloseUpMode />AWARDS</p>

            <div className={styles.infoList}>
              {awardsData.map((item, index) => (
                <dl className={styles.infoItem} key={index}>
                  <dt>{item.date}</dt>
                  <dd>{item.txt}</dd>
                </dl>
              ))}
            </div>
          </div>
        )}

        {activitiesData.length > 0 && (
          <div className={styles.infoBox}>
            <p className={styles.title}><FcSportsMode />ACTIVITIES</p>

            <div className={styles.infoList}>
              {activitiesData.map((item, index) => (
                <dl className={styles.infoItem} key={index}>
                  <dt>{item.date}</dt>
                  <dd>{item.txt}</dd>
                </dl>
              ))}
            </div>
          </div>
        )}

        {stackData.length > 0 && (
          <div className={styles.infoBox}>
            <p className={styles.title}><FcSupport />TECH.STACK</p>

            <div className={styles.stackWrap}>
              {stackData.map((item, index) => (
                <div key={index} className={styles.stack}>
                  <span
                    className={`${styles.stackIcon} ${styles[item.icon]}`}
                    style={{
                      background: `url(${process.env.ASSET_PREFIX}/stackIcon.svg) no-repeat center/auto 100%`,
                    }}
                  ></span>
                  <span className={styles.txt}>{item.txt}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {projectData.length > 0 && (
          <div className={`${styles.infoBox} ${styles.half}`}>
            <p className={styles.title}><FcFolder />PROJECT</p>

            <div className={styles.infoList}>
              {projectData.map((item, index) => (
                <dl className={styles.infoItem} key={index}>
                  <dt>{item.date}</dt>
                  <dd>{item.txt}</dd>
                </dl>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;
