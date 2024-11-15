import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./Profile.module.scss";
import { PiMouseSimpleThin } from "react-icons/pi";

const Profile = () => {
  const userNameRef = useRef(null);
  const frontendRef = useRef(null);
  const portfolioRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo(
      frontendRef.current,
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
        portfolioRef.current,
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
        userNameRef.current,
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
        "--bg-image": `url(${process.env.ASSET_PREFIX}/bg_about.png)`,
      }}
    >
      <div className={styles.title}>
        <div className={styles.userName} ref={userNameRef}>
          <span className={styles.sparkle}>김혜란</span>
        </div>
        <div ref={frontendRef}>프론트엔드_</div>
        <div ref={portfolioRef}>_포트폴리오</div>
      </div>

      <PiMouseSimpleThin className={styles.mouseIcon} />
    </div>
  );
};

export default Profile;
