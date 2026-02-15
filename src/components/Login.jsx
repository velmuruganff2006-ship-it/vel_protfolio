import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login(){

  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if(username === "velu" && password === "cherry"){
      localStorage.setItem("admin","true")
      navigate("/admin")
    } else {
      alert("Wrong Credentials")
    }
  }

  return(
    <div style={loginStyle}>
      <h2>Admin Login</h2>
      <input 
        type="text" 
        placeholder="Username"
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input 
        type="password"
        placeholder="Password"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

const loginStyle={
  display:"flex",
  flexDirection:"column",
  width:"300px",
  margin:"100px auto",
  gap:"15px"
}

export default Login
