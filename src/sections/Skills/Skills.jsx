import React from "react";
import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-light.svg";
import SkillsList from "../../common/SkillsList";

export default function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="CSS" />
        <SkillsList src={checkMarkIcon} skill="HTML" />
        <SkillsList src={checkMarkIcon} skill="Bootstrap" />
        <SkillsList src={checkMarkIcon} skill="Express" />
        <SkillsList src={checkMarkIcon} skill="JavaScript" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="Node JS" />
        <SkillsList src={checkMarkIcon} skill="React JS" />
        <SkillsList src={checkMarkIcon} skill="Git" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="Java" />
        <SkillsList src={checkMarkIcon} skill="Python" />
        <SkillsList src={checkMarkIcon} skill="c++" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill="MongoDB" />
        <SkillsList src={checkMarkIcon} skill="PostgreSQL" />
      </div>
    </section>
  );
}
