import React from 'react';
import 'react-icons/fa';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>About Us</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <address>
              117 Melig, Elgmeza<br />
              Shebien Elkowm, Egypt<br />
              Email: supprt@nexus.com<br />
              Phone: +1 (123) 456-7890
            </address>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex">
              <a href="https://www.facebook.com" className="me-3"><FaFacebook /></a>
              <a href="https://www.twitter.com" className="me-3"><FaTwitter /></a>
              <a href="https://www.linkedin.com" className="me-3"><FaLinkedin /></a>
              <a href="https://www.instagram.com" className="me-3"><FaInstagram /></a>
            </div>
          </div>
        </div>
        <hr className="my-4" />
        <div className="text-center">
          <p>&copy; 2023 nexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
