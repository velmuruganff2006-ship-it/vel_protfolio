import React from "react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "../animations/variants";

function Skills(){
  const skillsData = [
    { name: "React JS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "Three.js", level: 85 },
    { name: "Framer Motion", level: 88 },
    { name: "Node JS", level: 80 },
    { name: "MongoDB", level: 82 }
  ];

  return (
    <section id="skills" style={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.container}
      >
        <h2 style={styles.title}>Skills & Expertise</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={styles.skillsGrid}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={styles.skillCard}
              className="glassmorphism"
              whileHover={{ y: -10 }}
            >
              <div style={styles.skillInfo}>
                <span style={styles.skillName}>{skill.name}</span>
                <span style={styles.skillLevel}>{skill.level}%</span>
              </div>

              <svg style={styles.progressRing} viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" style={styles.progressBg} />
                <motion.circle
                  cx="50"
                  cy="50"
                  r="45"
                  style={{
                    ...styles.progressFill,
                    strokeDasharray: 283,
                    strokeDashoffset: 283 - (283 * skill.level) / 100,
                  }}
                  initial={{ strokeDashoffset: 283 }}
                  whileInView={{
                    strokeDashoffset: 283 - (283 * skill.level) / 100,
                  }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
              </svg>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: "100vh",
    padding: "100px 50px",
    background: "linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)",
    display: "flex",
    alignItems: "center",
  },
  container: {
    maxWidth: "1200px",
    width: "100%",
    margin: "0 auto",
  },
  title: {
    fontSize: "48px",
    marginBottom: "60px",
    textAlign: "center",
  },
  skillsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "30px",
  },
  skillCard: {
    padding: "30px 20px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    minHeight: "250px",
  },
  skillInfo: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: "20px",
  },
  skillName: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#ff7b54",
  },
  skillLevel: {
    fontSize: "14px",
    color: "#ff2e63",
    fontWeight: "600",
  },
  progressRing: {
    width: "120px",
    height: "120px",
    transform: "rotate(-90deg)",
  },
  progressBg: {
    stroke: "rgba(255, 46, 99, 0.1)",
    fill: "none",
    strokeWidth: "3",
  },
  progressFill: {
    stroke: "url(#gradient)",
    fill: "none",
    strokeWidth: "3",
    strokeLinecap: "round",
    transition: "stroke-dashoffset 1.5s ease",
  },
};

export default Skills