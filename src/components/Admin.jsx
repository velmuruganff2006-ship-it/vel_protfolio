import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

function Admin(){

  const navigate = useNavigate()

  useEffect(()=>{
    if(localStorage.getItem("admin") !== "true"){
      navigate("/")
    }
  },[navigate])

  // 🔥 SECTION STATE
  const [activeSection,setActiveSection] = useState("profile")

  const [displayName,setDisplayName] = useState("Velu")
  const [profileImage,setProfileImage] = useState("")

  const [aboutTitle,setAboutTitle] = useState("Passion Fuelling Innovation")
  const [aboutDesc,setAboutDesc] = useState("")
  const [yearsExp,setYearsExp] = useState("5+")
  const [projectsDone,setProjectsDone] = useState("50+")

  // 🔥 PROJECT STATE
  const [projectTitle,setProjectTitle] = useState("")
  const [projectDesc,setProjectDesc] = useState("")
  const [projects,setProjects] = useState([])
  const [contactEmail,setContactEmail] = useState("velu@email.com")
  const [contactPhone,setContactPhone] = useState("+91 98765 43210")
  const [contactLocation,setContactLocation] = useState("Chennai, India")

  const handleImageUpload = (e)=>{
    const file = e.target.files[0]
    if(!file) return

    const reader = new FileReader()
    reader.onloadend = ()=>{
      setProfileImage(reader.result)
    }
    reader.readAsDataURL(file)
  }

  const handleLogout = ()=>{
    localStorage.removeItem("admin")
    navigate("/")
  }

  const addProject = ()=>{
    if(!projectTitle) return alert("Enter Project Title")

    const newProject = {
      id: Date.now(),
      title: projectTitle,
      desc: projectDesc
    }

    setProjects([...projects,newProject])
    setProjectTitle("")
    setProjectDesc("")
  }

  const deleteProject = (id)=>{
    setProjects(projects.filter(p=>p.id !== id))
  }

  return(
    <div style={styles.wrapper}>

      <div style={styles.topBar}>
        <h2 style={{color:"#ff4d4d"}}>VELMURUGAN A</h2>
        <button style={styles.updateBtn}>
          UPDATE LIVE SITE
        </button>
      </div>

      <div style={styles.content}>

        <div style={styles.sidebar}>

          <button 
            style={activeSection==="profile"?styles.activeBtn:styles.sideBtn}
            onClick={()=>setActiveSection("profile")}
          >
            Profile
          </button>

          <button 
            style={activeSection==="about"?styles.activeBtn:styles.sideBtn}
            onClick={()=>setActiveSection("about")}
          >
            About
          </button>

          <button 
            style={activeSection==="skills"?styles.activeBtn:styles.sideBtn}
            onClick={()=>setActiveSection("skills")}
          >
            Skills
          </button>

          {/* ✅ PROJECT BUTTON WORKING */}
          <button 
            style={activeSection==="projects"?styles.activeBtn:styles.sideBtn}
            onClick={()=>setActiveSection("projects")}
          >
            Projects
          </button>

          <button
            style={activeSection==="contact"?styles.activeBtn:styles.sideBtn}
            onClick={()=>setActiveSection("contact")}
          >
            Contact
          </button>

          <button style={styles.logoutBtn} onClick={handleLogout}>
            Logout
          </button>
        </div>

        <div style={styles.mainCard}>

          {/* PROFILE */}
          {activeSection==="profile" && (
            <div style={styles.card}>
              <div style={styles.imageSection}>
                <img
                  src={profileImage || "https://i.pravatar.cc/200"}
                  alt="profile"
                  style={styles.profileImage}
                />

                <label style={styles.uploadBtn}>
                  UPLOAD NEW PHOTO
                  <input type="file" hidden onChange={handleImageUpload}/>
                </label>
              </div>

              <div style={{flex:1}}>
                <h3>PRIMARY IDENTITY</h3>

                <label style={styles.label}>DISPLAY NAME</label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e)=>setDisplayName(e.target.value)}
                  style={styles.input}
                />
              </div>
            </div>
          )}

          {/* ABOUT */}
          {activeSection==="about" && (
            <div style={styles.cardColumn}>
              <h3>HERO ABOUT TITLE</h3>
              <input
                value={aboutTitle}
                onChange={(e)=>setAboutTitle(e.target.value)}
                style={styles.input}
              />

              <h3 style={{marginTop:"30px"}}>DETAILED DESCRIPTION</h3>
              <textarea
                value={aboutDesc}
                onChange={(e)=>setAboutDesc(e.target.value)}
                style={styles.textarea}
              />

              <div style={styles.statsRow}>
                <div style={styles.statBox}>
                  <label>YEARS EXP.</label>
                  <input
                    value={yearsExp}
                    onChange={(e)=>setYearsExp(e.target.value)}
                    style={styles.input}
                  />
                </div>

                <div style={styles.statBox}>
                  <label>PROJECTS DONE</label>
                  <input
                    value={projectsDone}
                    onChange={(e)=>setProjectsDone(e.target.value)}
                    style={styles.input}
                  />
                </div>
              </div>
            </div>
          )}

          {/* SKILLS */}
          {activeSection==="skills" && (
            <div style={styles.cardColumn}>
              <h3>SKILLS MANAGEMENT</h3>
              <button style={styles.techBtn}>TECHNOLOGY STACK</button>
              <div style={{marginTop:"25px"}}>
                <button style={styles.addCategoryBtn}>
                  + ADD CATEGORY
                </button>
              </div>
            </div>
          )}

          {/* ✅ PROJECTS SECTION ADDED */}
          {activeSection==="projects" && (
            <div style={styles.cardColumn}>

              <h3 style={{marginBottom:"20px"}}>PROJECT MANAGEMENT</h3>

              <input
                placeholder="Project Title"
                value={projectTitle}
                onChange={(e)=>setProjectTitle(e.target.value)}
                style={styles.input}
              />

              <textarea
                placeholder="Project Description"
                value={projectDesc}
                onChange={(e)=>setProjectDesc(e.target.value)}
                style={{...styles.textarea, marginTop:"15px"}}
              />

              <button 
                style={{...styles.techBtn, marginTop:"20px"}}
                onClick={addProject}
              >
                + ADD PROJECT
              </button>

              <div style={{marginTop:"40px"}}>
                {projects.map(p=>(
                  <div key={p.id} style={styles.projectCard}>
                    <div>
                      <h4>{p.title}</h4>
                      <p style={{color:"#aaa"}}>{p.desc}</p>
                    </div>

                    <button
                      style={styles.deleteBtn}
                      onClick={()=>deleteProject(p.id)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>

            </div>
          )}

          {activeSection==="contact" && (
            <div style={styles.cardColumn}>

              <h3 style={{marginBottom:"30px"}}>CONTACT MANAGEMENT</h3>

              <div style={styles.contactWrapper}>
                <div style={styles.contactLeft}>
                  <h2 style={{color:"#ff7b54"}}>Let's Connect</h2>

                  <p style={{marginTop:"20px",color:"#aaa"}}>
                    I'm always open to new projects and opportunities.
                  </p>

                  <div style={{marginTop:"30px"}}>
                    <p style={{color:"#ff4d4d"}}>Email</p>
                    <p>{contactEmail}</p>

                    <p style={{color:"#ff4d4d",marginTop:"15px"}}>Phone</p>
                    <p>{contactPhone}</p>

                    <p style={{color:"#ff4d4d",marginTop:"15px"}}>Location</p>
                    <p>{contactLocation}</p>
                  </div>
                </div>

                <div style={styles.contactForm}>
                  <label style={styles.formLabel}>Email</label>
                  <input
                    style={styles.formInput}
                    value={contactEmail}
                    onChange={(e)=>setContactEmail(e.target.value)}
                    placeholder="Enter Email"
                  />
                  <label style={styles.formLabel}>Phone</label>
                  <input
                    style={styles.formInput}
                    value={contactPhone}
                    onChange={(e)=>setContactPhone(e.target.value)}
                    placeholder="Enter Phone Number"
                  />
                  <label style={styles.formLabel}>Location</label>
                  <textarea
                    style={styles.formTextarea}
                    value={contactLocation}
                    onChange={(e)=>setContactLocation(e.target.value)}
                    placeholder="Enter Location"
                  />
                  <button style={styles.sendBtn} type="button">
                    Update Contact
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

const styles = {

  wrapper:{
    minHeight:"100vh",
    background:"linear-gradient(135deg,#0f172a,#111827)",
    color:"white",
    padding:"30px"
  },

  topBar:{
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"40px"
  },

  updateBtn:{
    background:"linear-gradient(135deg,#ff4d4d,#ff7b54)",
    border:"none",
    padding:"12px 25px",
    borderRadius:"30px",
    color:"white",
    fontWeight:"bold",
    cursor:"pointer"
  },

  content:{
    display:"flex",
    gap:"40px"
  },

  sidebar:{
    width:"220px",
    display:"flex",
    flexDirection:"column",
    gap:"15px"
  },

  sideBtn:{
    padding:"12px",
    borderRadius:"30px",
    background:"transparent",
    border:"1px solid #333",
    color:"white",
    cursor:"pointer"
  },

  activeBtn:{
    padding:"12px",
    borderRadius:"30px",
    background:"linear-gradient(135deg,#ff4d4d,#ff7b54)",
    border:"none",
    color:"white",
    fontWeight:"bold"
  },

  logoutBtn:{
    marginTop:"30px",
    padding:"12px",
    borderRadius:"30px",
    background:"red",
    border:"none",
    color:"white",
    cursor:"pointer"
  },

  mainCard:{ flex:1 },

  card:{
    display:"flex",
    gap:"40px",
    background:"rgba(255,255,255,0.05)",
    padding:"40px",
    borderRadius:"20px"
  },

  cardColumn:{
    background:"rgba(255,255,255,0.05)",
    padding:"40px",
    borderRadius:"20px"
  },

  projectCard:{
    background:"rgba(255,255,255,0.05)",
    padding:"20px",
    borderRadius:"15px",
    marginBottom:"15px",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center"
  },

  deleteBtn:{
    background:"red",
    border:"none",
    padding:"8px 15px",
    borderRadius:"20px",
    color:"white",
    cursor:"pointer"
  },

  techBtn:{
    padding:"14px 30px",
    borderRadius:"30px",
    border:"none",
    background:"linear-gradient(135deg,#ff4d4d,#ff7b54)",
    color:"white",
    fontWeight:"bold",
    cursor:"pointer"
  },

  addCategoryBtn:{
    padding:"12px 25px",
    borderRadius:"25px",
    border:"1px solid #ff4d4d",
    background:"transparent",
    color:"#ff4d4d",
    cursor:"pointer",
    fontWeight:"bold"
  },

  imageSection:{
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },

  profileImage:{
    width:"150px",
    height:"150px",
    borderRadius:"50%",
    objectFit:"cover",
    marginBottom:"20px"
  },

  uploadBtn:{
    background:"#ff4d4d",
    padding:"10px 20px",
    borderRadius:"30px",
    cursor:"pointer"
  },

  input:{
    width:"100%",
    padding:"12px",
    marginTop:"10px",
    borderRadius:"10px",
    border:"1px solid #333",
    background:"#0f172a",
    color:"white"
  },

  textarea:{
    width:"100%",
    height:"120px",
    marginTop:"10px",
    padding:"12px",
    borderRadius:"10px",
    border:"1px solid #333",
    background:"#0f172a",
    color:"white"
  },

  label:{
    fontSize:"14px",
    color:"#aaa",
    marginTop:"20px",
    display:"block"
  },

  statsRow:{
    display:"flex",
    gap:"30px",
    marginTop:"30px"
  },

  statBox:{ flex:1 },

  contactWrapper:{
    display:"grid",
    gridTemplateColumns:"1fr 1fr",
    gap:"24px"
  },

  contactLeft:{
    background:"rgba(255,255,255,0.03)",
    border:"1px solid rgba(255,255,255,0.08)",
    borderRadius:"12px",
    padding:"20px"
  },

  contactForm:{
    display:"flex",
    flexDirection:"column",
    gap:"12px"
  },

  formInput:{
    width:"100%",
    padding:"12px",
    borderRadius:"10px",
    border:"1px solid #333",
    background:"#0f172a",
    color:"white"
  },

  formLabel:{
    fontSize:"14px",
    color:"#ff7b54",
    fontWeight:"bold"
  },

  formTextarea:{
    width:"100%",
    minHeight:"130px",
    padding:"12px",
    borderRadius:"10px",
    border:"1px solid #333",
    background:"#0f172a",
    color:"white"
  },

  sendBtn:{
    padding:"12px 20px",
    borderRadius:"10px",
    border:"none",
    background:"linear-gradient(135deg,#ff4d4d,#ff7b54)",
    color:"white",
    fontWeight:"bold",
    cursor:"pointer"
  }
  
  
}


export default Admin
