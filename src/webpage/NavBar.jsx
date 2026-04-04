import React, { useState, useEffect } from 'react';
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

  const [emergencyInfo, setEmergencyInfo] = useState({ 
    number: '1234567890', 
    message: "I am not okey , it's an emergency" 
  });

  useEffect(() => {
    const saved = localStorage.getItem('emergencyContacts');
    if (saved) {
      try {
        const contacts = JSON.parse(saved);
        if (contacts && contacts.length > 0) {
          setEmergencyInfo({
            number: contacts[0].number || '1234567890',
            message: "I am not okey , it's an emergency"
          });
        }
      } catch (e) {
        console.error("Could not parse emergency contacts", e);
      }
    }
  }, []);

  const handleAmbulanceCall = () => {
    setTimeout(() => {
      window.open('tel:102', '_self');
    }, 1500);
  };

  return (
    <nav className="sticky-navbar" style={{ padding: '15px 30px', display: 'flex', alignItems: 'center' }}>
      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
        <Link to="/" className="navbar-brand">
          <div className="navbar-logo-container">
            <ElderLogo />
          </div>
          <span className="navbar-title">
            Khayal
          </span>
        </Link>
      </div>

      <div style={{ flex: 1 }}></div>

      <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '20px' }}>
        {location.pathname === '/content' && (
          <a 
            href={`sms:${emergencyInfo.number}?body=${encodeURIComponent(emergencyInfo.message)}`}
            onClick={handleAmbulanceCall}
            style={{ textDecoration: 'none' }}
          >
            <div style={{
              backgroundColor: '#ff3b30',
              color: 'white',
              padding: '6px 28px',
              borderRadius: '20px',
              border: '3px solid #8b0000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 8px rgba(255, 59, 48, 0.4), inset 0 2px 0 rgba(255,255,255,0.2), 2px 3px 0px #8b0000',
              cursor: 'pointer',
              transition: 'transform 0.1s',
            }}
            onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(2px)'; e.currentTarget.style.boxShadow = '0 2px 4px rgba(255, 59, 48, 0.4), inset 0 2px 0 rgba(255,255,255,0.2), 0px 1px 0px #8b0000'; }}
            onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 59, 48, 0.4), inset 0 2px 0 rgba(255,255,255,0.2), 2px 3px 0px #8b0000'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 8px rgba(255, 59, 48, 0.4), inset 0 2px 0 rgba(255,255,255,0.2), 2px 3px 0px #8b0000'; }}
            >
              <div style={{ fontSize: '24px', fontFamily: 'var(--heading)', fontWeight: '900', letterSpacing: '2px', textShadow: '1px 1px 0 #8b0000' }}>SOS</div>
            </div>
          </a>
        )}

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
      </div>
    </nav>
  );
}

export default NavBar;
