import React from "react";
import myPhoto from "../assets/aravind.jpg";
import "./Home.css";


function Home() {
  return (
    <section id="home" className="home-container">
      <div className="left-content">
        <img src={myPhoto} alt="Aravind" className="profile-photo" />
      </div>
      <div className="right-content">
        <h1>Hi, I'm Aravind</h1>
        <p>
          I'm a passionate graduate in Electrical and Electronics Engineering with a strong interest in software development and IoT systems. I enjoy solving real-world problems using technology and constantly strive to improve my skills in both hardware and programming. My goal is to build smart, impactful solutions and elevate my family through my work.
        </p>
      </div>
    </section>
  );
}

export default Home;
