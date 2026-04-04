import React from 'react';
import { Routes, Route } from 'react-router';
import './styles/pages.css';

import CoverPage from './webpage/CoverPage';
import IndexPage from './webpage/IndexPage';
import FamilyContactsPage from './webpage/FamilyContactsPage';
import MedicationPage from './webpage/MedicationPage';
import EmergencyPage from './webpage/EmergencyPage';
import DoctorsPage from './webpage/DoctorsPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<CoverPage />} />
      <Route path="/content" element={<IndexPage />} />
      <Route path="/family-contacts" element={<FamilyContactsPage />} />
      <Route path="/medication" element={<MedicationPage />} />
      <Route path="/emergency" element={<EmergencyPage />} />
      <Route path="/doctors" element={<DoctorsPage />} />
      {/* testing */}

      {/* Fallback for "Prologue" which isn't defined explicitly but might be clicked */}
      <Route path="/guide" element={<IndexPage />} />
    </Routes>
  );
}

export default App;
