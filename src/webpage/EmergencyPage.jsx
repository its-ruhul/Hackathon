import React from 'react';
import { Link } from 'react-router';
import { PageWrapper } from './PageWrapper';

function EmergencyPage({ action }) {
  return (
    <PageWrapper action={action}>
      <div className="book-page">
        <h2 className="page-title">Emergency</h2>

        <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
          <button className="back-button">Back to Content</button>
        </Link>
      </div>
    </PageWrapper>
  );
}

export default EmergencyPage;
