import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
  <>
    <nav>
        <h1>TimeZone</h1>
        <div className="navbar-links">
            <button>Action</button>
            <button>Drama</button>
            <button>Mystery</button>
            <button>Romance</button>
            <button>Thriller</button>
            <button>Horror</button>
            <button>Sci-Fi</button>
            <button>Animations</button>
        </div>
    </nav>
  
  </>
  )
}

export default Navbar


