import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skillsData = [
    { name: "HTML", level: 95, color: "#ff9f68" },
    { name: "CSS", level: 92, color: "#00d1ff" },
    { name: "JavaScript", level: 90, color: "#ffe066" },
    { name: "React", level: 88, color: "#7bdcff" },
  ];

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.orbTop} />
      <div style={styles.orbBottom} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true, amount: 0.2 }}
        style={styles.container}
      >
        <p style={styles.eyebrow}>Skills</p>
        <h2 style={styles.title}>Frontend Developer</h2>
        <p style={styles.subtitle}>HTML, CSS, JavaScript, React</p>

        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          style={styles.skillList}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={rowVariants}
              whileHover={{ x: 8 }}
              style={styles.skillRow}
            >
              <div style={{ ...styles.skillNumber, borderColor: skill.color, color: skill.color }}>
                {String(index + 1).padStart(2, "0")}
              </div>

              <div style={styles.skillContent}>
                <div style={styles.skillInfo}>
                  <span style={styles.skillName}>{skill.name}</span>
                  <span style={{ ...styles.skillLevel, color: skill.color }}>{skill.level}%</span>
                </div>

                <div style={styles.progressTrack}>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, amount: 0.7 }}
                    transition={{ duration: 1, delay: index * 0.12, ease: "easeOut" }}
                    style={{
                      ...styles.progressFill,
                      background: `linear-gradient(90deg, ${skill.color} 0%, #ff2e63 100%)`,
                    }}
                  />
                </div>
              </div>
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
    padding: "100px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  container: {
    maxWidth: "860px",
    width: "100%",
    margin: "0 auto",
    padding: "40px 24px",
    borderRadius: "28px",
    border: "1px solid rgba(255, 255, 255, 0.16)",
    background: "linear-gradient(160deg, rgba(255, 46, 99, 0.08), rgba(255, 255, 255, 0.02))",
    backdropFilter: "blur(10px)",
    zIndex: 1,
  },
  orbTop: {
    position: "absolute",
    top: "-160px",
    right: "-120px",
    width: "340px",
    height: "340px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(255, 123, 84, 0.3), rgba(255, 123, 84, 0))",
    filter: "blur(4px)",
  },
  orbBottom: {
    position: "absolute",
    bottom: "-180px",
    left: "-120px",
    width: "360px",
    height: "360px",
    borderRadius: "50%",
    background: "radial-gradient(circle, rgba(0, 209, 255, 0.26), rgba(0, 209, 255, 0))",
    filter: "blur(4px)",
  },
  eyebrow: {
    color: "#9eb0ff",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    fontSize: "12px",
    marginBottom: "14px",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(30px, 5vw, 48px)",
    marginBottom: "10px",
    textAlign: "center",
    color: "#f6f7ff",
    lineHeight: 1.1,
  },
  subtitle: {
    textAlign: "center",
    color: "rgba(230, 236, 255, 0.72)",
    fontSize: "clamp(14px, 2vw, 17px)",
    marginBottom: "36px",
  },
  skillList: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  skillRow: {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "16px",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.14)",
    background: "linear-gradient(120deg, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))",
  },
  skillNumber: {
    width: "48px",
    minWidth: "48px",
    height: "48px",
    borderRadius: "12px",
    border: "1px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "700",
    fontSize: "14px",
    background: "rgba(8, 10, 26, 0.7)",
  },
  skillContent: {
    width: "100%",
  },
  skillInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "baseline",
    width: "100%",
    marginBottom: "10px",
  },
  skillName: {
    fontSize: "clamp(16px, 2.6vw, 20px)",
    fontWeight: "700",
    color: "#ffffff",
    letterSpacing: "0.02em",
  },
  skillLevel: {
    fontSize: "14px",
    fontWeight: "700",
  },
  progressTrack: {
    width: "100%",
    height: "8px",
    borderRadius: "999px",
    background: "rgba(255, 255, 255, 0.12)",
    overflow: "hidden",
  },
  progressFill: {
    height: "100%",
    borderRadius: "999px",
    boxShadow: "0 0 18px rgba(255, 46, 99, 0.55)",
  },
};

export default Skills
