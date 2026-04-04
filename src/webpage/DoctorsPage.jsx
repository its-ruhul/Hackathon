import React, { useState } from 'react';
import { Link } from 'react-router';
import DoctorCard from './DoctorCard';

function DoctorsPage() {
  const [doctors] = useState([
    {
      id: 1,
      hospitalName: 'City General Hospital',
      doctorName: 'Sarah Jenkins',
      department: 'Cardiology',
      visitDate: '12th Oct, 2026',
      photoUrl: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      id: 2,
      hospitalName: 'Mercy Clinic',
      doctorName: 'David Chen',
      department: 'General Practice',
      visitDate: '05th Nov, 2026',
      photoUrl: 'https://randomuser.me/api/portraits/men/32.jpg'
    }
  ]);

  return (
    <div className="book-page">
      <h2 className="page-title">Doctors</h2>

      <div className="doctors-grid">
        {doctors.map(doc => (
          <DoctorCard
            key={doc.id}
            hospitalName={doc.hospitalName}
            doctorName={doc.doctorName}
            department={doc.department}
            visitDate={doc.visitDate}
            photoUrl={doc.photoUrl}
          />
        ))}
      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Index</button>
      </Link>
    </div>
  );
}

export default DoctorsPage;
