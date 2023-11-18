import React from "react";
import { Link } from 'react-router-dom'
import './navbar.css'

function Navbar(){


  return(
    <>
   <div className="navbar">
    <div className="navbar-logo-container">
      <img src="https://grow.google/static/apac/icons/logo_GwG.svg" alt="Server Error" />
    </div>
        <div className="navbar-links">
         <ul>   
         <li>    <Link  className="links-for-navbar"  to = "/" >Home</Link> </li>

          <li>  <Link  className="links-for-navbar" to="/use" >Use tools</Link> </li>

          <li>  <Link className="links-for-navbar"  to="/learn" >Learn skills </Link> </li>

          <li>  <Link className="links-for-navbar"  to="/certificate" >Google Career Certificates</Link> </li>

          <li>  <Link  className="links-for-navbar" to="/startups" >Google for Startups</Link> </li>
         
            </ul>

            
        </div>
     
   </div>
    
    </>
  )
}
export default Navbar;