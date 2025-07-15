import React from "react";
import PromCard from "./PromCard.jsx";
import ClaimForm from "./ClaimForm.jsx";
import InfoBanner from "./InfoBanner.jsx";
import "./App.css";
import FreshPromoCard from "./FreshPromoCard.js";

export default function App() {
  return (
    <div className="App">
      <div className="App-left">
        <FreshPromoCard className="promCard" />
        <InfoBanner className="infoBanner"/>
      </div>
      <div className="App-right">
        <ClaimForm  className="claimForm"/>
      </div>
    </div>
  );
}
