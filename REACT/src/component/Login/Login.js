import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login({ onLogin }) {
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        axios
            .post('http://localhost/Project/PHP/Login.php', {
                identifier: identifier,
                password: password
            })
            .then((response) => {
                if (response.data.success) {
                    alert("Welcome Back!");
                    onLogin(); // Update login state in the parent component
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
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
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
    );
}

export default Login;
