import React from 'react';
import { Link } from 'react-router';

function DoctorsPage() {
  const doctors = [1, 2, 3];

  return (
    <div className="book-page">
      <h2 className="page-title">Doctors</h2>
      
      <div className="page-content-box" style={{ border: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {doctors.map((i) => (
          <div key={i} style={{ 
            height: '80px', 
            border: '3px solid var(--border)', 
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            padding: '10px 20px'
          }}>
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', border: '2px solid var(--border)' }} />
            <div style={{ width: '100px', height: '12px', border: '2px solid var(--border)', borderRadius: '6px', marginLeft: '20px' }} />
          </div>
        ))}
      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Content</button>
      </Link>
    </div>
  );
}

export default DoctorsPage;
