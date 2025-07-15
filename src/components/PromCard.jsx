import React from 'react';
import './PromCard.css';
import { FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { PiSealCheckFill } from 'react-icons/pi';

export default function PromCard() {
  return (
    <div className="promo-container">
      <div className="promo-card">
        <h2><span>Free</span><br />Case<br />Review</h2>
        <ul className="benefits">
          <li><FaShieldAlt /> 100% Confidential</li>
          <li><FaCheckCircle /> No Win, No Fee</li>
          <li><PiSealCheckFill /> Free Case Evaluation</li>
        </ul>
      </div>

      {/* <div className="circle-badge">
        <div className="circle-text">ONLY 6 SLOTS LEFT</div>
      </div> */}

      <div className="help-text">We are here to help!</div>

      <button className="contact-btn">
        Contact us <span className="arrow">→</span>
      </button>
    </div>
  );
}
