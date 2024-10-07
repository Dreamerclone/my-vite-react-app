// src/components/RegistrationPage.jsx

import React, { useState } from 'react';

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Register:', { username, email, password });
  };

  return (
    <div className="container">
      <h1 className="header">Register</h1>
      <form onSubmit={handleSubmit} className="form">
        <label>Username</label>
        <input
          type="text"
          className="input-field"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label>Email</label>
        <input
          type="email"
          className="input-field"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          className="input-field"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="button">Register</button>
      </form>
      <div className="footer">
        <p>Already have an account?</p>
        <button onClick={() => window.location.href = '/login'} className="button register-button">Login</button>
      </div>
    </div>
  );
};

export default RegistrationPage;
