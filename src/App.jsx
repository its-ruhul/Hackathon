import React from 'react';
import { Routes, Route } from 'react-router';
import './styles/pages.css';

import CoverPage from './webpage/CoverPage';
import LoginPage from './webpage/LoginPage';
import IndexPage from './webpage/IndexPage';
import FamilyContactsPage from './webpage/FamilyContactsPage';
import MedicationPage from './webpage/MedicationPage';
import EmergencyPage from './webpage/EmergencyPage';
import DoctorsPage from './webpage/DoctorsPage';
import NotificationBanner from './webpage/NotificationBanner';
import NavBar from './webpage/NavBar';
import GuidePage from './webpage/GuidePage';

function App() {
  return (
    <>
      <NavBar />
      <NotificationBanner />
      <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/content" element={<IndexPage />} />
      <Route path="/family-contacts" element={<FamilyContactsPage />} />
      <Route path="/medication" element={<MedicationPage />} />
      <Route path="/emergency" element={<EmergencyPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      {/* testing */}

      {/* Guide Page route */}
      <Route path="/guide" element={<GuidePage />} />
    </Routes>
    </>
  );
}

export default App;
