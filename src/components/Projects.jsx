import { motion } from "framer-motion";
import { containerVariants, cardVariants } from "../animations/variants";

function Projects(){
  const projectsData = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "🛍️",
      tech: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "3D Portfolio Website",
      description: "Interactive portfolio with Three.js and Framer Motion animations",
      image: "🎨",
      tech: ["React", "Three.js", "Framer Motion"],
      link: "#"
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Real-time messaging app with Socket.io and React",
      image: "💬",
      tech: ["React", "Socket.io", "Node.js"],
      link: "#"
    },
    {
      id: 4,
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with charts and graphs",
      image: "📊",
      tech: ["React", "Chart.js", "Tailwind"],
      link: "#"
    },
    {
      id: 5,
      title: "Mobile Weather App",
      description: "Real-time weather app with geolocation and animations",
      image: "⛅",
      tech: ["React Native", "API", "Geolocation"],
      link: "#"
    },
    {
      id: 6,
      title: "AI Content Generator",
      description: "AI-powered content generation tool with modern UI",
      image: "🤖",
      tech: ["React", "OpenAI", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <section id="projects" style={styles.section}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        style={styles.container}
      >
        <h2 style={styles.title}>Featured Projects</h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={styles.projectsGrid}
        >
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              custom={index}
              style={styles.projectCard}
              className="glassmorphism"
              whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(255, 46, 99, 0.3)" }}
            >
              <div style={styles.projectImage}>{project.image}</div>
              
              <h3 style={styles.projectTitle}>{project.title}</h3>
              
              <p style={styles.projectDescription}>{project.description}</p>
              
              <div style={styles.techStack}>
                {project.tech.map((tech) => (
                  <span key={tech} style={styles.techTag}>{tech}</span>
                ))}
              </div>

              <motion.a
                href={project.link}
                style={styles.projectLink}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project →
              </motion.a>
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
    background: "linear-gradient(135deg, #0a0e27 0%, #1a1633 100%)",
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
  projectsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
  },
  projectCard: {
    padding: "30px",
    borderRadius: "20px",
    display: "flex",
    flexDirection: "column",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
  projectImage: {
    fontSize: "64px",
    marginBottom: "20px",
    textAlign: "center",
  },
  projectTitle: {
    fontSize: "22px",
    fontWeight: "700",
    marginBottom: "15px",
    color: "#ff7b54",
  },
  projectDescription: {
    fontSize: "14px",
    lineHeight: "1.6",
    color: "#b0b0b0",
    marginBottom: "20px",
    flex: 1,
  },
  techStack: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "20px",
  },
  techTag: {
    padding: "6px 12px",
    background: "rgba(255, 46, 99, 0.15)",
    border: "1px solid rgba(255, 46, 99, 0.3)",
    borderRadius: "20px",
    fontSize: "12px",
    color: "#ff2e63",
  },
  projectLink: {
    color: "#ff7b54",
    textDecoration: "none",
    fontWeight: "600",
    marginTop: "15px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};

export default Projects
