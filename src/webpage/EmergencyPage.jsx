import React from 'react';
import { Link } from 'react-router';

function EmergencyPage() {
  return (
    <div className="book-page">
      <h2 className="page-title">Emergency</h2>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Content</button>
      </Link>
    </div>
  );
}

export default EmergencyPage;
