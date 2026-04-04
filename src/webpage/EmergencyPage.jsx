import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import pencilIcon from '../assets/pencil.svg';
import phoneIcon from '../assets/phone.svg';

const defaultEmergencyContacts = [
  {
    id: 1,
    image: null,
    name: 'Aniket',
    number: '123456789',
    message: 'Need urgent help come here ASAP'
  }
];

const publicServices = [
  { title: 'Police', number: '100', icon: '🚓', color: '#cce9ff', desc: 'For immediate police assistance' },
  { title: 'Ambulance', number: '102', icon: '🚑', color: '#ffcccc', desc: 'For medical emergencies' },
  { title: 'Fire Brigade', number: '101', icon: '🚒', color: '#fef08a', desc: 'For fire or rescue operations' },
];

export default function EmergencyPage() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('emergencyContacts');
    return saved ? JSON.parse(saved) : defaultEmergencyContacts;
  });

  useEffect(() => {
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleEdit = (id) => {
    const contactToEdit = contacts.find(c => c.id === id);
    if (!contactToEdit) return;

    const newName = window.prompt("Edit Name:", contactToEdit.name);
    if (newName === null) return; // user cancelled

    const newNumber = window.prompt("Edit Number:", contactToEdit.number);
    if (newNumber === null) return;

    const newMessage = window.prompt("Edit Message:", contactToEdit.message);
    if (newMessage === null) return;

    setContacts(prev => prev.map(c =>
      c.id === id
        ? { ...c, name: newName.trim(), number: newNumber.trim(), message: newMessage.trim() }
        : c
    ));
  };

  return (
    <div className="book-page">
      <h2 className="page-title">Emergency</h2>

      <div className="page-content-box" style={{
        border: 'none',
        padding: '20px 0',
        display: 'flex',
        flexDirection: 'column',
        gap: '60px'
      }}>
        {contacts.map((contact) => (
          <div key={contact.id} style={{
            border: '3px solid var(--text-h)',
            borderRadius: '24px',
            minHeight: '220px',
            display: 'flex',
            padding: '30px',
            margin: '0 20px', // slightly indented to fit the overlapping elements beautifully
            position: 'relative',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
          }}>
            {/* Header Badge */}
            <div style={{
              position: 'absolute',
              top: '-25px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: '#cce9ff', // Pastel blue matching the theme
              border: '3px solid var(--text-h)',
              borderRadius: '20px',
              padding: '6px 30px',
              fontFamily: 'var(--heading)',
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--text-h)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              zIndex: 10
            }}>
              Contact Details
            </div>

            {/* Content Container */}
            <div style={{ display: 'flex', width: '100%', gap: '40px', marginTop: '10px' }}>
              {/* Image / Icon */}
              <div style={{
                width: '160px',
                height: '160px',
                flexShrink: 0,
                border: '3px solid var(--text-h)',
                borderRadius: '24px',
                backgroundColor: '#cce9ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {contact.image ? (
                  <img src={contact.image} alt={contact.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <img src="https://randomuser.me/api/portraits/women/99.jpg" alt="phone" style={{ width: 120, opacity: 1, borderRadius: '8%' }} />
                )}
              </div>

              {/* Data Fields */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                gap: '18px',
                flexGrow: 1,
                fontFamily: 'var(--heading)',
                fontSize: '24px',
                color: 'var(--text-h)'
              }}>
                <div><strong>Name:</strong> {contact.name}</div>
                <div><strong>Number:</strong> {contact.number}</div>
                <div style={{ lineHeight: 1.4 }}>
                  <strong>Message:</strong> {contact.message}
                </div>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => handleEdit(contact.id)}
              className="action-btn"
              style={{
                position: 'absolute',
                bottom: '-25px',
                right: '-25px',
                width: '64px',
                height: '64px',
                flex: 'none',
                borderRadius: '50%',
                backgroundColor: '#fef08a', // Cheerful yellow from the sketch
                border: '3px solid var(--text-h)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '2px 4px 0 rgba(0,0,0,0.15)',
                zIndex: 10
              }}
            >
              <img src={pencilIcon} alt="Edit" style={{ width: 28, height: 28 }} />
            </button>

          </div>
        ))}

        {/* Public Emergency Services */}
        {publicServices.map((service, idx) => (
          <div key={`pub-${idx}`} style={{
            border: '3px solid var(--text-h)',
            borderRadius: '20px',
            display: 'flex',
            alignItems: 'center',
            padding: '15px 20px',
            margin: '0 20px', 
            position: 'relative',
            backgroundColor: '#ffffff',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
          }}>
            {/* Header Badge */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: service.color, 
              border: '3px solid var(--text-h)',
              borderRadius: '16px',
              padding: '4px 20px',
              fontFamily: 'var(--heading)',
              fontSize: '18px',
              fontWeight: 700,
              color: 'var(--text-h)',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              zIndex: 10
            }}>
              {service.title}
            </div>

            {/* Image / Icon */}
            <div style={{
              width: '74px',
              height: '74px',
              flexShrink: 0,
              border: '3px solid var(--text-h)',
              borderRadius: '16px',
              backgroundColor: service.color,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '36px',
              overflow: 'hidden'
            }}>
              {service.icon}
            </div>

            {/* Data Fields */}
            <div style={{
              flexGrow: 1,
              fontFamily: 'var(--heading)',
              fontSize: '28px',
              color: 'var(--text-h)',
              marginLeft: '24px'
            }}>
              <strong>Dial: {service.number}</strong>
            </div>

            {/* Call Button */}
            <a
              href={`tel:${service.number}`}
              className="action-btn"
              title={`Call ${service.title}`}
              style={{
                width: '64px',
                height: '64px',
                flexShrink: 0,
                borderRadius: '50%',
                backgroundColor: '#d4f0d4', // Green for calling
                border: '3px solid var(--text-h)',
                display: 'flex', 
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                boxShadow: '2px 4px 0 rgba(0,0,0,0.15)',
                zIndex: 10
              }}
            >
              <img src={phoneIcon} alt="Call" style={{ width: 28, height: 28 }} />
            </a>

          </div>
        ))}
      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Index</button>
      </Link>
    </div>
  );
}
