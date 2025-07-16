import React from "react";
import "./InfoBanner.css";

export default function InfoBanner() {
  return (
    <div className="info-banner">
      {/* Headline with highlighted condition */}
      <h2>
        Have you or a loved one been affected by <span>Mesothelioma?</span>
      </h2>
      {/* Supportive message for women */}
      <p>
        As a woman, you've carried the weight of care, love, and resilience. Now
        it’s time someone stands with you.
      </p>
      {/* Key facts and encouragement list */}
      <ul>
        <li>Secondary Asbestos exposure is common</li>
        <li>Misdiagnosis delays are more frequent in women</li>
        <li>Women have won significant legal settlements</li>
      </ul>
    </div>
  );
}
