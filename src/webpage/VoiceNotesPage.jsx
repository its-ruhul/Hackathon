import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';

const blobToBase64 = (blob) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
};

function VoiceNotesPage() {
  const [recordings, setRecordings] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    const saved = localStorage.getItem('voiceNotes');
    if (saved) {
      setRecordings(JSON.parse(saved));
    }
  }, []);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorderRef.current.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/webm' });
        const base64Audio = await blobToBase64(audioBlob);
        
        const newRecording = {
          id: Date.now(),
          date: new Date().toLocaleString(),
          audioData: base64Audio
        };

        const updated = [...recordings, newRecording];
        setRecordings(updated);
        try {
          localStorage.setItem('voiceNotes', JSON.stringify(updated));
        } catch (e) {
          alert("Storage limit reached! Please delete some old recordings if you wish to save new ones.");
        }
        
        // Ensure all microphone tracks are fully stopped
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (err) {
      console.error("Error accessing microphone:", err);
      alert("Microphone access denied or not available. Please allow site permissions.");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const deleteRecording = (id) => {
    const updated = recordings.filter(r => r.id !== id);
    setRecordings(updated);
    localStorage.setItem('voiceNotes', JSON.stringify(updated));
  };

  return (
    <div className="book-page">
      <h2 className="page-title">Voice Notes</h2>

      <div className="page-content-box" style={{ 
        display: 'flex', flexDirection: 'column', gap: '20px', padding: '24px', backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
      }}>
        
        {/* Record Button Section */}
        <div style={{ display: 'flex', justifyContent: 'center', margin: '10px 0 20px 0' }}>
          {!isRecording ? (
            <button 
              onClick={startRecording}
              className="action-btn"
              style={{
                backgroundColor: '#cce9ff', /* matching theme pastel */
                padding: '15px 40px',
                fontSize: '22px',
                fontFamily: 'var(--heading)',
                fontWeight: 'bold',
                color: 'var(--text-h)',
                boxShadow: '4px 6px 0 rgba(0,0,0,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}
            >
              <div style={{ width: '16px', height: '16px', backgroundColor: 'red', borderRadius: '50%' }}></div>
               Record Note
            </button>
          ) : (
            <button 
              onClick={stopRecording}
              className="action-btn"
              style={{
                backgroundColor: '#ffcccc',
                padding: '15px 40px',
                fontSize: '22px',
                fontFamily: 'var(--heading)',
                fontWeight: 'bold',
                color: '#8b3a30',
                boxShadow: '2px 4px 0 rgba(0,0,0,0.15)',
                animation: 'pulse 1s infinite alternate',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '12px'
              }}
            >
              <div style={{ width: '16px', height: '16px', backgroundColor: '#8b3a30', borderRadius: '4px' }}></div>
               Stop Recording
            </button>
          )}
        </div>

        {/* Recordings List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {recordings.length === 0 ? (
            <p style={{ textAlign: 'center', fontSize: '18px', color: '#666', fontStyle: 'italic', padding: '20px' }}>
              No voice notes recorded yet.
            </p>
          ) : (
            recordings.map((rec) => (
              <div key={rec.id} style={{
                border: '3px solid var(--text-h)',
                borderRadius: '20px',
                padding: '16px 20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '14px',
                backgroundColor: '#fef08a'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: 'var(--heading)', fontSize: '20px', fontWeight: 'bold', color: 'var(--text-h)' }}>
                    Memory ({rec.date})
                  </span>
                  <button 
                    onClick={() => deleteRecording(rec.id)} 
                    title="Delete Note"
                    style={{
                      background: '#ffcccc', 
                      border: '2px solid var(--text-h)', 
                      borderRadius: '10px',
                      color: '#8b3a30', 
                      cursor: 'pointer', 
                      padding: '6px 8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '2px 2px 0 rgba(0,0,0,0.1)',
                      transition: 'transform 0.1s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.backgroundColor = '#ffb3b3'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.backgroundColor = '#ffcccc'; }}
                  >
                    <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                  </button>
                </div>
                <audio controls src={rec.audioData} style={{ width: '100%', outline: 'none', height: '40px' }} />
              </div>
            ))
          )}
        </div>

      </div>

      <Link to="/content" style={{ marginTop: 'auto', alignSelf: 'center' }}>
        <button className="back-button">Back to Index</button>
      </Link>
    </div>
  );
}

export default VoiceNotesPage;
