import React, { useEffect, useRef } from "react";
import styles from "./Profile.module.scss";
import gsap from "gsap";
import { PiMouseSimpleThin } from "react-icons/pi";

const Profile = () => {
  const frontendTextRef = useRef(null);
  const portfolioTextRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      frontendTextRef.current,
      {
        x: -200,
        opacity: 0,
        scale: 1.5,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      }
    ).fromTo(
      portfolioTextRef.current,
      {
        x: 200,
        opacity: 0,
        scale: 1.5,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "elastic.out(1, 0.3)",
      },
      "-=1"
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
      <div className={styles.title}>
        <div className={styles.titleMain} ref={frontendTextRef}>
          프론트엔드 개발자
        </div>

        <div className={styles.titleSub} ref={portfolioTextRef}>
          포트폴리오
        </div>
      </div>

      <div
        className={styles.namecardWrapper}
        style={{
          "--namecard-line": `url(${process.env.ASSET_PREFIX}/profile/namecard_line.png)`,
        }}
      >
        <div className={styles.namecard}>
          <div
            className={styles.profilePhoto}
            style={{
              background: `url(${process.env.ASSET_PREFIX}/profile/me.png) no-repeat center/cover`,
            }}
          ></div>

          <div className={styles.info}>
            <div className={`${styles.userName} ${styles.ko}`}>김혜란</div>
            <div className={`${styles.userName} ${styles.eg}`}>KIM HYE RAN</div>

            <div className={styles.role}>Front-End Developer</div>
          </div>
        </div>
      </div>

      <PiMouseSimpleThin className={styles.mouseIcon} />
    </div>
  );
};

export default Profile;
