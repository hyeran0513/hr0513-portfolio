import React from 'react'
import styles from './Profile.module.scss'
import { PiMouseSimpleThin } from "react-icons/pi"

const Profile = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.title}>프론트엔드_</div>
      <div className={styles.title}>_포트폴리오</div>

      <PiMouseSimpleThin className={styles.mouseIcon} />
    </div>
  )
}

export default Profile