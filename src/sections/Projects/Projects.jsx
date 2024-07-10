import React from "react";
import styles from "./ProjectsStyles.module.css";
import weather from "../../assets/weather_white.png";
import food_delivery from "../../assets/food_delivery.png";
import ProjectCard from "../../common/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.ProjectsContainer}> {/* Ensure <div> is lowercase */}
        <ProjectCard
          src={weather}
          link="https://weatherapp-9i0h.onrender.com/"
          h3="Weather App"
          p="Streaming App"
        />
        <ProjectCard
          src={food_delivery}
          link="https://appforfood.netlify.app/"
          h3="Food Delivery App"
          p="Streaming App"
        />
      </div>
    </section>
  );
}
