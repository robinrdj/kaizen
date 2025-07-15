import React from 'react';
import './FreshPromoCard.css';
import { FaShieldAlt, FaCheckCircle } from 'react-icons/fa';
import { PiSealCheckFill } from 'react-icons/pi';
import Badge from './Badge';

export default function FreshPromoCard() {
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
      <div className='badge'>
      <Badge />
      </div>

      <div className="help-text">We are here to help!</div>

      <button className="contact-btn">
        Contact us <span className="arrow">→</span>
      </button>
    </div>
  );
}
