"use client";

import React from 'react'
import styles from './Connect.module.scss'
import { VscGithubInverted } from "react-icons/vsc"
import { VscMail } from "react-icons/vsc"

const ConnectClient = () => {
  return (
    <div className={styles.connect}>
      <a
        href="https://github.com/hyeran0513"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VscGithubInverted />
        https://github.com/hyeran0513
      </a>
      <a
        href="#Connect"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VscMail />
        hr_0513@naver.com
      </a>
    </div>
  )
}

export default ConnectClient