import React from 'react';
import { Link } from 'react-router';

function CoverPage() {
  return (
    <div className="book-page cover-page">
      <h1 className="cover-title">Khayal</h1>
      <p className="cover-subtitle">Care. Compassion. Memory.</p>
      
      <Link to="/content">
        <button className="enter-button">Open Book</button>
      </Link>
    </div>
  );
}

export default CoverPage;
