import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Hi, I'm Aryan Baheti, and welcome to Tomato! Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. At Tomato, we're not just delivering food, we're delivering happiness. Life’s too short for boring meals – let's make it a delicious adventure!</p>
            <div className="footer-social-icons">
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={assets.facebook_icon} alt="Facebook" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <img src={assets.twitter_icon} alt="Instagram" />
              </a>
              <a href="https://www.linkedin.com/in/aryan-baheti-166a17231/" target="_blank" rel="noopener noreferrer">
                <img src={assets.linkedin_icon} alt="LinkedIn" />
              </a>
            </div>

        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 8234567890</li>
                <li>aryanbaheti095@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
