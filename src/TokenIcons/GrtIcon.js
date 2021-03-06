import React from 'react';
import { v4 as uuid } from 'uuid';

export default function GrtIcon(props) {
  const id = `grt_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M91.7523 101.254C81.4897 101.254 73.2508 93.0148 73.2508 82.7523C73.2508 72.4897 81.4897 64.2508 91.7523 64.2508C102.015 64.2508 110.254 72.4897 110.254 82.7523C110.254 93.0148 102.015 101.254 91.7523 101.254ZM91.7523 55C107.074 55 119.505 67.4307 119.505 82.7523C119.505 98.0738 107.074 110.505 91.7523 110.505C76.4307 110.505 64 98.0738 64 82.7523C64 67.4307 76.4307 55 91.7523 55ZM118.204 111.95C120.083 113.829 120.083 116.72 118.204 118.454L99.7021 136.956C97.8231 138.835 94.9322 138.835 93.1977 136.956C91.3186 135.077 91.3186 132.186 93.1977 130.451L111.699 111.95C113.434 110.071 116.469 110.071 118.204 111.95ZM128.9 59.6254C128.9 62.2272 126.876 64.2508 124.274 64.2508C121.673 64.2508 119.649 62.2272 119.649 59.6254C119.649 57.0236 121.673 55 124.274 55C126.732 55 128.9 57.0236 128.9 59.6254Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6747ED"/>
          <stop offset="1" stopColor="#2E1A81"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
