import React from 'react';
import './Projects.css';
import project1 from '../assets/project1.jpg';
import project2 from '../assets/project2.jpg';

const Projects = () => {
  return (
    <div className="projects-container" id="projects">
      <h2 className="section-title">My Projects</h2>

      <div className="project-item">
        <img src={project1} alt="Project 1" className="project-image" />
        <div className="project-details">
          <h3 className="project-title">Remote Finder Utilizing RF and Clap Recognizing Technology</h3>
          <p>
           A smart system that helps locate misplaced remotes with a simple clap. When a clap is detected by the mic sensor, the Arduino Nano processes the input and activates an RF signal. The RF receiver responds, triggering a buzzer and LED to pinpoint the remote’s location. Powered by a rechargeable battery, this compact and portable solution works in homes, offices, and public spaces. By combining RF communication, sound detection, and Arduino control, it offers a reliable and user-friendly way to find lost remotes without physical effort.
          </p>
        </div>
      </div>

      <div className="project-item">
        <img src={project2} alt="Project 2" className="project-image" />
        <div className="project-details">
          <h3 className="project-title">Bike Accident Preventing System</h3>
          <p>
            An innovative IoT-based safety system that detects bike accidents using an angle sensor and ESP8266. When a fall is detected, the system automatically sends a real-time alert to the rider’s emergency contact via the Blynk app—without needing rider input or cloud dependency. Designed for urban, rural, and remote environments, this fully automated solution enhances road safety by providing immediate emergency notifications, reducing response time during critical situations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
