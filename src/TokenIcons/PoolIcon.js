import React from 'react';
import { v4 as uuid } from 'uuid';

export default function PoolIcon(props) {
  const id = `pool_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill}/>
      <path fillRule="evenodd" clipRule="evenodd" d="M96.3924 45C113.181 45 126.791 58.8373 126.791 75.9063V93.6778C126.791 110.747 113.181 124.584 96.3924 124.584C93.7553 124.584 91.1968 124.243 88.7569 123.601V125.699C88.7569 138.185 78.7527 148.332 66.3351 148.534L65.9578 148.536V80.5423L65.9927 80.5413L65.9936 75.9063C65.9936 58.8373 79.6037 45 96.3924 45ZM96.3557 67.564C92.1585 67.564 88.756 71.0233 88.756 75.2908V93.0622C88.756 97.3292 92.1585 100.788 96.3557 100.788C100.553 100.788 103.955 97.3292 103.955 93.0622V75.2908C103.955 71.0233 100.553 67.564 96.3557 67.564Z" fill="white"/>
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#00A3FF"/>
          <stop offset="1" stopColor="#005E93"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
