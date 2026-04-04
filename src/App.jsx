import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence } from 'framer-motion';
import './styles/pages.css';

import CoverPage from './webpage/CoverPage';
import IndexPage from './webpage/IndexPage';
import FamilyContactsPage from './webpage/FamilyContactsPage';
import MedicationPage from './webpage/MedicationPage';
import EmergencyPage from './webpage/EmergencyPage';
import DoctorsPage from './webpage/DoctorsPage';

function App() {
  const location = useLocation();
  const [action, setAction] = useState('forward');

  // Track previous path to determine direction
  useEffect(() => {
    // If we're on a content page and we're heading TO content, it's a backward flip
    if (location.pathname === '/content') {
      setAction('backward');
    } else {
      setAction('forward');
    }
  }, [location.pathname]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<CoverPage />} />
          <Route path="/content" element={<IndexPage action={action} />} />
          <Route path="/family-contacts" element={<FamilyContactsPage action={action} />} />
          <Route path="/medication" element={<MedicationPage action={action} />} />
          <Route path="/emergency" element={<EmergencyPage action={action} />} />
          <Route path="/doctors" element={<DoctorsPage action={action} />} />
          <Route path="/guide" element={<IndexPage action={action} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
