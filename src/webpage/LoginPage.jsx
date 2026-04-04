import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [locationStatus, setLocationStatus] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
      alert('Please enter both username and password.');
      return;
    }
    
    setLocationStatus('Accessing location...');
    
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Logged in with location", {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });
          setLocationStatus('Location found! Logging in...');
          setTimeout(() => navigate('/content'), 800);
        },
        (err) => {
          console.error(err);
          setLocationStatus('Location access dismissed. Proceeding...');
          setTimeout(() => navigate('/content'), 1000);
        }
      );
    } else {
      setLocationStatus('Geolocation is not supported. Proceeding...');
      setTimeout(() => navigate('/content'), 1000);
    }
  }

  return (
    <div className="book-page">
      <h1 className="page-title" style={{ marginTop: '30px' }}>Login</h1>
      
      <div className="divider">
        <div style={{ padding: '0 15px', color: 'var(--accent)', opacity: 0.8, fontSize: '24px' }}>🔐</div>
      </div>
      
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          
          <div className="form-group">
            <label className="login-label">Username</label>
            <input 
              type="text" 
              className="login-input" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="e.g. KhayalUser" 
            />
          </div>
          
          <div className="form-group">
            <label className="login-label">Password</label>
            <input 
              type="password" 
              className="login-input" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="••••••••" 
            />
          </div>
          
          {locationStatus && <p className="location-status">{locationStatus}</p>}
          
          <button type="submit" className="action-btn login-btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
