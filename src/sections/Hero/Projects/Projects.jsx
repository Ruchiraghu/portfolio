import React from "react";
import styles from "./ProjectsStyles.module.css";
export default function Projects() {
  return (
    <Section id="projects" className={styles.container}>
     <h1 className="sectionTitle"> projects</h1>
     <div className={styles.ProjectsContainer}>
        <a href="https://github.com/Ruchiraghu/weather_app.git">
            <img className="hover" src=""></img>
        </a>
     </div>
    </Section>

  );
}
