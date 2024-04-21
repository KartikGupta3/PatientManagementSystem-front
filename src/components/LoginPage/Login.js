// LoginPage.js
import React, { useState } from 'react';
import './Login.css';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you can add logic to authenticate the user
    if (username === 'admin' && password === 'password') {
      console.log('Login successful!');
      // Redirect or navigate to the dashboard or another page
    } else {
      console.log('Invalid username or password');
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-brand">
          WeCare <span className="navbar-icon">🩺</span>
        </div>
        <ul className="nav-links">
          <li>
            <button className="nav-link">Home</button>
          </li>
          <li>
            <button className="nav-link">About</button>
          </li>
          <li>
            <button className="nav-link">Contact</button>
          </li>
        </ul>
      </nav>
      <div className="login-page">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="form-actions">
            <button type="submit" className="login-button">
              Login
            </button>
            <button className="forgot-password">Forgot Password?</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;