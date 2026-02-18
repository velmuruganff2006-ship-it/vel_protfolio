import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations/variants';

const Experience = () => {
  const experiences = [
    {
      company: 'Tech Startup Inc.',
      position: 'Senior Frontend Developer',
      duration: '2022 - Present',
      description: 'Built responsive web applications using React and modern JavaScript',
    },
    {
      company: 'Digital Agency Co.',
      position: 'Frontend Developer',
      duration: '2020 - 2022',
      description: 'Developed and maintained multiple client projects with focus on UX/UI',
    },
    {
      company: 'Web Solutions Ltd.',
      position: 'Junior Developer',
      duration: '2019 - 2020',
      description: 'Worked on small to medium-scale projects and learned industry best practices',
    },
  ];

  return (
    <section id="experience" style={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.container}
      >
        <h2 style={styles.title}>Work Experience</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={styles.timeline}
        >
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              style={styles.experienceCard}
              className="glassmorphism"
              whileHover={{ x: 10 }}
            >
              <div style={styles.timelineMarker}></div>

              <div style={styles.expContent}>
                <h3 style={styles.position}>{exp.position}</h3>
                <p style={styles.company}>{exp.company}</p>
                <p style={styles.duration}>{exp.duration}</p>
                <p style={styles.description}>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    padding: '100px 50px',

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
  timeline: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  experienceCard: {
    padding: '30px',
    borderRadius: '20px',
    position: 'relative',
    paddingLeft: '60px',
  },
  timelineMarker: {
    position: 'absolute',
    left: '0',
    top: '30px',
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
    boxShadow: '0 0 20px rgba(255, 46, 99, 0.6)',
  },
  expContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  position: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#ff7b54',
  },
  company: {
    fontSize: '16px',
    color: '#ff2e63',
    fontWeight: '600',
  },
  duration: {
    fontSize: '13px',
    color: 'var(--text-secondary)',
  },
  description: {
    fontSize: '14px',
    lineHeight: '1.6',
    color: 'var(--text-secondary)',
    marginTop: '10px',
  },
};

export default Experience;
