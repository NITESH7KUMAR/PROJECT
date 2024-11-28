import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Footer from '../Footer/Footer';
import {
  img16, img18, img19, img20,
  img22
} from "../assets";

function About() {
  const [showMore, setShowMore] = useState(false);

  // Additional state for managing Read More functionality for captions
  const [showCaption, setShowCaption] = useState({
    img18: false,
    img19: false,
    img22: false
  });

  const toggleCaption = (img) => {
    setShowCaption((prevState) => ({
      ...prevState,
      [img]: !prevState[img]
    }));
  };

  return (
    <div className='about'>
      <div className='camp'>
        <h1>Blood Donation Camp</h1>
        </div>
    <div className='camp1'>
        <figure>
            <figcaption>
        <p>Welcome to Arogya BloodLine, a compassionate community dedicated 
           to saving lives through blood donation. Our mission is simple yet powerful: to ensure 
           that life-saving blood is available to those in need, whenever and wherever it's needed.
           We organize blood donation camps across various cities, bringing together donors, volunteers, 
           and healthcare professionals to make a difference.
        </p>

        {/* Toggle for additional content */}
        {showMore && (
          <p>
            Whether you're a first-time donor or a seasoned giver, your contribution can save lives and
            offer hope to patients in critical conditions. Our aim is to inspire more people to join this
            life-saving mission and make a lasting impact in the community.
          </p>
        )}

        <button onClick={() => setShowMore(!showMore)}>
          {showMore ? "Read Less" : "Read More"}
        </button>
        </figcaption>
        </figure>
    </div>

      <div className='h1'>
        <h1>Donate Blood, Save Lives<br />Be the Reason <br/>Someone Smiles Again</h1>
      </div>

      <div className='about-image'>
        <img src={img16} alt="Blood-Donating Camp" />
        <div>
          <h2>We organize, empower, and deliver<br/>
          life-saving blood donations <br/>
          to support communities in need.</h2>
        </div>
      </div>

      <div className='about-image2'>
        <h4>Campaign</h4>
        <p>Our mission is to provide a platform for blood donation camps and connect donors with hospitals</p>

        <div className="campaign-gallery">
          {/* Image 18 */}
          <div className="image-container">
            <img src={img18} alt="Blood Donation Drive" />
            <figure>
              <figcaption>
                {showCaption.img18 ? (
                  <>
                    <p>This image shows a successful blood donation drive.</p>
                    <button onClick={() => toggleCaption("img18")}>Read Less</button>
                  </>
                ) : (
                  <>
                    <p>Blood Donation Camp was organized in the Institute in association with SDM Hospital, Ujire 
                        on 3rd April 2019. Dr. Prabhash Kumar, Medical Officer, SDM Hospital was the Chief Guest 
                        during inauguration. A total of 367 units of blood were collected during the camp.
                        The activity of blood donation was started in the morning 10:00 am  
                        </p>
                    <button onClick={() => toggleCaption("img18")}>Read More</button>
                  </>
                )}
              </figcaption>
            </figure>
          </div>

          {/* Image 19 */}
          <div className="image-container">
            <img src={img19} alt="Blood Donation Participants" />
            <figure>
              <figcaption>
                {showCaption.img19 ? (
                  <>
                    <p>Our volunteers actively participated in the donation camp, ensuring a smooth operation.</p>
                    <button onClick={() => toggleCaption("img19")}>Read Less</button>
                  </>
                ) : (
                  <>
                    <p>Hyderabad, 23rd October 2019: If you are a blood donor, you are a saviour to someone, 
                        somewhere, who received your gracious gift of life.Hyderabad conducted a blood donation camp 
                        the CSR Club in an organization which is a strong initiatives and conducts about 500 blood 
                        donation drives every day.</p>
                    <button onClick={() => toggleCaption("img19")}>Read More</button>
                  </>
                )}
              </figcaption>
            </figure>
          </div>

          {/* Image 22 */}
          <div className="image-container">
            <img src={img22} alt="Blood-Donating Camp" />
            <figure>
              <figcaption>
                {showCaption.img22 ? (
                  <>
                    <p>This image highlights a blood donation camp in full swing with enthusiastic donors.</p>
                    <button onClick={() => toggleCaption("img22")}>Read Less</button>
                  </>
                ) : (
                  <>
                    <p>Feb. 07, 2023 - BAIF Pune Head Office organized a Blood Donation drive in association with 
                        Janakalyan Blood Bank with the active participation of 109 volunteers from BAIF staff, of which 
                        83 qualified to donate blood, saving precious lives.yderabad conducted a blood donation camp 
                        The activity of blood donation was started in the morning </p>
                    <button onClick={() => toggleCaption("img22")}>Read More</button>
                  </>
                )}
              </figcaption>
            </figure>
          </div>
        </div>

      </div>

      <div className='about-about'>
        <h2>Great care for<br/> great lives.</h2>
        <div className='about-content'>
          <div className='donate-image'>
            <img src={img20} alt="Blood-Donating Camp" />
          </div>
          <div className='about-content1'>
            <h5>We put lives first, knowing that every drop of donated blood can make a world of difference. 
                By inspiring communities to give, we help save lives, build resilience, 
                and create lasting impact for those in need.<br/><br/>Our commitment fuels our mission to serve 
                with compassion and care, ensuring quality, safety, and support for every donation. Together, 
                we make a difference—one donation at a time.
            </h5>
            <Link to='/donateNow'><button>Donate Now</button></Link>
          </div>
        </div>  
      </div>

      <div className='Footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default About;
