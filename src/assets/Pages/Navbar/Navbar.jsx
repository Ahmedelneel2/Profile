import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar pt-4 navbar-expand-lg fixed-top ">
 <div className='container'>
     <NavLink className="navbar-brand" to="#"><h1>Start Framework</h1></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" ></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto p-4">
     
      <li className="nav-item">
        <NavLink className="nav-link" to="about">ABOUT</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="portfolio">PORTOFLIO</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="contact">CONTACT</NavLink>
      </li>
    </ul>
  </div> 
 </div>
</nav>

  )
}
