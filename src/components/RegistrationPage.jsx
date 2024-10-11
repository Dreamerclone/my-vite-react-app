// src/components/RegistrationPage.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegistrationPage.css'; // Ensure this path is correct

const RegistrationPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Registered:', username, password);
    alert('Registration successful!');
    navigate('/login');
  };

  return (
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
      </form>
      <button onClick={() => navigate('/login')} className="btn btn-secondary">
        Go to Login
      </button>
    </div>
  );
};

export default RegistrationPage;
