import React from 'react';
import './Certifications.css';

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-title">Certifications</h2>
      <div className="cert-container">
        <ul className="cert-list">
          <li>
            <strong>Secondary School Leaving Certificate (SSLC)</strong><br />
            71.33% – Govt Higher Secondary School, Kalappambadi, 2020.
          </li>
          <li>
            <strong>Higher Secondary Certificate (HSC)</strong><br />
            77.2% – Govt Higher Secondary School, Kalappambadi, 2022.
          </li>
          <li>
            <strong>Bachelor of Engineering (BE – EEE)</strong><br />
            CGPA: 8.129 – M. Kumarasamy College of Engineering, Karur.
          </li>
          <li>
            <strong>Python for Data Science, AI & Development</strong><br />
            Coursera, 2023.
          </li>
          <li>
            <strong>Data Analysis & Visualization with Power BI</strong><br />
            Coursera, 2023.
          </li>
          <li>
            <strong>Introduction to Internet of Things</strong><br />
            NPTEL, 2022.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Certifications;
