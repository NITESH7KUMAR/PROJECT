import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './DonateNow.css';
import Footer from '../Footer/Footer';
import { Dimg11, Dimg2, Dimg33, Dimg44 } from "../assets";

function DonateNow() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(loggedInStatus);
  }, []);

  const handleRegisterClick = () => {
    if (isLoggedIn) {
      navigate('/registration');
    } else {
      alert('Please log in first to register.');
      navigate('/login');
    }
  };

  return (
    <div className="donate">
      <div className="Dcamp">
        <h1>DonateNow</h1>
      </div>
      <div className="Dcamp1">
        <figure>
          <figcaption>
            <p>
              Welcome to Arogya BloodLine, a compassionate community dedicated to saving lives through blood donation. Our mission is simple yet powerful: to ensure that life-saving blood is available to those in need, whenever and wherever it's needed. We organize blood donation camps across various cities, bringing together donors, volunteers, and healthcare professionals to make a difference.
            </p>

            {showMore && (
              <p>
                Whether you're a first-time donor or a seasoned giver, your contribution can save lives and offer hope to patients in critical conditions. Our aim is to inspire more people to join this life-saving mission and make a lasting impact in the community.
              </p>
            )}

            <button onClick={() => setShowMore(!showMore)}>
              {showMore ? "Read Less" : "Read More"}
            </button>
          </figcaption>
        </figure>
      </div>

      <div className="register">
        <p>Register for Blood Donation</p>
        <button onClick={handleRegisterClick}>Register</button>
      </div>

      <div className="donate-image2">
        <h4>Promotion by Munna Bhaiya</h4>
        <p>Donate blood, save lives. Your small act of kindness can be someone's lifeline. Give the gift of life today.</p>

        <div className="gallery">
          <div className="Dimage-container1">
            <img src={Dimg2} alt="Blood Donation Drive" />
          </div>
          <div className="Dimage-container">
            <img src={Dimg11} alt="Blood Donation Participants" />
          </div>
          <div className="Dimage-container2">
            <img src={Dimg44} alt="Blood-Donating Camp" />
          </div>
          <div className="Dimage-container3">
            <img src={Dimg33} alt="Blood-Donating Camp" />
          </div>
        </div>
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default DonateNow;
