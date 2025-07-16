import React from "react";
import ClaimForm from "./ClaimForm.jsx";
import InfoBanner from "./InfoBanner.jsx";
import "./App.css";
import FreshPromoCard from "./FreshPromoCard.js";

// Main App component
export default function App() {
  return (
    // Root container for the app
    <div className="App">
      {/* Left section containing promo card and info banner */}
      <div className="App-left">
        <FreshPromoCard className="promCard" />
        <InfoBanner className="infoBanner" />
      </div>
      {/* Right section containing the claim form */}
      <div className="App-right">
        <ClaimForm className="claimForm" />
      </div>
    </div>
  );
}
