// src/components/LoginPage.jsx

import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', { email, password });
  };

  return (
    <div className="container">
      <h1 className="header">Login</h1>
      <form onSubmit={handleSubmit} className="form">
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
        <button type="submit" className="button">Login</button>
      </form>
      <div className="footer">
        <p>Don't have an account?</p>
        <button onClick={() => window.location.href = '/register'} className="button register-button">Register</button>
      </div>
    </div>
  );
};

export default LoginPage;
