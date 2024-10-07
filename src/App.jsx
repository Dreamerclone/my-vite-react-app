import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import Router components
import './App.css'; // Ensure you have the correct CSS import
import LoginPage from './components/LoginPage'; // Import the LoginPage component
import RegistrationPage from './components/RegistrationPage'; // Import the RegistrationPage component

function App() {
  return (
    <Router>
      <>
        <h1>Welcome to My App</h1> {/* Optional title for your app */}

        {/* Navigation Links */}
        <nav>
          <Link to="/login">Login</Link> | 
          <Link to="/register">Register</Link>
        </nav>

        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
