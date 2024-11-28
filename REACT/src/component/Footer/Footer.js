import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const scrollTop = () => {
        window.scrollTo({top:0 ,behavior:'smooth'});
       
    };

    return (
        <div className="footer">

            <footer className='footer2'>
                    <div className="foot-panel1" onClick={scrollTop}>
                       <p> Back to Top</p>
                    </div>
           
                <div className="foot-panel2">
                    <ul>
                        <p>Get to know Us</p>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/Donatenow">Donate Blood</Link>
                    </ul>

                    <ul className='contect'>
                        <p>Connect with Us</p>
                        <a href="#facebook">
                            <i className="fab fa-facebook"></i> Facebook
                        </a>
                        <a href="#twitter">
                            <i className="fab fa-twitter "></i> Twitter
                        </a>
                        <a href="#instagram">
                            <i className="fab fa-instagram"></i> Instagram
                        </a>
                        <a href="#linkedin">
                            <i className="fab fa-linkedin"></i> LinkedIn
                        </a>
                        <a href="#phone">
                            <i className="fa fa-phone"></i> 6002207736
                        </a>
                    </ul>
                    <ul>
                        <p>Our Services</p>
                        <a href="#donate-blood">Blood Donation Camps</a>
                        <a href="#city-camps">City Camp Locations</a>
                        <a href="#blood-donation-benefits">Why Donate Blood?</a>
                        <a href="#blood-requests">Blood Donation Requests</a>
                        <a href="#collection-centre">Blood Collection Centre</a>
                    </ul>
                    <ul>
                        <p>Let Us Help You</p>
                        <a href="#your-account">Your Account</a>
                        <a href="#returns">Feedback</a>
                        <a href="#help">Help</a>
                    </ul>
                    {/* <p>© 2024 My Website. All rights reserved.</p> */}
                </div>
            </footer>

        </div>
    );
};

export default Footer;
