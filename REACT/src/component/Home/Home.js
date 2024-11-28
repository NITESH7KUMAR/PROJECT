import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Hcarousel from './Hcarousel';
import Footer from '../Footer/Footer';
import {
  img1, img2, img3, img4, img5,
  img6
} from "../assets";


function Home() {
  return (

      <div className='home'>
        <div className='heading'>
          <h1>Life-Saving Gift<br />Empowering Hope</h1>
        </div>

        <div className='home-image'>
          <img src={img1} alt="Blood-Donating Camp" />
          <div>
            <h2>We organize, empower,and deliver<br/>
            life-saving blooddonations <br/>
            to support communities in need.</h2>
          </div>
          <div className='home-image1'>
            <img src={img3} alt="Blood-Donating Camp" />
          </div>
        </div>
        <h4>Gallery</h4>
        <div className='home-image2'>
          
          <div className='himage-container'>
            <img src={img4} alt="Blood-Donating Camp" />
            <p className="image-caption">Welcome to Arogya BloodLine, a compassionate community dedicated 
                         that life-saving blood is available to those in need, whenever and wherever it's needed.
                         We organize blood donation camps across various cities, bringing together donors, volunteers, 
                         and healthcare professionals to make a difference.</p>
          </div>
          <div className='himage-container'>
            <img src={img5} alt="Blood-Donating Camp" />
            <p className="image-caption">Blood Donation Camp was organized in the Institute in association with SDM Hospital, Ujire 
                        on 3rd April 2019. Dr. Prabhash Kumar, Medical Officer, SDM Hospital was the Chief Guest 
                        during inauguration. A total of 367 units of blood were collected during the camp.
                        The activity of blood donation was started in the morning 10:00 am </p>
          </div>
        </div>

        <div className='home-image3'>
          <img src={img6} alt="Blood-Donating Camp" />
        </div>

        <div className='home-about'>
        <h2>Great care for<br/> great lives.</h2>
        
        <div className='home-content'>
        <div className='about-image'>
            <img src={img2} alt="Blood-Donating Camp" />
          </div>
          <div className='about-content1'>
            <h5>We put lives first, knowing that every drop of donated blood can make a world of difference. 
                By inspiring communities to give,we help save lives, build resilience, 
                and create lasting impact for those in need.<br/><br/>Our commitment fuels our mission to serve 
                with compassion and care, ensuring quality, safety, and support for every donation. Together, 
                we make a difference—one donation at a time.
            </h5>
            <Link to='/about'>  <button>About Us</button></Link>
          </div>
          
          </div>  
        </div>
        <div className='Hcarousel'>
          <h1>What's New</h1>
          <Hcarousel/>
        </div>
        <div className='Footer'>
        <Footer/>
        </div>
    </div>

  );
 
};

export default Home;
