import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './Accounts.css';

function Accounts({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const toggleDropdown = () => {
    if (!isLoggedIn) {
      alert('Please log in first to access your account.');
      return navigate('/Login');
    }
    setMessage('');
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="dropdown">
        {/* Only show the dropdown button if the user is logged in */}
        {isLoggedIn ? (
          <button className="dropbtn" onClick={toggleDropdown}>Accounts</button>
        ) : (
          <button className="dropbtn" onClick={toggleDropdown}>Accounts</button>
        )}

        {/* Dropdown menu */}
        <ul className={`dropdown-content ${isOpen ? 'show' : 'hide'}`}>
          <div className="expertise-container">
            <div className="expertise-section">
              <h3>Our Mission</h3>
              <Link to="/profile"><li>Profile</li></Link>
              <Link to="/registration"><li>Registration</li></Link>
              <Link to="/blood_recipient-reg"><li>Emergency Support</li></Link>
              <Link to="/"><li>Blood Camps</li></Link>
              <Link to="/about"><li>Donor Network</li></Link>
              <Link to="/"><li>Health Safety</li></Link>
              <Link to="/donateNow"><li>Awareness Drives</li></Link>
            </div>
          </div>
        </ul>
        
        {/* Display message if the user is not logged in */}
        {!isLoggedIn && message && <div className="login-message">{message}</div>}
      </div>
    </>
  );
}

export default Accounts;
