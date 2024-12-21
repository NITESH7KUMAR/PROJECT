import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // to navigate after successful signup

    const handleSignup = (e) => {
        e.preventDefault();

        // Clear previous error message
        setError('');

        // Basic password validation
        if (password.length < 6) {
            setError('Password must be at least 6 characters long');
            return;
        }

        axios
            .post('http://localhost/Project/PHP/Signup.php', {
                username,
                email,
                password,
            })
            .then((response) => {
                console.log(response.data);  // Check the response data
                if (response.data.message) {
                    alert(response.data.message);  // Show the success message
                    navigate('/login'); 
                } else {
                    alert('Unexpected response from server');
                }
            })
            .catch((error) => {
                console.error("Error signing up:", error);
                setError('There was an error with the signup. Please try again.');
            });
    };

    return (
        <div className='Sign-page'>
        <div className="Signin-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup}>
                <label>
                    Username:
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required 
                    />
                </label>
                <br />
                <button type="submit">Sign Up</button>
            </form>

            {/* Show error if any */}
            {error && <div className="error-message">{error}</div>}

            {/* Signup Link to redirect to login */}
            <div className="login-link">
                <Link to="/login">
                    <button>Already have an account? Login</button>
                </Link>
            </div>
        </div>
        </div>
    );
}

export default Signup;
