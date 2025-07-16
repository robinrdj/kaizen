import React from "react";
import "./Badge.css";

function Badge() {
  return (
    <div className="badge-wrapper">
      {/* SVG badge with gradient and curved text */}
      <svg viewBox="0 0 200 200" className="badge-circle">
        <defs>
          {/* Gradient for the fill */}
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#5c3480" />
            <stop offset="100%" stopColor="#1b3065" />
          </radialGradient>

          {/* Path for the curved text on the right half */}
          <path
            id="innerRightHalf"
            d="
              M 100,30
              A 70,70 0 0,1 100,170
            "
          />
        </defs>
        {/* Main circle with gradient fill */}
        <circle cx="100" cy="100" r="90" fill="url(#grad1)" />
        {/* Curved text showing slot info */}
        <text fill="#f4e9df" fontSize="18" fontWeight="bold">
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
  );
}

export default Badge;
