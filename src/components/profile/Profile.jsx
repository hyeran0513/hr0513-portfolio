import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Profile.module.scss";
import { PiMouseSimpleThin } from "react-icons/pi";

const Profile = () => {
  const nameRef = useRef(null);
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
    )
      .fromTo(
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
      )
      .fromTo(
        nameRef.current,
        {
          scale: 3,
          opacity: 0,
          y: -50,
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.3)",
        },
        "-=1.2"
      );
  }, []);

  return (
    <div
      className={styles.profile}
      style={{
        "--backgroundImage": `url(${process.env.ASSET_PREFIX}/backgrounds/bg_about.png)`,
        "--backgroundMobImage": `url(${process.env.ASSET_PREFIX}/backgrounds/bg_mob_about.png)`,
      }}
    >
      <div className={styles.title}>
        <div className={styles.userName} ref={nameRef}>
          <span className={styles.sparkle}>김혜란</span>
        </div>

        <div ref={frontendTextRef}>프론트엔드_</div>

        <div ref={portfolioTextRef}>_포트폴리오</div>
      </div>

      <PiMouseSimpleThin className={styles.mouseIcon} />
    </div>
  );
};

export default Profile;
