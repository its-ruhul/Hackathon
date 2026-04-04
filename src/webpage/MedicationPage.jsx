import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { medicinesData } from '../scripts/medicinesData';
import pillIcon from '../assets/pill.svg';
import plusIcon from '../assets/plus.svg';

export default function MedicationPage() {
  const [medicines, setMedicines] = useState(() => {
    const saved = localStorage.getItem('medicinesList');
    return saved ? JSON.parse(saved) : medicinesData;
  });

  useEffect(() => {
    localStorage.setItem('medicinesList', JSON.stringify(medicines));
    // Since NotificationBanner reads from medicinesData, ideally we'd use context, 
    // but saving it here allows it to grab updates if we reload for now.
  }, [medicines]);

  const handleAddMedicine = () => {
    const name = window.prompt("Enter new medicine name:");
    if (!name) return;
    const time = window.prompt("Enter time (e.g. 09:00 AM):");
    if (!time) return;
    const instruction = window.prompt("Enter instruction (e.g. have after meal):");
    if (!instruction) return;

    const newMed = {
      id: Date.now(),
      name: name.trim(),
      time: time.trim(),
      icon: pillIcon,
      instruction: instruction.trim()
    };

    setMedicines([...medicines, newMed]);
  };

  const pastelColors = ['#fef08a', '#cce9ff', '#ffd1dc', '#dcfce7', '#e9d5ff'];

  return (
    <div className="book-page">
      <h2 className="page-title">Medication</h2>

      <div className="page-content-box" style={{
        border: 'none',
        padding: '0',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px'
      }}>
        {medicines.map((medicine, index) => (
          <div key={medicine.id} className="medication-card" style={{
            backgroundColor: '#ffffff',
            border: '3px solid var(--text-h)',
            borderRadius: '24px',
            padding: '20px',
            display: 'flex',
            alignItems: 'flex-start',
            gap: '20px'
          }}>
            {/* Left Icon Box (Pastel) */}
            <div style={{
              backgroundColor: pastelColors[index % pastelColors.length],
              border: '3px solid var(--text-h)',
              borderRadius: '20px',
              minWidth: '90px',
              height: '90px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0
            }}>
              <img src={medicine.icon || pillIcon} alt="medicine icon" style={{ width: 44, height: 44 }} />
            </div>

            {/* Right Information Section */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', flexGrow: 1, paddingTop: '5px' }}>
              {/* Medicine at Time Pill */}
              <div style={{
                backgroundColor: '#ffd8cb', // consistent with contact page name pills
                border: '3px solid var(--text-h)',
                borderRadius: '16px',
                padding: '6px 16px',
                fontFamily: 'var(--heading)',
                fontSize: '18px',
                fontWeight: 700,
                color: 'var(--text-h)',
                alignSelf: 'flex-start',
                boxShadow: '2px 2px 0 rgba(0,0,0,0.1)'
              }}>
                {medicine.name} at {medicine.time}
              </div>

              {/* Instructions Text */}
              <div style={{
                fontFamily: 'var(--body)',
                fontSize: '18px',
                fontWeight: 600,
                color: 'var(--text-h)',
                lineHeight: 1.4
              }}>
                Instructions: ({medicine.instruction})
              </div>
            </div>
          </div>
        ))}

        {/* Plus Button Card */}
        <div
          onClick={handleAddMedicine}
          className="medication-card"
          style={{
            backgroundColor: 'transparent',
            border: '3px dashed var(--text-h)',
            borderRadius: '24px',
            padding: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '15px'
          }}
        >
          <div style={{
            backgroundColor: '#ffffff',
            border: '3px solid var(--text-h)',
            borderRadius: '50%',
            width: '60px',
            height: '60px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}>
            <img src={plusIcon} alt="plus icon" style={{ width: 30, height: 30 }} />
          </div>
          <div style={{
            fontFamily: 'var(--heading)',
            fontSize: '20px',
            fontWeight: 700,
            color: 'var(--text-h)'
          }}>
            Add Notification
          </div>
        </div>

      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Index</button>
      </Link>
    </div>
  );
}
