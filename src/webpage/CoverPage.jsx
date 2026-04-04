import React from 'react';
import { Link } from 'react-router';
import { PageWrapper } from './PageWrapper';

function CoverPage() {
  return (
    <PageWrapper isCover={true}>
      <div className="book-page cover-page">
        <h1 className="cover-title">Khayal</h1>
        <p className="cover-subtitle">Care. Compassion. Memory.</p>
        
        <Link to="/content">
          <button className="enter-button">Open Book</button>
        </Link>
      </div>
    </PageWrapper>
  );
}

export default CoverPage;
