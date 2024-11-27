import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Us Section */}
        <div className="footer-about">
          <img src="/logo.png" alt="SwiftRoutes Logo" className="footer-logo" />
          <p>
            SwiftRoutes is revolutionizing urban mobility with AI-powered route optimization. Our mission is to make commutes faster, greener, and more accessible for everyone.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/planner">Planner</a></li>
            <li><a href="/rewards">Rewards</a></li>
            <li><a href="/faq">FAQs</a></li>
          </ul>
        </div>

        {/* External Resources Section */}
        <div className="footer-resources">
          <h4>External Resources</h4>
          <ul>
            <li><a href="https://www.unep.org" target="_blank" rel="noopener noreferrer">UN Environment Program</a></li>
            <li><a href="https://www.itdp.org" target="_blank" rel="noopener noreferrer">Institute for Transportation & Development Policy</a></li>
            <li><a href="https://www.transportation.gov" target="_blank" rel="noopener noreferrer">U.S. Department of Transportation</a></li>
            <li><a href="https://www.who.int" target="_blank" rel="noopener noreferrer">World Health Organization</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} /> Facebook
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 SwiftRoutes. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
