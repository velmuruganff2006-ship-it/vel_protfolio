import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./pages/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Skills from "./components/Skills"

import ParticleBackground from "./components/ParticleBackground"
import './styles/globals.css'
import './styles/responsive.css'

function App() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />

      <Contact />
    </>
  )
}

export default App
