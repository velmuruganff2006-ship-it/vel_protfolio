import React from "react"
// import "./Skills.css"

function Skills(){

  const skillsData = [
    { name: "HTML", level: 95 },
    { name: "CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React JS", level: 80 },
    { name: "Node JS", level: 70 },
    { name: "Git & GitHub", level: 75 }
  ]

  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>

      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div key={index} className="skill-card">
            <div className="skill-info">
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: skill.level + "%" }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
