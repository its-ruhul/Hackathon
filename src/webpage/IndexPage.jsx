import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import bookmarkIcon from '../assets/bookmark.svg';
import { pagesData } from '../scripts/pagesData';

function IndexPage() {
  const themeColors = [
    { icon: '#f2e1e1', row: '#faf5f5' },
    { icon: '#cce9ff', row: '#f0f8ff' },
    { icon: '#d4f0d4', row: '#f2fbf2' },
    { icon: '#ffcccc', row: '#fff5f5' },
    { icon: '#fef08a', row: '#fffdeb' }
  ];

  return (
    <div className="book-page">

      <h1 className="index-title" style={{ marginTop: '20px' }}>Index</h1>
      
      <div className="divider">
        <img src={bookmarkIcon} alt="Divider" className="divider-icon" style={{ width: 32, height: 32 }} />
      </div>

      <div className="index-list">
        {pagesData.map((item, i) => {
          const theme = themeColors[i % themeColors.length];
          return (
          <Link to={item.path || '#'} key={i} className="index-item" style={{ 
            textDecoration: 'none',
            backgroundColor: theme.row,
            border: '2px solid var(--text-h)',
            borderRadius: '16px',
            marginBottom: '4px',
            boxShadow: '2px 4px 0 rgba(0,0,0,0.05)'
          }}>
            <div className="item-icon" style={{ 
              backgroundColor: theme.icon, 
              borderRadius: '12px', 
              border: '2px solid var(--text-h)',
              boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
              width: '48px',
              height: '48px'
            }}>
              <img src={item.icon} alt={item.title} style={{ width: 24, height: 24 }} />
            </div>
            <div className="item-title" style={{ marginLeft: '16px' }}>{item.title}</div>
            <div className="item-leader"></div>
            <div className="item-page-num" style={{ 
              fontWeight: 'bold', 
              backgroundColor: 'var(--text-h)', 
              color: 'var(--bg)', 
              padding: '4px 12px', 
              borderRadius: '20px',
              fontSize: '16px' 
            }}>{item.page}</div>
          </Link>
          );
        })}
      </div>
    </div>
  );
}

export default IndexPage;
