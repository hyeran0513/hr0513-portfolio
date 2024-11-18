"use client";

import styles from "./page.module.scss";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { projects } from "./data";
import ProjectCard from "@/components/projectCard/ProjectCard";
import About from "@/components/about/About";
import Profile from "@/components/profile/Profile";
import Contact from "@/components/contact/Contact";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 1200;
    setIsMobile(isMobile);
  }, []);

  const setupGsap = () => {
    if (isMobile) return;
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray("#horizontal > section");

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: "#horizontal",
        start: "top top",
        end: `+=${
          document.querySelector("#horizontal").scrollWidth - window.innerWidth
        }`,
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (sections.length - 1),
          inertia: false,
          duration: 0.1,
        },
        invalidateOnRefresh: true,
        anticipatePin: 1,
      },
    });
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setupGsap();

      const handleResize = () => {
        const isNowMobile = window.innerWidth <= 768;
        setIsMobile(isNowMobile);

        if (!isNowMobile) {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
          setupGsap();
        }
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, [isMobile]);

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
          <section key={index} className={styles.section} id={`hor${index}`}>
            <ProjectCard project={project} />
          </section>
        ))}
      </main>

      <section id="contact" className={styles.section}>
        <Contact />
      </section>
    </main>
  );
}
