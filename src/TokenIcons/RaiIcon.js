import React from 'react';
import { v4 as uuid } from 'uuid';

export default function RaiIcon(props) {
  const id = `rai_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path d="M77.8627 115.946L112.188 63.9532L115.076 52.6915C116.092 48.7296 111.769 45.5454 108.286 47.6905L61.5222 76.4971C61.2055 76.6922 60.9671 76.9922 60.8485 77.3448L57.673 86.7853C57.1309 88.397 57.2561 90.1586 58.0207 91.6775L70.0063 115.486C71.5779 118.607 75.9371 118.863 77.8627 115.946Z" fill="white"/>
      <path d="M115.138 77.5538L80.8123 129.547L77.9247 140.808C76.9088 144.77 81.2319 147.955 84.7143 145.81L131.478 117.003C131.795 116.808 132.033 116.508 132.152 116.155L135.327 106.715C135.87 105.103 135.744 103.341 134.98 101.823L122.994 78.0144C121.423 74.8927 117.063 74.6371 115.138 77.5538Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#37A7A8"/>
          <stop offset="1" stopColor="#057576"/>
        </linearGradient>
      </defs>
    </svg>


  );
}
