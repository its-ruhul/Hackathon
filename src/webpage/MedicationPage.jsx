import React from 'react';
import { Link } from 'react-router';
import { PageWrapper } from './PageWrapper';

function MedicationPage({ action }) {
  const medications = [1, 2, 3];

  return (
    <PageWrapper action={action}>
      <div className="book-page">
        <h2 className="page-title">Medication</h2>
        
        <div className="page-content-box" style={{ border: 'none', padding: '0', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {medications.map((i) => (
            <div key={i} style={{ 
              height: '60px', 
              border: '3px solid var(--border)', 
              borderRadius: '12px' 
            }} />
          ))}
        </div>

        <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
          <button className="back-button">Back to Content</button>
        </Link>
      </div>
    </PageWrapper>
  );
}

export default MedicationPage;
