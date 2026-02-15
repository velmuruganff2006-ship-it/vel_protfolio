function About(){
  const about = localStorage.getItem("about") || 
  "Default About Content"

  return(
    <section id="about">
      <h2>About</h2>
      <p>{about}</p>
    </section>
  )
}

export default About
