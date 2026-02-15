function Navbar(){
  return(
    <nav style={navStyle}>
      <h2>Velu</h2>
      <div>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

const navStyle={
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  padding:"20px 10%",
  background:"#0f172a",
  position:"sticky",
  top:0
}

export default Navbar
