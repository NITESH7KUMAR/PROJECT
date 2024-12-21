import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import axios from 'axios';
import Accounts from '../Accounts/Accounts.js';

const Navbar = ({ isLoggedIn, onLoginStateChange }) => {
    const [username, setUsername] = useState('');

    useEffect(() => {
        if (isLoggedIn) {
            setUsername(localStorage.getItem('username'));
        } else {
            setUsername('');
        }
    }, [isLoggedIn]);

    const handleLogout = () => {
        axios
            .post('http://localhost/Project/PHP/Logout.php')
            .then((response) => {
                if (response.data.success) {
                    // Update login state to false
                    onLoginStateChange(false); // This triggers a re-render in the parent
                    localStorage.removeItem('username');
                    alert("Logged out successfully");
                } else {
                    alert("Logout failed, please try again.");
                }
            })
            .catch((error) => {
                console.error("Error logging out:", error);
                alert("An error occurred during logout. Please try again.");
            });
    };

    return (
        <header className="header">
            <nav className="navbar">
                <div className="logo">Humaan</div>
                <ul className="nav-links">
                    <li className="nav-links1">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="nav-links1">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="nav-links1">
                        <Link to="/Donatenow">DonateNow</Link>
                    </li>
                    <li className="nav-links1">
                        <Accounts isLoggedIn={isLoggedIn} />
                    </li>
                </ul>

                <div className="user-info">
                    {username ? (
                        <div className="user-info-logged">
                            <p>Welcome, {username}</p>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <div className="user-info-logged-out">
                            <p>Please Login</p>
                            <Link to="/login">Login</Link>
                        </div>
                    )}
                </div>

                <div className="logo1">Humaan</div>
            </nav>
        </header>
    );
};

export default Navbar;
