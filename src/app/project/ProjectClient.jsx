"use client";

import React from "react";
import styles from "./Project.module.scss";
import { projects } from "./data";
import ProjectCard from "@/components/projectCard/ProjectCard";

const ProjectClient = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectGrid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectClient;
