import React from 'react';
import { v4 as uuid } from 'uuid';

export default function BalIcon(props) {
  const id = `bal_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M96.5 193C149.795 193 193 149.795 193 96.5C193 43.2045 149.795 0 96.5 0C43.2045 0 0 43.2045 0 96.5C0 149.795 43.2045 193 96.5 193Z" fill={fill}/>
      <path d="M96 128C72.8021 128 54 121.263 54 112.235C54 107.525 59.1212 103.281 67.3181 100.292C73.7161 104.419 84.4518 106.533 96.6238 106.533C108.506 106.533 119.009 103.952 125.465 100C133.198 102.96 138 107.087 138 111.637C138 120.679 119.198 128 96 128Z" fill="white"/>
      <path d="M96.5 105C79.1068 105 65 99.4155 65 92.523C65 88.7021 69.3483 85.2779 76.1649 83C81.0298 85.6012 88.32 87.2619 96.5 87.2619C104.68 87.2619 111.97 85.6012 116.835 83C123.666 85.2926 128 88.7021 128 92.523C128.014 99.4155 113.908 105 96.5 105Z" fill="white"/>
      <path d="M96.5 85C82.9723 85 72 80.5143 72 75C72 69.4857 82.9723 65 96.5 65C110.028 65 121 69.4857 121 75C121 80.5143 110.028 85 96.5 85Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#414141"/>
          <stop offset="1" stopColor="#1E1E1E"/>
        </linearGradient>
      </defs>
  </svg>
  );
}
