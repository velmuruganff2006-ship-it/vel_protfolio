import { useState, useEffect } from 'react'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./pages/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"

import './styles/globals.css'
import './styles/responsive.css'

import ScrollProgress from "./components/ScrollProgress"

import ParticleBackground from "./components/ParticleBackground"

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <ParticleBackground theme={theme} />

      <ScrollProgress />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Contact />
    </>
  )
}

export default App
