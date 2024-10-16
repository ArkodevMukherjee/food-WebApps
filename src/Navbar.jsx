import LogIn from "./LogIn";
import { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = ({setLogin,setlogin}) => {

  return (
    <>
      <div className="navbar">
        <div className="left-nav">Food-WebApp</div>
        <div className="right-nav">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li onClick={()=>{
              setLogin(true)
              setlogin(true)
            }} id="login">Log In</li>

            <li id="sign" onClick={()=>{
              setLogin(true)
              setlogin(false)
            }}>Sign Up</li>
          </ul>
        </div>
      </div>

      {/* <div className="button">
        <input type="text" />
        <button>Search</button>
      </div> */}
    </>
  );
};

export default Navbar;
