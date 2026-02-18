import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants, buttonVariants } from '../animations/variants';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log(formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const contactMethods = [
    { icon: '✉️', label: 'Email', value: 'velmuruganff2006@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+91 9715733850' },
    { icon: '📍', label: 'Location', value: 'vaiyappamalai' },
  ];

  return (
    <section id="contact" style={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.container}
      >
        <h2 style={styles.title}>Get In Touch</h2>

        <div style={styles.content} className="content">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={styles.contactInfo}
          >
            <h3 style={styles.subtitle}>Let's Connect</h3>
            <p style={styles.description}>
              I'm always open to new projects and opportunities. Feel free to reach out!
            </p>

            <div style={styles.methodsList}>
              {contactMethods.map((method, i) => (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  style={styles.method}
                  className="method"
                >
                  <span style={styles.methodIcon}>{method.icon}</span>
                  <div>
                    <p style={styles.methodLabel}>{method.label}</p>
                    <p style={styles.methodValue}>{method.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            style={styles.form}
            className="glassmorphism form"
          >
            <motion.div variants={itemVariants} style={styles.formGroup}>
              <label style={styles.label} className="label">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                style={styles.input}
                className="input"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants} style={styles.formGroup}>
              <label style={styles.label} className="label">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                style={styles.input}
                className="input"
                required
              />
            </motion.div>

            <motion.div variants={itemVariants} style={styles.formGroup}>
              <label style={styles.label} className="label">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message here..."
                style={{ ...styles.input, minHeight: '150px', resize: 'none' }}
                className="input"
                required
              ></textarea>
            </motion.div>

            <motion.button
              type="submit"
              variants={buttonVariants}
              whileHover="whileHover"
              whileTap="whileTap"
              style={styles.submitButton}
              className="submit-button"
            >
              Send Message
            </motion.button>

            {submitted && (
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={styles.successMessage}
              >
                ✓ Message sent successfully!
              </motion.p>
            )}
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    padding: '100px 50px',
    display: 'flex',
    alignItems: 'center',
  },
  container: {
    maxWidth: '1200px',
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
    alignItems: 'start',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px',
  },
  subtitle: {
    fontSize: '28px',
    color: '#ff7b54',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
  },
  methodsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  method: {
    display: 'flex',
    gap: '15px',
    alignItems: 'flex-start',
  },
  methodIcon: {
    fontSize: '32px',
  },
  methodLabel: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    margin: '0 0 5px 0',
  },
  methodValue: {
    fontSize: '16px',
    color: '#ff2e63',
    fontWeight: '600',
    margin: 0,
  },
  form: {
    padding: '40px',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#ff7b54',
  },
  input: {
    padding: '12px 15px',
    background: 'var(--card-bg)',
    border: '1px solid var(--nav-border)',
    borderRadius: '10px',
    color: 'var(--text-primary)',
    fontSize: '14px',
    fontFamily: 'inherit',
    transition: 'all 0.3s ease',
    outline: 'none',
  },
  submitButton: {
    padding: '15px 30px',
    background: 'linear-gradient(135deg, #ff2e63 0%, #ff7b54 100%)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    marginTop: '10px',
  },
  successMessage: {
    color: '#4ade80',
    textAlign: 'center',
    fontSize: '14px',
    fontWeight: '600',
  },
};

export default Contact
