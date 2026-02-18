import React from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, buttonVariants } from '../animations/variants';
import Scene3D from './Scene3D';
import ProfileAvatar from './ProfileAvatar';
import MagneticButton from './MagneticButton';

const PROFILE_IMAGE_STORAGE_KEY = 'portfolio-profile-image';

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

  const [profileImage, setProfileImage] = React.useState(() => {
    if (typeof window === 'undefined') {
      return '/WhatsApp Image 2026-02-09 at 9.29.04 PM.jpeg';
    }

    const storedImage = window.localStorage.getItem(PROFILE_IMAGE_STORAGE_KEY);
    return storedImage || '/WhatsApp Image 2026-02-09 at 9.29.04 PM.jpeg';
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result !== 'string') {
          return;
        }

        setProfileImage(reader.result);
        try {
          window.localStorage.setItem(PROFILE_IMAGE_STORAGE_KEY, reader.result);
          window.dispatchEvent(new Event('profile-image-updated'));
        } catch (error) {
          console.error('Failed to store profile image:', error);
        }
      };
      reader.readAsDataURL(file);
    }

    e.target.value = '';
  };

  const text = 'I\'m a';
  const description =
    'Crafting beautiful, interactive, and modern digital experiences with cutting-edge technologies.';
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/cherry-velmurugan-5655b234b/',
      icon: 'linkedin',
      color: '#0a66c2',
      border: 'rgba(10, 102, 194, 0.55)',
      background: 'rgba(10, 102, 194, 0.14)',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/its_cherry_05_/',
      icon: 'instagram',
      color: '#f04ba5',
      border: 'rgba(240, 75, 165, 0.55)',
      background: 'rgba(240, 75, 165, 0.14)',
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/feed/you',
      icon: 'youtube',
      color: '#ff0000',
      border: 'rgba(255, 0, 0, 0.55)',
      background: 'rgba(255, 0, 0, 0.14)',
    },
  ];

  const renderSocialIcon = (icon) => {
    if (icon === 'linkedin') {
      return (
        <svg viewBox="0 0 24 24" style={styles.socialSvg} aria-hidden="true">
          <path fill="currentColor" d="M6.4 8.7A2.1 2.1 0 1 0 6.4 4.5a2.1 2.1 0 0 0 0 4.2zM4.6 10h3.5v9.6H4.6V10zm5.6 0h3.3v1.3h.1c.5-.9 1.6-1.6 3.3-1.6 3.5 0 4.1 2.3 4.1 5.3v4.6h-3.5v-4.1c0-1 0-2.2-1.4-2.2s-1.6 1-1.6 2.1v4.2h-3.5V10z" />
        </svg>
      );
    }

    if (icon === 'instagram') {
      return (
        <svg viewBox="0 0 24 24" style={styles.socialSvg} aria-hidden="true">
          <rect x="4.5" y="4.5" width="15" height="15" rx="4.2" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.9" />
          <circle cx="12" cy="12" r="3.6" fill="none" stroke="currentColor" strokeWidth="1.9" />
          <circle cx="16.9" cy="7.2" r="1.1" fill="currentColor" />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 24 24" style={styles.socialSvg} aria-hidden="true">
        <path fill="currentColor" d="M21 8.3a2.7 2.7 0 0 0-1.9-1.9c-1.7-.4-8.4-.4-8.4-.4s-6.7 0-8.4.4A2.7 2.7 0 0 0 .4 8.3 28 28 0 0 0 0 12a28 28 0 0 0 .4 3.7 2.7 2.7 0 0 0 1.9 1.9c1.7.4 8.4.4 8.4.4s6.7 0 8.4-.4a2.7 2.7 0 0 0 1.9-1.9 28 28 0 0 0 .4-3.7 28 28 0 0 0-.4-3.7zM9.4 14.9V9.1l5 2.9-5 2.9z" />
      </svg>
    );
  };

  // Typewriter effect logic
  const [textIndex, setTextIndex] = React.useState(0);
  const words = ["Web Designer", "Frontend Developer", "UI/UX Enthusiast", "Full Stack Developer"];
  const [subText, setSubText] = React.useState('');
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const typeSpeed = isDeleting ? 100 : 200;
    const currentWord = words[textIndex % words.length];

    const typer = setTimeout(() => {
      setSubText(
        isDeleting
          ? currentWord.substring(0, subText.length - 1)
          : currentWord.substring(0, subText.length + 1)
      );

      if (!isDeleting && subText === currentWord) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && subText === '') {
        setIsDeleting(false);
        setTextIndex(prev => prev + 1);
      }
    }, typeSpeed);

    return () => clearTimeout(typer);
  }, [subText, isDeleting, textIndex]);

  return (
    <section id="home" style={styles.hero} className="hero">
      <div style={styles.heroContent} className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.greeting}
          className="greeting"
        >
          <h1>
            <span className="gradient-text hero-name">VELMURUGAN A</span>
          </h1>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={styles.titleContainer}
          className="title-container"
        >
          <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }} className="hero-subtitle">
            <span>{text}</span>
            <span style={{ color: 'var(--accent-primary)', minWidth: '300px' }} className="typewriter-wrapper">
              {subText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                style={{ marginLeft: '2px', borderRight: '3px solid var(--accent-primary)' }}
              />
            </span>
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          style={styles.description}
          className="description"
        >
          {description}
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          style={styles.socialIcons}
          className="social-icons"
        >
          {socialLinks.map((icon) => (
            <MagneticButton key={icon.name}>
              <motion.a
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  ...styles.socialIcon,
                  color: icon.color,
                  borderColor: icon.border,
                  background: icon.background,
                }}
                title={icon.name}
                aria-label={icon.name}
              >
                {renderSocialIcon(icon.icon)}
              </motion.a>
            </MagneticButton>
          ))}
        </motion.div>

        <MagneticButton>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={styles.hireButton}
            className="hire-button"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
          >
            Hire Me
          </motion.a>
        </MagneticButton>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: 50 }}
        animate={{
          opacity: 1,
          scale: 1,
          x: 0,
          y: [0, -20, 0] // Floating effect
        }}
        transition={{
          y: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          },
          default: {
            duration: 0.8,
            ease: "easeOut"
          }
        }}
        style={styles.imageContainer}
      >
        {profileImage ? (
          <div style={styles.uploadedImageWrapper}>
            <img src={profileImage} alt="Profile" style={styles.uploadedImage} />

          </div>
        ) : (
          <div style={{ position: 'relative' }}>
            <ProfileAvatar />
            {/* Show Add Photo button only in Dev mode (localhost) */}
            {window.location.hostname === 'localhost' && (
              <label htmlFor="photo-upload" style={styles.addPhotoButton}>
                + Add Photo
              </label>
            )}
          </div>
        )}
        <input
          type="file"
          id="photo-upload"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
        />
      </motion.div>
    </section >
  );
};

const styles = {
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '100px 50px 50px',
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
    color: 'var(--text-secondary)',
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
    border: '2px solid',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none',
  },
  socialSvg: {
    width: '22px',
    height: '22px',
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
  imageContainer: {
    flex: 1,
    height: '500px',
    width: '100%',
    minHeight: '400px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  uploadedImageWrapper: {
    width: '350px',
    height: '350px',
    borderRadius: '50%',
    overflow: 'hidden',
    position: 'relative',
    border: '4px solid #ff2e63',
    boxShadow: '0 0 30px rgba(255, 46, 99, 0.5)',
  },
  uploadedImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  addPhotoButton: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'linear-gradient(135deg, #ff2e63 0%, #ff7b54 100%)',
    color: 'white',
    padding: '10px 20px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '14px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
    zIndex: 10,
    transition: 'transform 0.2s',
    whiteSpace: 'nowrap',
  },
  changePhotoButton: {
    position: 'absolute',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0,0,0,0.6)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    cursor: 'pointer',
    fontSize: '12px',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255,255,255,0.3)',
    whiteSpace: 'nowrap',
  },
};

export default Hero;
