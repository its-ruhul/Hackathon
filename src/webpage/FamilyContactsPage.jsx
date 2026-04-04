import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import messageIcon from '../assets/message.svg';
import videoIcon from '../assets/video.svg';
import userIcon from '../assets/user.svg';
import plusIcon from '../assets/plus.svg';

import momImage from '../assets/mom.png';
import dadImage from '../assets/dad.png';
import sisterImage from '../assets/sister.png';

const defaultProfiles = [
  { id: 1, name: 'Aniket Bahu', color: '#ffd1dc', image: momImage },
  { id: 2, name: 'Ruhul Beta', color: '#cce9ff', image: dadImage },
  { id: 3, name: 'Archi Beti', color: '#dcfce7', image: sisterImage },
];

const pastelColors = ['#ffd1dc', '#cce9ff', '#dcfce7', '#fef08a', '#e9d5ff', '#ffedd5', '#fed7aa'];

function FamilyContactsPage() {
  const [profiles, setProfiles] = useState(() => {
    // We use a new key 'familyContactsV3' to clear out the old cached array 
    // and initialize properly with the new names.
    const saved = localStorage.getItem('familyContactsV3');
    return saved ? JSON.parse(saved) : defaultProfiles;
  });

  useEffect(() => {
    localStorage.setItem('familyContactsV3', JSON.stringify(profiles));
  }, [profiles]);

  const handleAddUser = () => {
    const name = window.prompt("Enter new contact's name:");
    if (name && name.trim() !== '') {
      const newProfile = {
        id: Date.now(),
        name: name.trim(),
        color: pastelColors[Math.floor(Math.random() * pastelColors.length)],
        // newly added users won't have a generated image URL yet, handled gracefully.
        image: null
      };
      setProfiles([...profiles, newProfile]);
    }
  };

  return (
    <div className="book-page">
      <h2 className="page-title">Family Contacts</h2>

      <div className="page-content-box" style={{
        border: 'none',
        padding: '10px 0',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)', // Updated to 2x2 grid
        gridAutoRows: '220px',
        gap: '15px',
      }}>
        {profiles.map((profile) => (
          <div key={profile.id} className="contact-card" style={{
            border: '3px solid var(--text-h)',
            borderRadius: '24px',
            backgroundColor: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '15px 15px',
            position: 'relative'
          }}>
            {/* Profile Picture */}
            <div style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              backgroundColor: profile.color,
              border: '3px solid var(--text-h)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1,
              marginTop: '10px',
              overflow: 'hidden'
            }}>
              {profile.image ? (
                <img src={profile.image} alt={profile.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <img src={userIcon} alt="user" style={{ width: 40, opacity: 0.5 }} />
              )}
            </div>

            {/* Name Pill overlapping the circle */}
            <div style={{
              backgroundColor: '#ffd8cb',
              border: '3px solid var(--text-h)',
              borderRadius: '20px',
              padding: '4px 16px',
              marginTop: '-15px', // Overlap effect
              zIndex: 2,
              fontFamily: 'var(--heading)',
              fontSize: '16px',
              fontWeight: 600,
              color: 'var(--text-h)',
              minWidth: '80px',
              textAlign: 'center'
            }}>
              {profile.name}
            </div>

            {/* Action Buttons */}
            <div style={{
              display: 'flex',
              gap: '12px',
              marginTop: 'auto', // Push to bottom
              width: '100%',
              justifyContent: 'center'
            }}>
              <a href="sms:+1234567890?body=Hello%20there!">
                <button className="action-btn">
                  <img src={messageIcon} alt="SMS" style={{ width: 24, height: 24 }} />
                </button>
              </a>

              <a href="https://wa.me/917635835182">
                <button className="action-btn">
                  <img src={videoIcon} alt="Video" style={{ width: 24, height: 24 }} />
                </button>
              </a>
            </div>
          </div>
        ))}

        {/* The Plus Icon Card */}
        <div
          onClick={handleAddUser}
          style={{
            border: '3px dashed var(--text-h)',
            borderRadius: '24px',
            backgroundColor: 'transparent',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'background-color 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.4)'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
        >
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            backgroundColor: '#ffffff',
            border: '3px solid var(--text-h)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img src={plusIcon} alt="Add new user" style={{ width: 30 }} />
          </div>
          <p style={{ marginTop: '10px', fontWeight: 'bold', fontSize: '16px', color: 'var(--text-h)', fontFamily: 'var(--heading)' }}>
            Add Contact
          </p>
        </div>

      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Index</button>
      </Link>
    </div>
  );
}

export default FamilyContactsPage;
