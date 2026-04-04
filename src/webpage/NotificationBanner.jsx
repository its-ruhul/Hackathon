import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { medicinesData } from '../scripts/medicinesData';

dayjs.extend(customParseFormat);

export default function NotificationBanner() {
  const [activeNotifications, setActiveNotifications] = useState([]);

  useEffect(() => {
    // Check medication times every minute
    const interval = setInterval(() => {
      const now = dayjs();
      const newNotifications = [];

      // Actively fetch from localStorage so new inputs are parsed dynamically
      const savedMeds = localStorage.getItem('medicinesList');
      const activeMeds = savedMeds ? JSON.parse(savedMeds) : medicinesData;

      activeMeds.forEach(med => {
        // Parse the medicine time for today
        const medTime = dayjs(med.time, 'hh:mm A');
        
        // If current hour and minute match exactly
        if (now.hour() === medTime.hour() && now.minute() === medTime.minute()) {
          newNotifications.push(med);
        }
      });

      if (newNotifications.length > 0) {
        // Prevent duplicate spam within the exact same minute block by matching IDs
        setActiveNotifications(prev => {
          const combined = [...prev];
          newNotifications.forEach(n => {
            if (!combined.find(p => p.id === n.id)) combined.push(n);
          });
          return combined;
        });
      }
    }, 1000 * 30); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const dismiss = (id) => {
    setActiveNotifications(prev => prev.filter(n => n.id !== id));
  };

  if (activeNotifications.length === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      zIndex: 9999,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
      {activeNotifications.map(med => (
        <div key={med.id} style={{
          backgroundColor: '#ffb5a7',
          border: '3px solid var(--text-h)',
          borderRadius: '16px',
          padding: '16px 20px',
          boxShadow: '4px 6px 15px rgba(0,0,0,0.15)',
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          animation: 'slideIn 0.4s cubic-bezier(0.25, 1, 0.5, 1)'
        }}>
          <img src={med.icon} alt="medicine" style={{ width: 32, height: 32 }} />
          <div>
            <div style={{ fontWeight: 'bold', fontFamily: 'var(--heading)' }}>Time for {med.name}</div>
            <div style={{ fontSize: '14px' }}>{med.instruction}</div>
          </div>
          <button 
            onClick={() => dismiss(med.id)}
            style={{
              marginLeft: '10px',
              backgroundColor: 'transparent',
              border: '2px solid var(--text-h)',
              borderRadius: '50%',
              width: '32px',
              height: '32px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}
