import React from "react";
import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import linkedinIcon from "../../assets/linkedin-light.svg";
import githubIcon from "../../assets/github-light.svg";
import CV from "../../assets/cv.pdf";
export default function Hero() {
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="profile picture" />
      </div>
      <div className={styles.info}>
        <h1>Ruchi {/* <br /> */}Raghuwanshi</h1>
        <h2>Full Stack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/ruchi-raghuwanshi-3675a7252?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" >
          <img src={linkedinIcon} alt="Linkedin icon" /></a>
          <a href="https://github.com/Ruchiraghu?tab=repositories" target="_blank" >
          <img src={githubIcon} alt="github icon" /></a>
        </span>
        <p className={styles.description}>
          Passionate Full Stack Developer with expertise in MERN stack and Java,
          dedicated to creating dynamic web applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}
