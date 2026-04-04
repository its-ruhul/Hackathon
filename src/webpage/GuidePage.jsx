import React from 'react';
import { Link } from 'react-router';

function GuidePage() {
  return (
    <div className="book-page">
      <h2 className="page-title">How To Use Khayal</h2>

      <div className="page-content-box" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        padding: '30px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        
        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontFamily: 'var(--heading)', color: 'var(--accent)', fontSize: '28px', marginBottom: '8px', 
                       borderBottom: '2px solid #f2e1e1', paddingBottom: '5px' }}>
             Navigating the App
          </h3>
          <p style={{ fontSize: '18px', margin: 0, fontWeight: '500' }}>
            Use the <strong>Table of Contents (Index)</strong> to jump to different sections of the book. Alternatively, you can always click the <strong>Khayal Logo</strong> at the top left of the screen to return to the cover page.
          </p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontFamily: 'var(--heading)', color: '#8b3a30', fontSize: '24px', marginBottom: '8px' }}>
            📱 I: Family Contacts
          </h3>
          <p style={{ fontSize: '18px', margin: 0 }}>
            Here you can find numbers for your loved ones. Tap on any contact card to initiate a call or send a quick message in one tap.
          </p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontFamily: 'var(--heading)', color: '#8b3a30', fontSize: '24px', marginBottom: '8px' }}>
            💊 II: Medication
          </h3>
          <p style={{ fontSize: '18px', margin: 0 }}>
            Keep track of your daily pills. The app will visually remind you which medications to take in the morning, afternoon, and evening. Check them off once taken!
          </p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontFamily: 'var(--heading)', color: '#8b3a30', fontSize: '24px', marginBottom: '8px' }}>
            🚑 III: Emergency
          </h3>
          <p style={{ fontSize: '18px', margin: 0 }}>
            In an urgent situation, open this page. It stores vital emergency contacts that you can instantly trigger an alert to with a pre-written message.
          </p>
        </div>

        <div style={{ marginBottom: '10px' }}>
          <h3 style={{ fontFamily: 'var(--heading)', color: '#8b3a30', fontSize: '24px', marginBottom: '8px' }}>
            🩺 IV: Doctors
          </h3>
          <p style={{ fontSize: '18px', margin: 0 }}>
            Contains a grid of your doctors and upcoming medical appointments so you never forget a check-up.
          </p>
        </div>
      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Index</button>
      </Link>
    </div>
  );
}

export default GuidePage;
