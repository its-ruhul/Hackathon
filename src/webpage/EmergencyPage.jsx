import React from 'react';
import { Link } from 'react-router';

function EmergencyPage() {
  return (
    <div className="book-page">
      <h2 className="page-title">Emergency</h2>
      
      <div className="page-content-box" style={{ 
        border: '3px solid var(--border)', 
        borderRadius: '24px', 
        height: '220px',
        display: 'flex',
        padding: '30px',
        margin: '0 40px'
      }}>
        <div style={{ width: '80px', height: '100px', border: '3px solid var(--border)', borderRadius: '12px', marginRight: '30px' }} />
        <div style={{ width: '120px', height: '24px', border: '3px solid var(--border)', borderRadius: '6px' }} />
      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Content</button>
      </Link>
    </div>
  );
}

export default EmergencyPage;
