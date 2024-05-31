import React from 'react';

const Downloads: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Downloads</h1>
      <p style={styles.paragraph}>
        Here you can download my resume and a screenshot of the site.
      </p>
      <div style={styles.downloads}>
        <div style={styles.downloadItem}>
          <h2 style={styles.subHeader}>Resume</h2>
          <a href="/downloads/resume.pdf" style={styles.downloadLink} download>
            <button style={styles.button}>Download Resume</button>
          </a>
        </div>
        <div style={styles.downloadItem}>
          <h2 style={styles.subHeader}>Site Screenshot</h2>
          <a href="/downloads/site-screenshot.png" style={styles.downloadLink} download>
            <button style={styles.button}>Download Screenshot</button>
          </a>
        </div>
      </div>
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
  paragraph: {
    fontSize: '1em',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  downloads: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  downloadItem: {
    marginBottom: '20px',
  },
  subHeader: {
    fontSize: '1.5em',
    marginBottom: '10px',
  },
  downloadLink: {
    textDecoration: 'none',
  },
  button: {
    fontSize: '1em',
    padding: '10px 20px',
    backgroundColor: '#0070f3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default Downloads;
