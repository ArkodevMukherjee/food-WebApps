import React from "react";
import "../src/Footer.css";

const Footer = () => {
  return (
    <>
      <div className="container">
        <div className="footer">
          <div className="part1">
            <h1>Food-WebApp</h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque hic
            at voluptates dicta nam alias. Sed, vel! Placeat at ea cupiditate
            maxime quo, laboriosam porro doloremque debitis eos suscipit
            perferendis?
          </div>
          <div className="part22">
            <h2>Company</h2>
            <ul>
              <li>Home</li>
              <li>Menu</li>
              <li>Contact Us</li>
              <li>Log In</li>
              <li>Search</li>
            </ul>
          </div>
          <div className="part333">
            <h2>Get In Touch</h2>
          </div>
        </div>
        <div className="co">
          Copyright 2024 &copy Food-WebApp - All rights are reserved
        </div>
      </div>
    </>
  );
};

export default Footer;
