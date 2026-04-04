import React from 'react';
import { Link } from 'react-router';

function CoverPage() {
  return (
    <div className="book-page cover-page" style={{ position: 'relative', overflow: 'hidden' }}>
      
      {/* Decorative colored background shapes */}
      <div style={{ position: 'absolute', top: '5%', left: '-5%', width: '250px', height: '250px', backgroundColor: '#ffb6c1', borderRadius: '50%', filter: 'blur(50px)', opacity: 0.6, zIndex: -1 }}></div>
      <div style={{ position: 'absolute', bottom: '15%', right: '-10%', width: '350px', height: '350px', backgroundColor: '#cce9ff', borderRadius: '50%', filter: 'blur(60px)', opacity: 0.6, zIndex: -1 }}></div>
      <div style={{ position: 'absolute', top: '45%', right: '20%', width: '150px', height: '150px', backgroundColor: '#fef08a', borderRadius: '50%', filter: 'blur(40px)', opacity: 0.6, zIndex: -1 }}></div>

      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        padding: '50px 80px',
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        border: '3px solid var(--text-h)',
        borderRadius: '24px',
        boxShadow: '12px 14px 0px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(10px)',
        transform: 'rotate(-2deg)',
        marginBottom: '40px',
        position: 'relative',
        zIndex: 1
      }}>
        <h1 className="cover-title" style={{ borderBottom: 'none', paddingBottom: '0', fontSize: '110px', color: 'var(--text-h)', textShadow: '4px 4px 0px #fef08a', lineHeight: 1 }}>Khayal</h1>
        <div style={{ height: '4px', width: '100%', backgroundColor: 'var(--text-h)', margin: '20px auto', borderRadius: '4px' }}></div>
        <p className="cover-subtitle" style={{ margin: '0', fontSize: '32px', color: 'var(--text-h)', fontWeight: '700' }}>Care. Compassion. Memory.</p>
      </div>
      
      <div style={{ zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', marginTop: '30px' }}>
        <Link to="/content" style={{ textDecoration: 'none' }}>
          <button 
            className="enter-button" 
            style={{ 
              backgroundColor: '#cce9ff', 
              border: '3px solid var(--text-h)',
              boxShadow: '4px 6px 0px rgba(0,0,0,0.15)',
              fontWeight: 'bold',
              fontSize: '28px',
              padding: '15px 50px',
              borderRadius: '50px',
              color: 'var(--text-h)',
              marginTop: '0',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#a4d3fc'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#cce9ff'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Open Book
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CoverPage;
