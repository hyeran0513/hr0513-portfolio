"use client";

import React from 'react'
import styles from './Contact.module.scss'
import { VscGithubInverted } from "react-icons/vsc"
import { VscMail } from "react-icons/vsc"

const Contact = () => {
  return (
    <div className={styles.page}>
      <a
        href="https://github.com/hyeran0513"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VscGithubInverted />
        https://github.com/hyeran0513
      </a>
      <a
        href="#Contact"
        target="_blank"
        rel="noopener noreferrer"
      >
        <VscMail />
        hr_0513@naver.com
      </a>
    </div>
  )
}

export default Contact