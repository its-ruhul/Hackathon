import React from 'react';
import { Routes, Route, useLocation } from 'react-router';
import { AnimatePresence, motion } from 'framer-motion';
import './styles/pages.css';

import CoverPage from './webpage/CoverPage';
import IndexPage from './webpage/IndexPage';
import FamilyContactsPage from './webpage/FamilyContactsPage';
import MedicationPage from './webpage/MedicationPage';
import EmergencyPage from './webpage/EmergencyPage';
import DoctorsPage from './webpage/DoctorsPage';
import NotificationBanner from './webpage/NotificationBanner';
import NavBar from './webpage/NavBar';
import VoiceNotesPage from './webpage/VoiceNotesPage';
import SpiralBinding from './webpage/SpiralBinding';
import { useRef, useEffect } from 'react';

const getPageDepth = (pathname) => {
  if (pathname === '/') return 0;
  if (pathname === '/content') return 1;
  return 2;
};

const pageVariants = {
  initial: (direction) => ({
    rotateY: direction < 0 ? -90 : 90,
    opacity: 0,
    x: direction < 0 ? -20 : 20
  }),
  animate: {
    rotateY: 0,
    opacity: 1,
    x: 0
  },
  exit: (direction) => ({
    rotateY: direction < 0 ? 90 : -90,
    opacity: 0,
    x: direction < 0 ? 20 : -20
  })
};

function App() {
  const location = useLocation();
  const prevDepth = useRef(getPageDepth(location.pathname));
  const currentDepth = getPageDepth(location.pathname);

  // Calculate movement direction (+ means deeper, - means going backwards)
  // If moving between pages of same depth (2 to 2), assume forward (1) for a fresh page turn, or 0 if we want it to just do forward. We'll use 1 by default if depth changes are 0.
  const depthDiff = currentDepth - prevDepth.current;
  const direction = depthDiff !== 0 ? depthDiff : 1;

  useEffect(() => {
    prevDepth.current = currentDepth;
  }, [currentDepth]);

  return (
    <>
      <SpiralBinding />
      <NavBar />
      <NotificationBanner />

      <div style={{ perspective: '2000px', flexGrow: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={location.pathname}
            custom={direction}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            style={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              transformOrigin: '0% 50%', /* Hinge on the far left */
              backfaceVisibility: 'hidden',
              transformStyle: 'preserve-3d'
            }}
            transition={{ duration: 0.5, type: 'spring', bounce: 0.1, stiffness: 60 }}
          >
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<CoverPage />} />
              <Route path="/content" element={<IndexPage />} />
              <Route path="/family-contacts" element={<FamilyContactsPage />} />
              <Route path="/medication" element={<MedicationPage />} />
              <Route path="/emergency" element={<EmergencyPage />} />
              <Route path="/doctors" element={<DoctorsPage />} />
              {/* testing */}

              {/* Voice Notes setup */}
              <Route path="/voice-notes" element={<VoiceNotesPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
