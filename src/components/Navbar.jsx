import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#techskills">Tech Skills</a></li>
        <li><a href="#certifications">Certifications</a></li>
        <li><a href="#hobbies">Hobbies</a></li>
        <li><a href="#softskills">Soft Skills</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;