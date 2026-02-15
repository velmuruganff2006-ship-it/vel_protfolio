import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Admin(){

  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("admin") !== "true"){
      navigate("/")
    }
  },[navigate])

  const [about,setAbout] = useState("")
  const [skills,setSkills] = useState("")
  const [contact,setContact] = useState("")

  const [projects,setProjects] = useState([])

  const [newProject,setNewProject] = useState({
    title:"",
    link:"",
    images:[],
    files:[]
  })

  // LOAD DATA
  useEffect(()=>{
    setAbout(localStorage.getItem("about") || "")
    setSkills(localStorage.getItem("skills") || "")
    setContact(localStorage.getItem("contact") || "")

    const stored = localStorage.getItem("projects")
    if(stored){
      setProjects(JSON.parse(stored))
    }
  },[])

  const handleTitleChange = (e)=>{
    setNewProject({...newProject,title:e.target.value})
  }

  const handleLinkChange = (e)=>{
    setNewProject({...newProject,link:e.target.value})
  }

  const handleImages = (e)=>{
    const selected = Array.from(e.target.files)

    selected.forEach(file=>{
      if(file.size > 2 * 1024 * 1024){
        alert("Image too large (Max 2MB)")
        return
      }

      const reader = new FileReader()
      reader.onloadend = ()=>{
        setNewProject(prev => ({
          ...prev,
          images:[...prev.images,reader.result]
        }))
      }
      reader.readAsDataURL(file)
    })
  }

  const handleFiles = (e)=>{
    const selected = Array.from(e.target.files)

    selected.forEach(file=>{
      if(file.size > 2 * 1024 * 1024){
        alert("File too large (Max 2MB)")
        return
      }

      const reader = new FileReader()
      reader.onloadend = ()=>{
        setNewProject(prev => ({
          ...prev,
          files:[...prev.files,reader.result]
        }))
      }
      reader.readAsDataURL(file)
    })
  }

  const addProject = ()=>{
    if(!newProject.title){
      alert("Enter Project Title")
      return
    }

    const projectToAdd = {
      id: Date.now(),
      title: newProject.title,
      link: newProject.link,
      images: newProject.images,
      files: newProject.files
    }

    const updated = [...projects,projectToAdd]

    setProjects(updated)
    localStorage.setItem("projects",JSON.stringify(updated))

    setNewProject({
      title:"",
      link:"",
      images:[],
      files:[]
    })

    alert("Project Added Successfully")
  }

  const deleteProject = (id)=>{
    const updated = projects.filter(p=>p.id !== id)
    setProjects(updated)
    localStorage.setItem("projects",JSON.stringify(updated))
  }

  const saveAll = ()=>{
    localStorage.setItem("about",about)
    localStorage.setItem("skills",skills)
    localStorage.setItem("contact",contact)
    alert("Profile Saved")
  }

  // 🔥 LOGOUT FUNCTION
  const handleLogout = ()=>{
    localStorage.removeItem("admin")
    navigate("/")
  }

  return(
    <div style={{padding:"40px"}}>
      <h2>Admin Dashboard</h2>

      {/* 🔥 LOGOUT BUTTON */}
      <button 
        onClick={handleLogout}
        style={{
          float:"right",
          background:"red",
          color:"white",
          padding:"6px 15px"
        }}
      >
        Logout
      </button>

      <h3>About</h3>
      <textarea
        value={about}
        onChange={(e)=>setAbout(e.target.value)}
        style={{width:"100%",height:"80px"}}
      />

      <h3>Skills</h3>
      <textarea
        value={skills}
        onChange={(e)=>setSkills(e.target.value)}
        style={{width:"100%",height:"80px"}}
      />

      <h3>Contact</h3>
      <input
        type="text"
        value={contact}
        onChange={(e)=>setContact(e.target.value)}
        style={{width:"100%"}}
      />

      <hr style={{margin:"30px 0"}}/>

      <h3>Add New Project</h3>

      <input
        type="text"
        placeholder="Project Title"
        value={newProject.title}
        onChange={handleTitleChange}
        style={{width:"100%",marginBottom:"10px"}}
      />

      <input
        type="text"
        placeholder="Project Live Link (https://...)"
        value={newProject.link}
        onChange={handleLinkChange}
        style={{width:"100%",marginBottom:"10px"}}
      />

      <p>Upload Images</p>
      <input type="file" multiple onChange={handleImages} />

      <p>Upload Files</p>
      <input type="file" multiple onChange={handleFiles} />

      <br/><br/>
      <button onClick={addProject}>Add Project</button>

      <hr style={{margin:"30px 0"}}/>

      <h3>Total Projects: {projects.length}</h3>

      {projects.map(p=>(
        <div key={p.id} style={{marginBottom:"10px"}}>
          {p.title}
          <button
            onClick={()=>deleteProject(p.id)}
            style={{marginLeft:"10px"}}
          >
            Delete
          </button>
        </div>
      ))}

      <br/><br/>

      <button
        onClick={saveAll}
        style={{
          padding:"10px 30px",
          background:"green",
          color:"white"
        }}
      >
        SAVE PROFILE
      </button>

    </div>
  )
}

export default Admin
