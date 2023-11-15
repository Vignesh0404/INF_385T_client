import React from "react";
import brandLogo from '../images/zara-logo.png';
 
// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap.min.css";
 
// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";
 
// Here, we display our Navbar
export default function Navbar() {
 return (
   <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <NavLink className="navbar-brand" to="/">
       <img style={{"width" : 25 + '%'}} src={brandLogo}></img>
       </NavLink>
       <button
         className="navbar-toggler"
         type="button"
         data-toggle="collapse"
         data-target="#navbarSupportedContent"
         aria-controls="navbarSupportedContent"
         aria-expanded="false"
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon"></span>
       </button>
 
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <ul className="navbar-nav ml-auto">
         <li className="nav-item">
             <NavLink className="nav-link" to="/">
               Home
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/register">
               Register
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/login">
               Login
             </NavLink>
           </li>
           <li className="nav-item">
             <NavLink className="nav-link" to="/account">
               Account
             </NavLink>
           </li>
         </ul>
       </div>
     </nav>
   </div>
 );
}