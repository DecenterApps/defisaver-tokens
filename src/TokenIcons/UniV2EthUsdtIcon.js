import React from 'react';
import { v4 as uuid } from 'uuid';

export default function UniV2EthUsdtIcon(props) {
  const id = `eth_usdt_univ2_icon_${uuid()}`;
  const id1 = `1_${id}`;
  const id2 = `2_${id}`;
  const mask = `1_mask_${id}`;
  const fill1 = `url(#${id1})`;
  const fill2 = `url(#${id2})`;
  const maskFill = `url(#${mask})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M193 104L89 104L89 0L163 0C179.569 0 193 13.4315 193 30V104Z" fill="#FD007A"/>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill1}/>
      <path d="M144.294 107.797V100.745H160.267V90H116.77V100.745H132.746V107.792C119.762 108.394 110 110.99 110 114.099C110 117.209 119.767 119.805 132.746 120.411V143H144.297V120.409C157.257 119.805 167 117.211 167 114.104C167 110.997 157.257 108.403 144.297 107.799L144.294 107.797ZM144.297 118.496V118.49C143.971 118.511 142.297 118.612 138.569 118.612C135.588 118.612 133.491 118.527 132.752 118.488V118.498C121.281 117.985 112.719 115.968 112.719 113.555C112.719 111.142 121.282 109.128 132.752 108.614V116.489C133.503 116.541 135.652 116.669 138.617 116.669C142.18 116.669 143.97 116.519 144.299 116.489V108.614C155.747 109.129 164.29 111.148 164.29 113.552C164.29 115.957 155.744 117.976 144.299 118.491" fill="white"/>
      <mask id={mask} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="-1" y="-1" width="146" height="182">
        <path d="M48.25 180.071C26.0855 167.275 9.91221 146.197 3.28816 121.476C-3.3359 96.7547 0.131853 70.4145 12.9285 48.25C25.7252 26.0855 46.8026 9.91222 71.524 3.28816C96.2453 -3.3359 122.585 0.131851 144.75 12.9285L96.5 96.5L48.25 180.071Z" fill="#C4C4C4"/>
      </mask>
      <g mask={maskFill}>
        <circle r="96.5" transform="matrix(-1 0 0 1 96.5 96.5)" fill={fill2}/>
        <path d="M59.6167 34L59.1008 35.7535V86.6371L59.6167 87.1521L83.2363 73.1906L59.6167 34Z" fill="#DEDEDE"/>
        <path d="M59.6196 34L36 73.1906L59.6196 87.1523V62.4549V34Z" fill="white"/>
        <path d="M59.6181 91.6262L59.3274 91.9805V110.106L59.6181 110.955L83.2519 77.6717L59.6181 91.6262Z" fill="#DEDEDE"/>
        <path d="M59.6196 110.955V91.6258L36 77.6713L59.6196 110.955Z" fill="white"/>
        <path d="M59.6218 87.1523L83.241 73.191L59.6218 62.4553V87.1523Z" fill="#BDBDBD"/>
        <path d="M36 73.191L59.6192 87.1525V62.4553L36 73.191Z" fill="#DEDEDE"/>
      </g>
      <defs>
        <linearGradient id={id1} x1="96.5" y1="0" x2="96.5" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#53AE94"/>
          <stop offset="1" stopColor="#3F9A80"/>
        </linearGradient>
        <linearGradient id={id2} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#697DBC"/>
          <stop offset="1" stopColor="#49589B"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
