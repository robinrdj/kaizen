import React from 'react';
import "./Badge.css";

function Badge() {
  return (
    <div className="badge-wrapper">
      <svg viewBox="0 0 200 200" className="badge-circle">
        <defs>
          {/* Gradient for the fill */}
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5c3480" />
            <stop offset="100%" stopColor="#1b3065" />
          </radialGradient>

          {/* Right half path, smaller radius to move inside */}
          <path
            id="innerRightHalf"
            d="
              M 100,30
              A 70,70 0 0,1 100,170
            "
          />
        </defs>

        <circle cx="100" cy="100" r="90" fill="url(#grad1)" />

        <text fill="white" fontSize="18" fontWeight="bold">
          <textPath
            href="#innerRightHalf"
            startOffset="50%"
            textAnchor="middle"
          >
            ONLY 6 SLOTS LEFT
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export default Badge