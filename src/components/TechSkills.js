import React from 'react';
import './TechSkills.css';

const skills = [
  { name: 'Java Programming', level: 80 },
  { name: 'IoT (ESP8266, Sensors)', level: 65 },
  { name: 'HTML & CSS', level: 70 },
  { name: 'React JS', level: 50 },
  { name: 'MongoDB', level: 50 },
  { name: 'Python Programming', level: 80 },
];

const TechSkills = () => {
  return (
    <section className="tech-skills-section" id="techskills">
      <div className="tech-skills-box">
        <h2>Tech Skills</h2>
        <ul className="skills-list">
          {skills.map((skill, index) => (
            <li key={index} className="skill-item">
              <div className="skill-header">
                <span className="skill-name">• {skill.name}</span>
                <span className="skill-percent">{skill.level}%</span>
              </div>
              <div className="skill-bar">
                <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechSkills;
