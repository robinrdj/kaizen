import React from 'react';
import './InfoBanner.css';

export default function InfoBanner() {
  return (
    <div className="info-banner">
      <h2>Have you or a loved one been affected by <span>Mesothelioma?</span></h2>
      <p>
        As a woman, you've carried the weight of care, love, and resilience.
        Now it’s time someone stands with you.
      </p>
      <ul>
        <li>Secondary Asbestos exposure is common</li>
        <li>Misdiagnosis delays are more frequent in women</li>
        <li>Women have won significant legal settlements</li>
      </ul>
    </div>
  );
}
