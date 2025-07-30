import React from 'react';
import './Hobbies.css';

const Hobbies = () => {
  return (
    <section className="hobbies-section" id="hobbies">
      <h2 className="hobbies-title">Hobbies</h2>
      <div className="hobbies-card">
        <ul className="hobbies-list">
          <li><span>🎧 Listening to songs</span></li>
          <li><span>📺 Watching anime</span></li>
          <li><span>💻 Exploring new technologies</span></li>
          <li><span>🛠️ Building small Technical; projects</span></li>
          <li><span>📖 Learning about Full Stack</span></li>
        </ul>
      </div>
    </section>
  );
};

export default Hobbies;

