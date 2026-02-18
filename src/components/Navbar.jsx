import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { navLinkVariants, buttonVariants } from '../animations/variants';
import MagneticButton from './MagneticButton';
import ThemeToggle from './ThemeToggle';

const Navbar = ({ theme, toggleTheme }) => {
  const [isActive, setIsActive] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <nav className="navbar" style={styles.navbar}>
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.1 }}
        style={styles.logo}
      >
        <span style={{ ...styles.logoText, fontWeight: 'bold' }} className="logo-text">
          {Array.from("VELMURUGAN A").map((char, index) => (
            <motion.span
              key={index}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 }
              }}
              style={{ display: "inline-block" }}
              className="gradient-text"
            >
              {char === " " ? "\u00A0" : char}
            </motion.span>
          ))}
        </span>
      </motion.div>

      {/* Desktop Menu */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={styles.navLinks}
        className="desktop-nav"
      >
        {navItems.map((item, i) => (
          <MagneticButton key={item} style={{ display: 'inline-block' }}>
            <motion.a
              href={`#${item.toLowerCase()}`}
              custom={i}
              variants={navLinkVariants}
              whileHover={{ scale: 1.1, color: 'var(--accent-primary)' }}
              onClick={() => setIsActive(item.toLowerCase())}
              style={{
                ...styles.navLink,
                color:
                  isActive === item.toLowerCase() ? 'var(--accent-primary)' : 'var(--text-primary)',
                textDecoration:
                  isActive === item.toLowerCase() ? 'underline' : 'none',
                display: 'inline-block',
              }}
            >
              {item}
            </motion.a>
          </MagneticButton>
        ))}
      </motion.div>



      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

      {/* Hire Me Button */}
      <motion.a
        href="#contact"
        variants={buttonVariants}
        whileHover="whileHover"
        whileTap="whileTap"
        style={styles.hireButton}
        className="hire-btn"
        onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      >
        Hire Me
      </motion.a>

      {/* Mobile Menu Button */}
      <motion.button
        className="mobile-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={styles.mobileMenuBtn}
        whileTap={{ scale: 0.9 }}
      >
        <span></span>
        <span></span>
        <span></span>
      </motion.button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          style={styles.mobileMenu}
        >
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => {
                setIsActive(item.toLowerCase());
                setMobileMenuOpen(false);
              }}
              whileHover={{ scale: 1.05 }}
              style={styles.mobileNavLink}
            >
              {item}
            </motion.a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const styles = {
  navbar: {
    position: 'fixed',
    top: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 50px',
    background: 'var(--nav-bg)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--nav-border)',
    zIndex: 1000,
    height: '80px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  logoText: {
    color: 'var(--text-primary)',
  },
  navLinks: {
    display: 'flex',
    gap: '40px',
    flex: 1,
    justifyContent: 'center',
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '16px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  hireButton: {
    padding: '12px 30px',
    background: 'linear-gradient(135deg, var(--accent-primary) 0%, var(--accent-secondary) 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '600',
    boxShadow: '0 0 20px rgba(255, 46, 99, 0.3)',
    transition: 'all 0.3s ease',
  },
  mobileMenuBtn: {
    display: 'none',
    flexDirection: 'column',
    gap: '5px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1001,
  },
  mobileMenu: {
    position: 'absolute',
    top: '80px',
    right: 0,
    width: '100%',
    background: 'var(--nav-bg)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    gap: '15px',
    backdropFilter: 'blur(10px)',
  },
  mobileNavLink: {
    textDecoration: 'none',
    color: 'var(--text-primary)',
    fontSize: '16px',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Navbar
