import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home.js';
import About from './component/About/About.js';
import Contact from './component/Contact/Contact.js';
import DonateNow from './component/Donatenow/DonateNow.js';
import Navbar from './component/Navbar/Navbar.js';
import Signup from './component/Signup/Signup.js';
import Login from './component/Login/Login.js';
import ProfilePage from './component/Accounts/Profile.js';
import Registration from './component/Accounts/Registration.js';
import BloodRecipient from './component/Accounts/blood_recipient-reg.js';
import ProtectedRoute from './component/Route/ProtectRoute'; 
function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

    const handleLoginStateChange = (loggedIn) => {
        localStorage.setItem('isLoggedIn', loggedIn);
        setIsLoggedIn(loggedIn);
    };

    return (
        <BrowserRouter>
            <Navbar isLoggedIn={isLoggedIn} onLoginStateChange={handleLoginStateChange} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/donatenow" element={<DonateNow />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login onLogin={() => handleLoginStateChange(true)} />} />

                {/* Use ProtectedRoute to wrap the protected routes */}
                <Route path="/profile" element={<ProtectedRoute element={<ProfilePage />} isAuthenticated={isLoggedIn} />} />
                <Route path="/registration" element={<ProtectedRoute element={<Registration />} isAuthenticated={isLoggedIn} />} />
                <Route path="/blood_recipient-reg" element={<ProtectedRoute element={<BloodRecipient />} isAuthenticated={isLoggedIn} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
