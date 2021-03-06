import React from 'react';
import { v4 as uuid } from 'uuid';

export default function BusdIcon(props) {
  const id = `busd_icon_${uuid()}`;
  const fill = `url(#${id})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill} />
      <path d="M96.9903 42L110.455 55.4679L76.6627 89.2694L63.1952 75.8015L96.9903 42ZM63.2597 116.25L76.7243 129.718L130.724 75.7179L117.259 62.25L63.2597 116.25ZM83.5097 136.5L96.9873 150L150.987 96L137.523 82.5321L83.5097 136.5ZM69.9325 96L56.4646 82.5321L43 96L56.4646 109.465L69.9325 96Z" fill="white" />
      <defs>
        <linearGradient id={id} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F0B90B" />
          <stop offset="1" stopColor="#DCA500" />
        </linearGradient>
      </defs>
    </svg>

  );
}
