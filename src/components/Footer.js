import React from "react";
import './Footer.css'; // Import the CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="footer-container"> 
    <footer className="page-footer font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
          <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Commerce College</h5>
                  <p>ABC College offers exceptional academic programs and a vibrant campus life.</p>
              </div>

              <hr className="clearfix w-100 d-md-none pb-0"/>

              <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">Get in touch</h5>
                  <ul className="list-unstyled">
                      <li><a href="https://www.google.com/maps/@11.2590848,75.7727232,15z?entry=ttu"><FontAwesomeIcon icon={faMapMarkerAlt} /> 44 street Calicut 01</a></li>
                      <li><a href="https://play.google.com/store/apps/details?id=com.callapp.contacts&hl=en_IN&pli=1"><FontAwesomeIcon icon={faPhone} /> 0496 2541251</a></li>
                      <li><a href="https://accounts.google.com/AccountChooser/signinchooser?service=mail&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ddm=0&flowName=GlifWebSignIn&flowEntry=AccountChooser"><FontAwesomeIcon icon={faEnvelope} /> abc college@gmail.com</a></li>
                  </ul>
              </div>

              <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">More details</h5>
                  <ul className="list-unstyled">
                      <a href="https://www.whatsapp.com/"><FontAwesomeIcon icon={faWhatsapp} /> </a>
                      <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /> </a>
                      <a href="https://x.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /> </a>
                  </ul>
              </div>
          </div>
      </div>

      <div className="text-center py-3">© 2020 Copyright:
          <a href="http://localhost:3000/"> abccollege.com</a>
      </div>
    </footer>
  </div>
);

export default Footer;
