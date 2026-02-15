import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations/variants';

const About = () => {
  const skills = ['React', 'JavaScript', 'Node.js', 'MongoDB', 'Three.js', 'Framer Motion'];

  return (
    <section id="about" style={styles.about}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.container}
      >
        <h2 style={styles.title}>About Me</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={styles.content}
        >
          <motion.div variants={itemVariants} style={styles.textContent}>
            <p>
              I'm a passionate web designer and developer with a keen eye for creating stunning, 
              interactive digital experiences. With expertise in modern technologies like React, Three.js, 
              and Framer Motion, I bring ideas to life with smooth animations and beautiful UI/UX.
            </p>
            <p style={{ marginTop: '20px' }}>
              My journey in web development has been focused on combining creativity with technical excellence, 
              ensuring every project is both visually appealing and functionally robust.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} style={styles.skillsBox} className="glassmorphism">
            <h3>Tech Stack</h3>
            <div style={styles.skillsList}>
              {skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  style={styles.skillTag}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

const styles = {
  about: {
    minHeight: '100vh',
    padding: '100px 50px',
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1633 100%)',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1000px',
    width: '100%',
    margin: '0 auto',
  },
  title: {
    fontSize: '48px',
    marginBottom: '60px',
    textAlign: 'center',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    alignItems: 'center',
  },
  textContent: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#b0b0b0',
  },
  skillsBox: {
    padding: '30px',
    borderRadius: '20px',
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    marginTop: '20px',
  },
  skillTag: {
    padding: '10px 20px',
    background: 'linear-gradient(135deg, rgba(255, 46, 99, 0.2) 0%, rgba(255, 123, 84, 0.2) 100%)',
    border: '1px solid rgba(255, 46, 99, 0.3)',
    borderRadius: '30px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#ff7b54',
  },
};

export default About;
