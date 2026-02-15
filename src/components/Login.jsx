import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // simple client-side check; replace with real auth as needed
    if(password === 'admin' || password === 'password'){
      localStorage.setItem('admin','true')
      navigate('/admin')
    } else {
      setError('Invalid password')
    }
  }

  return (
    <div style={{padding:'120px 10%',minHeight:'100vh'}}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={{maxWidth:400,marginTop:20}}>
        <label style={{display:'block',marginBottom:8}}>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          style={{width:'100%',padding:10,borderRadius:8,border:'1px solid rgba(255,255,255,0.1)',background:'#0b0f24',color:'#fff'}}
          placeholder="Enter admin password"
        />
        {error && <p style={{color:'salmon',marginTop:8}}>{error}</p>}
        <div style={{marginTop:16}}>
          <button style={{padding:'10px 20px',borderRadius:8,background:'#ff2e63',color:'#fff',border:'none',cursor:'pointer'}}>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
