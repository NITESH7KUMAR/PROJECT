import React, { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import Contact from './component/Contact/Contact.js';
import Navbar from './component/Navbar/Navbar.js';
import Signup from './component/Signup/Signup.js';
import Login from './component/Login/Login.js';

function App() {
    // Manage login state in the parent component
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    // Update login state in localStorage
    const handleLoginStateChange = (loggedIn) => {
        localStorage.setItem('isLoggedIn', loggedIn);
        setIsLoggedIn(loggedIn); // Update state to trigger re-render
    };

    return (
        <BrowserRouter>
            {/* Pass isLoggedIn state and handleLoginStateChange to Navbar */}
            <Navbar isLoggedIn={isLoggedIn} onLoginStateChange={handleLoginStateChange} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/signup" element={<Signup />} />
                <Route 
                    path="/login" 
                    element={<Login onLogin={() => handleLoginStateChange(true)} />} 
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
