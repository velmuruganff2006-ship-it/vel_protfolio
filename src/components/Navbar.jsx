import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { navLinkVariants, buttonVariants } from '../animations/variants';

const Navbar = () => {
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
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.logo}
      >
        <span style={{ ...styles.logoText, fontSize: '28px', fontWeight: 'bold' }}>
          <span className="gradient-text">Alex</span>
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
          <motion.a
            key={item}
            href={`#${item.toLowerCase()}`}
            custom={i}
            variants={navLinkVariants}
            whileHover={{ scale: 1.1, color: '#ff2e63' }}
            onClick={() => setIsActive(item.toLowerCase())}
            style={{
              ...styles.navLink,
              color:
                isActive === item.toLowerCase() ? '#ff2e63' : '#e0e0e0',
              textDecoration:
                isActive === item.toLowerCase() ? 'underline' : 'none',
            }}
          >
            {item}
          </motion.a>
        ))}
      </motion.div>

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
    background: 'rgba(10, 14, 39, 0.8)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(255, 46, 99, 0.2)',
    zIndex: 1000,
    height: '80px',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  logoText: {
    color: '#e0e0e0',
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
    background: 'linear-gradient(135deg, #ff2e63 0%, #ff7b54 100%)',
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
    background: 'rgba(10, 14, 39, 0.95)',
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    gap: '15px',
    backdropFilter: 'blur(10px)',
  },
  mobileNavLink: {
    textDecoration: 'none',
    color: '#e0e0e0',
    fontSize: '16px',
    padding: '10px',
    borderRadius: '8px',
    cursor: 'pointer',
  },
};

export default Navbar
