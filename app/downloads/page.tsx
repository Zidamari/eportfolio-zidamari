import React from 'react';

const Placeholder: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Page Under Construction</h1>
      <p style={styles.paragraph}>
        This page is currently under construction. Please check back later for updates.
      </p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    fontSize: '2.5em',
    marginBottom: '20px',
  },
  paragraph: {
    fontSize: '1.2em',
    lineHeight: '1.6',
  },
};

export default Placeholder;
