import styles from "./page.module.scss";
import AboutClient from "./about/AboutClient";
import ProjectClient from "./project/ProjectClient";
import ConnectClient from "./connect/ConnectClient";
import { FcIdea, FcCommandLine, FcContacts } from "react-icons/fc";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <section id="about">
          <span className={styles.title}>
            <FcIdea className={styles.icon} />
            
            <div className={styles.txt}>
              <div>Front-End Developer</div> 
              <div className={styles.userName}>김혜란</div>
            </div>
          </span>

          <AboutClient />
        </section>

        <section id="project">
          <span className={styles.title}>
            <FcCommandLine className={styles.icon} />
            <span className={styles.txt}>Project</span>
          </span>

          <ProjectClient /> 
        </section>

        <section id="connect">
          <p className={styles.title}>
            <FcContacts className={styles.icon} />
            <span className={styles.txt}>Connect</span>
          </p>

          <ConnectClient />
        </section>
      </main>
    </div>
  );
}
