import React from "react";
import "./FreshPromoCard.css";
import {
  FaShieldAlt,
  FaCheck,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";
import Badge from "./Badge";

export default function FreshPromoCard() {
  return (
    <div className="promo-container">
      {/* Card headline and benefits list */}
      <div className="promo-card">
        <h2>
          <span>Free</span>
          <br />
          Case
          <br />
          Review
        </h2>
        <ul className="benefits">
          {/* Icons highlight each benefit */}
          <li>
            <div className="icon-circle icon1">
              <FaShieldAlt size={14} />
            </div>
            100% Confidential
          </li>
          <li>
            <div className="icon-circle icon2">
              <FaCheck size={14} />
            </div>
            No Win, No Fee
          </li>
          <li>
            <div className="icon-circle icon3">
              <FaBalanceScale size={14} />
            </div>
            Free Case Evaluation
          </li>
        </ul>
      </div>

      {/* Badge sits behind card content for visual emphasis */}
      <div className="badge">
        <Badge />
      </div>

      {/* Quick help message in top right corner */}
      <div className="help-text">
        We are
        <br />
        here to help!
      </div>
      {/* Buttons for user actions at the bottom right */}
      <div className="button-combine">
        <button className="contactUs-btn">Contact us</button>
        <button className="arrow-btn">
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}
