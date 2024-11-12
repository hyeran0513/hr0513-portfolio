'use client'

import React from 'react';
import { Link } from 'react-scroll';
import styles from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <Link to="about" smooth={true} duration={500}>
        About
      </Link>
      <Link to="project" smooth={true} duration={500}>
        Project
      </Link>
      <Link to="connect" smooth={true} duration={500}>
        Connect
      </Link>
    </div>
  );
};

export default Sidebar;
