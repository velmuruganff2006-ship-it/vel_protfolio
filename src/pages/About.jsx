import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../animations/variants';

const PROFILE_IMAGE_STORAGE_KEY = 'portfolio-profile-image';

const About = () => {
  const skills = ['HTML', 'CSS', 'JavaScript', 'React'];
  const [profileImage, setProfileImage] = React.useState(() => {
    if (typeof window === 'undefined') {
      return '/WhatsApp Image 2026-02-09 at 9.29.04 PM.jpeg';
    }

    const storedImage = window.localStorage.getItem(PROFILE_IMAGE_STORAGE_KEY);
    return storedImage || '/WhatsApp Image 2026-02-09 at 9.29.04 PM.jpeg';
  });

  React.useEffect(() => {
    const syncProfileImage = () => {
      const storedImage = window.localStorage.getItem(PROFILE_IMAGE_STORAGE_KEY);
      setProfileImage(storedImage);
    };

    window.addEventListener('profile-image-updated', syncProfileImage);

    return () => {
      window.removeEventListener('profile-image-updated', syncProfileImage);
    };
  }, []);

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
          <motion.div variants={itemVariants} style={styles.profileCard} className="glassmorphism">
            <div style={styles.profileFrame}>
              {profileImage ? (
                <img src={profileImage} alt="Velmurugan profile" style={styles.profileImage} />
              ) : (
                <div style={styles.profileFallback}>VA</div>
              )}
            </div>
            <h3 style={styles.profileName}>VELMURUGAN A</h3>
            <p style={styles.profileRole}>Frontend Developer</p>
          </motion.div>

          <motion.div variants={itemVariants} style={styles.detailsColumn}>
            <div style={styles.textContent}>
              <p>
                I'm a passionate web designer and developer with a keen eye for creating stunning,
                interactive digital experiences. With expertise in modern technologies like React, Three.js,
                and Framer Motion, I bring ideas to life with smooth animations and beautiful UI/UX.
              </p>
              <p style={{ marginTop: '20px' }}>
                My journey in web development has been focused on combining creativity with technical excellence,
                ensuring every project is both visually appealing and functionally robust.
              </p>
            </div>

            <div style={styles.skillsBox} className="glassmorphism">
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '50px',
    alignItems: 'start',
  },
  profileCard: {
    padding: '30px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  profileFrame: {
    width: '220px',
    height: '220px',
    borderRadius: '50%',
    overflow: 'hidden',
    border: '4px solid rgba(255, 46, 99, 0.65)',
    boxShadow: '0 0 24px rgba(255, 46, 99, 0.45)',
    marginBottom: '18px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, rgba(255, 46, 99, 0.2), rgba(255, 123, 84, 0.2))',
  },
  profileImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  profileFallback: {
    fontSize: '58px',
    fontWeight: '700',
    color: '#ff7b54',
    letterSpacing: '0.04em',
  },
  profileName: {
    margin: 0,
    fontSize: '22px',
    color: 'var(--text-primary)',
  },
  profileRole: {
    marginTop: '10px',
    marginBottom: 0,
    color: 'var(--text-secondary)',
  },
  detailsColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  textContent: {
    fontSize: '16px',
    lineHeight: '1.8',
    color: 'var(--text-secondary)',
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
