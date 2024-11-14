"use client";

import styles from "./page.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { projects } from "./data";
import ProjectCard from "@/components/projectCard/ProjectCard";
import About from "@/components/about/About";
import Profile from "@/components/profile/Profile";
import Contact from "@/components/contact/Contact";

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
        end: () => "+=" + horizontal.offsetWidth,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  }, []);

  return (
    <main>
      <section id="profile" className={styles.section}>
        <Profile />
      </section>

      <section id="about" className={styles.section}>
        <About />
      </section>

      <main id="horizontal" className={styles.horizontal}>
        {projects.map((project, index) => (
          <section key={index} className={styles.section}>
            <ProjectCard project={project} />
          </section>
        ))}
      </main>

      <section id="connect" className={styles.section}>
        <Contact />
      </section>
    </main>
  );
}
