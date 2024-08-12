import React from 'react';
import '../../styles/sub-style/Footer.css';
import contactImg from '../../assets/images.jpeg'; // Ensure the path is correct
import fbimg from '../../assets/icons/facebook.png'
import Igimg from '../../assets/icons/instagram.png'
import Ytimg from '../../assets/icons/youtube.png'
import Ttimg from '../../assets/icons/twitter.png'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <img src={contactImg} alt="Logo" className="footer-logo" />
          <p>Since January 2017</p>
          <p>Visitors</p>
          <h2>4005513</h2>
        </div>
        <div className="footer-middle">
          <ul>
            <li><a href="#who-we-are">WHO WE ARE</a></li>
            <li><a href="#careers">CAREERS</a></li>
            <li><a href="#media-centre">MEDIA CENTRE</a></li>
            <li><a href="#privacy-policy">PRIVACY POLICY</a></li>
          </ul>
          <ul>
            <li><a href="#production-units">PRODUCTION UNITS</a></li>
            <li><a href="#contact-us">CONTACT US</a></li>
            <li><a href="#faqs">FAQs</a></li>
          </ul>
        </div>
        <div className="footer-right">
          <div className="social-media">
          <img src={fbimg} alt="facebook" className="footer-icon" />
          <div className='l'>|</div>
          <img src={Igimg} alt="Instagram" className="footer-icon" />
          <div className='l'>|</div>
          <img src={Ytimg} alt="Youtube" className="footer-icon" />
          <div className='l'>|</div>
          <img src={Ttimg} alt="twitter" className="footer-icon" />
          
          </div>
          <div className="subscribe-form">
            <input type="text" placeholder="GET NEW UPDATES" />
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-logos">
          <a href="#"><img src={contactImg} alt="Company Logo" /></a>
          <a href="#"><img src={contactImg} alt="Company Logo" /></a>
          <a href="#"><img src={contactImg} alt="Company Logo" /></a>
          <a href="#"><img src={contactImg} alt="Company Logo" /></a>
          <a href="#"><img src={contactImg} alt="Company Logo" /></a>
        </div>
        <p>© Copyright FarmFertilizer 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
