import React from 'react';

function DoctorCard({ hospitalName, doctorName, department, visitDate, photoUrl }) {
  return (
    <div className="doctor-card">
      <div className="dc-header">
        <h3 className="dc-title">DOCTOR INFORMATION</h3>
      </div>
      <div className="dc-body">
        <div className="dc-photo-container">
          {photoUrl ? (
            <img src={photoUrl} alt={`Dr. ${doctorName}`} className="dc-photo" />
          ) : (
            <div className="dc-photo-placeholder"></div>
          )}
        </div>
        <div className="dc-info">
          <div className="dc-info-row">
            <span className="dc-label">Hospital Name:</span> <span className="dc-value">{hospitalName}</span>
          </div>
          <div className="dc-info-row">
            <span className="dc-label">Doctor Name:</span> <span className="dc-value">{doctorName}</span>
          </div>
          <div className="dc-info-row">
            <span className="dc-label">Department:</span> <span className="dc-value">{department}</span>
          </div>
          <div className="dc-info-row">
            <span className="dc-label">Visit Date:</span> <span className="dc-value">{visitDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
