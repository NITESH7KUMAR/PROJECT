import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login({ onLogin }) {
    const [identifier, setIdentifier] = useState(''); 
    const [password, setPassword] = useState(''); 
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        axios
            .post('https://eb29-125-16-189-244.ngrok-free.app/PROJECT/PHP/Login.php', {
                identifier: identifier,
                password: password
            })
            .then((response) => {
                if (response.data.success) {
                    alert("Welcome Back!");

                    // Store username in localStorage for access in Navbar or other components
                    localStorage.setItem('username', response.data.username); 

                    // Notify parent component about login status
                    onLogin();

                    navigate('/');
                } else {
                    alert(response.data.message || "Invalid credentials. Please try again.");
                }
            })
            .catch((error) => {
                console.error("Error logging in:", error);
                alert("An error occurred. Please try again.");
            });
    };

    return (
        <div className="login-page"> 
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label>
                        Username or Email:
                        <input
                            type="text"
                            value={identifier}
                            onChange={(e) => setIdentifier(e.target.value)}
                            required
                            placeholder="Enter your username or email"
                        />
                    </label>
                    <label>
                        Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            placeholder="Enter your password"
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
                <div className="signup-link">
                    <Link to="/signup">
                        <button>Don't have an account? Signup</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Login;
