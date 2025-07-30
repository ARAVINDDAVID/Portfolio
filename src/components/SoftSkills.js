import React from 'react';
import './SoftSkills.css';

const SoftSkills = () => {
  return (
    <section className="soft-skills-section" id="softskills">
      <h2 className="soft-skills-title">Soft Skills</h2>
      <div className="soft-skills-card">
        <ul className="soft-skills-list">
          <li><span>✓ Team Collaboration</span></li>
          <li><span>✓ Problem Solving</span></li>
          <li><span>✓ Effective Communication</span></li>
          <li><span>✓ Time Management</span></li>
          <li><span>✓ Adaptability</span></li>
          <li><span>✓ Eagerness to Learn</span></li>
        </ul>
      </div>
    </section>
  );
};

export default SoftSkills;
