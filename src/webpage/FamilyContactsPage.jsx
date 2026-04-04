import React from 'react';
import { Link } from 'react-router';

function FamilyContactsPage() {
  // Generate mock contacts for the grid wireframe
  const contacts = Array(12).fill(null);

  return (
    <div className="book-page">
      <h2 className="page-title">Family Contacts</h2>
      
      <div className="page-content-box" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gridAutoRows: '80px',
        border: '3px solid var(--border)',
        borderRadius: '20px',
        padding: '0',
        overflow: 'hidden'
      }}>
        {contacts.map((_, i) => (
          <div key={i} style={{ 
            border: '2px solid var(--border)',
            borderCollapse: 'collapse',
            margin: '-1px'
          }} />
        ))}
      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Content</button>
      </Link>
    </div>
  );
}

export default FamilyContactsPage;
