import React from 'react';

const AboutMe: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>About Me</h1>
      <p style={styles.paragraph}>
        Hello! I'm [Your Name], a passionate developer with a keen interest in web development, automation, and robotics. 
        With a background in engineering and a love for problem-solving, I enjoy creating innovative solutions that make 
        a difference. In my free time, I work on personal projects, explore new technologies, and contribute to the 
        open-source community.
      </p>
      <h2 style={styles.subHeader}>Skills</h2>
      <ul style={styles.list}>
        <li>Web Development (React, Next.js, TypeScript)</li>
        <li>Embedded Systems (STM32, ESP-01S, HAL library)</li>
        <li>Robotics (PID control, sensor integration)</li>
        <li>Software Development (C, C++, Python)</li>
      </ul>
      <h2 style={styles.subHeader}>Projects</h2>
      <ul style={styles.list}>
        <li>Automated Robot with Pixy2 Camera</li>
        <li>HEART: A Fantasy Game</li>
        <li>Food Printer Functionalities</li>
        <li>EVEBOT Printer Pen with Speech-to-Text Integration</li>
      </ul>
      <h2 style={styles.subHeader}>Contact</h2>
      <p style={styles.paragraph}>
        Feel free to reach out to me at <a href="mailto:your.email@example.com">your.email@example.com</a> for any 
        inquiries or collaborations.
      </p>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2em',
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.5em',
    marginTop: '20px',
    marginBottom: '10px',
  },
  paragraph: {
    fontSize: '1em',
    lineHeight: '1.6',
  },
  list: {
    listStyleType: 'disc',
    paddingLeft: '20px',
    fontSize: '1em',
    lineHeight: '1.6',
  },
};

export default AboutMe;
