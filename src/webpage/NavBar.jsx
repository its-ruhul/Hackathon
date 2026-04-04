import React, { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { pagesData } from '../scripts/pagesData';

// Simple abstract SVG logo representing elderly care (person with a cane)
const ElderLogo = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="32" 
    height="32" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="10" cy="5" r="2" />
    <path d="M10 8c-2 0-3 2-3 4v8" />
    <path d="M14 8h-4" />
    <path d="M16 9v12" />
    <path d="M16 9c0-1.5 1-2.5 2.5-2.5S21 7.5 21 9" />
  </svg>
);

function NavBar() {
  const location = useLocation();
  const [clicked, setClicked] = useState(false);

  // Determine the current page name
  let pageName = 'Khayal';
  if (location.pathname === '/') {
    pageName = 'Home';
  } else if (location.pathname === '/content') {
    pageName = 'Index';
  } else {
    const pageObj = pagesData.find(p => p.path === location.pathname);
    if (pageObj) {
      // Strip roman numerals like 'III: Emergency' -> 'Emergency'
      pageName = pageObj.title.includes(': ') ? pageObj.title.split(': ')[1] : pageObj.title;
    }
  }

  const handlePageNameClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 300);
  };

  return (
    <nav className="sticky-navbar">
      <Link to="/" className="navbar-brand">
        <div className="navbar-logo-container">
          <ElderLogo />
        </div>
        <span className="navbar-title">
          Khayal
        </span>
      </Link>

      <div 
        style={{ cursor: 'pointer', perspective: '1000px' }}
        onClick={handlePageNameClick}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={pageName}
            initial={{ opacity: 0, y: -20, rotateX: 90 }}
            animate={clicked ? { 
              scale: [1, 0.9, 1.1, 1],
              rotate: [0, -5, 5, 0],
              color: ['#1a1614', '#8b3a30', '#1a1614']
            } : { 
              opacity: 1, 
              y: 0, 
              rotateX: 0 
            }}
            exit={{ opacity: 0, y: 20, rotateX: -90 }}
            transition={{ 
              duration: clicked ? 0.3 : 0.4, 
              type: 'spring', 
              bounce: 0.5 
            }}
            style={{ 
              fontFamily: 'var(--heading)',
              fontSize: '24px',
              fontWeight: 500,
              backgroundColor: '#fef08a',
              border: '2px solid var(--text-h)',
              padding: '6px 20px',
              borderRadius: '20px',
              boxShadow: '2px 3px 0 rgba(0,0,0,0.1)',
              color: 'var(--text-h)'
            }}
          >
            {pageName}
          </motion.div>
        </AnimatePresence>
      </div>
    </nav>
  );
}

export default NavBar;
