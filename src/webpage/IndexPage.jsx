import React from 'react';
import { Link } from 'react-router';
import bookmarkIcon from '../assets/bookmark.svg';
import { pagesData } from '../scripts/pagesData';
import { PageWrapper } from './PageWrapper';

function IndexPage({ action }) {
  return (
    <PageWrapper action={action}>
      <div className="book-page">
        <h1 className="index-title">Index</h1>
        
        <div className="divider">
          <img src={bookmarkIcon} alt="Divider" className="divider-icon" style={{ width: 24, height: 24 }} />
        </div>

        <div className="index-list">
          {pagesData.map((item, i) => (
            <Link to={item.path || '#'} key={i} className="index-item" style={{ textDecoration: 'none' }}>
              <div className="item-icon">
                <img src={item.icon} alt={item.title} style={{ width: 28, height: 28 }} />
              </div>
              <div className="item-title">{item.title}</div>
              <div className="item-leader"></div>
              <div className="item-page-num">{item.page}</div>
            </Link>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

export default IndexPage;
