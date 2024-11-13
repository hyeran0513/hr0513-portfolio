"use client";

import styles from "./page.module.scss";
import AboutClient from "./about/AboutClient";
import ConnectClient from "./connect/ConnectClient";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import ProfileClient from "./profile/ProfileClient";
import { projects } from "./data";
import ProjectCard from "@/components/projectCard/ProjectCard";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const horizontal = document.querySelector("#horizontal");
    const sections = gsap.utils.toArray("#horizontal > section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: horizontal,
        start: "top top",
        end: () => `+=${horizontal.scrollWidth - window.innerWidth}`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: { min: 0.1, max: 0.1 },
        },
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <main>
      <section id="about" className={styles.section}>
        <ProfileClient />
      </section>

      <section className={styles.section}>
        <AboutClient />
      </section>

      <main id="horizontal" className={styles.horizontal}>
        {projects.map((project, index) => (
          <section key={index} className={styles.section}>
            <ProjectCard project={project} />
          </section>
        ))}
      </main>

      <section id="connect" className={styles.section}>
        <ConnectClient />
      </section>
    </main>
  );
}
