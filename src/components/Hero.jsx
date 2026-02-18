import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, buttonVariants } from '../animations/variants';
import Scene3D from './Scene3D';

const Hero = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
      },
    }),
  };

  const text = 'I\'m a Web Designer';
  const description =
    'Crafting beautiful, interactive, and modern digital experiences with cutting-edge technologies.';

  return (
    <section id="home" style={styles.hero}>
      <div style={styles.heroContent}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.greeting}
        >
          <h1>
            Hi, It's <span className="gradient-text">Alex</span>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={styles.titleContainer}
        >
          <h2>
            {text.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterVariants}
                style={{ display: 'inline-block' }}
              >
                {char}
              </motion.span>
            ))}
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={styles.description}
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={styles.socialIcons}
        >
          {['LinkedIn', 'GitHub', 'Instagram', 'Twitter', 'YouTube'].map(
            (icon) => (
              <motion.a
                key={icon}
                href="#"
                variants={itemVariants}
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                style={styles.socialIcon}
                title={icon}
              >
                <span style={{ fontSize: '20px' }}>⚡</span>
              </motion.a>
            )
          )}
        </motion.div>

        <motion.a
          href="#contact"
          variants={buttonVariants}
          whileHover="whileHover"
          whileTap="whileTap"
          style={styles.hireButton}
          onClick={(e) => {
            e.preventDefault();
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}
        >
          Hire Me
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={styles.scene3D}
      >
        <Scene3D />
      </motion.div>
    </section>
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '100px 50px 50px',
    background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
    overflow: 'hidden',
    marginTop: '80px',
  },
  heroContent: {
    flex: 1,
    zIndex: 10,
    maxWidth: '600px',
  },
  greeting: {
    marginBottom: '20px',
  },
  titleContainer: {
    marginBottom: '30px',
  },
  description: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: '#b0b0b0',
    marginBottom: '40px',
    maxWidth: '500px',
  },
  socialIcons: {
    display: 'flex',
    gap: '20px',
    marginBottom: '40px',
    flexWrap: 'wrap',
  },
  socialIcon: {
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    background: 'rgba(255, 46, 99, 0.1)',
    border: '2px solid rgba(255, 46, 99, 0.3)',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
    color: '#ff2e63',
  },
  hireButton: {
    padding: '15px 40px',
    background: 'linear-gradient(135deg, #ff2e63 0%, #ff7b54 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    boxShadow: '0 0 30px rgba(255, 46, 99, 0.5)',
    transition: 'all 0.3s ease',
  },
  scene3D: {
    flex: 1,
    height: '500px',
    width: '100%',
    minHeight: '400px',
  },
};

export default Hero
