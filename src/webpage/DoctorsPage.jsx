import React from 'react';
import { Link } from 'react-router';

function DoctorsPage() {
  const doctors = [1, 2, 3];

  return (
    <div className="book-page">
      <h2 className="page-title">Doctors</h2>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Content</button>
      </Link>
    </div>
  );
}

export default DoctorsPage;
