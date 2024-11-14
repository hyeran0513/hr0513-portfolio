import React, { useEffect } from 'react';
import gsap from 'gsap';
import styles from './Profile.module.scss';
import { PiMouseSimpleThin } from "react-icons/pi";
import { FaCloud } from "react-icons/fa";

const Profile = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.title} div`, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, stagger: 0.3 }
    );
  }, []);

  return (
    <div className={styles.page}>
      <FaCloud className={`${styles.cloudIcon} ${styles.first}`} />
      
      <div className={styles.title}>
        <div className={styles.titleMain}>웹 프론트엔드</div>
        <div className={styles.titleSub}>김혜란_포트폴리오</div>
      </div>

      <FaCloud className={`${styles.cloudIcon} ${styles.second}`} />

      <PiMouseSimpleThin className={styles.mouseIcon} />
    </div>
  );
};

export default Profile;
