import React from 'react';
import { v4 as uuid } from 'uuid';

export default function UniV2UsdcEthIcon(props) {
  const id = `usdc_eth_univ2_icon_${uuid()}`;
  const id1 = `1_${id}`;
  const id2 = `2_${id}`;
  const id3 = `3_${id}`;
  const id4 = `4_${id}`;
  const mask1 = `1_mask_${id}`;
  const mask2 = `2_mask_${id}`;
  const fill1 = `url(#${id1})`;
  const fill2 = `url(#${id2})`;
  const fill3 = `url(#${id3})`;
  const fill4 = `url(#${id4})`;
  const maskFill1 = `url(#${mask1})`;
  const maskFill2 = `url(#${mask2})`;
  return (
    <svg width="193" height="193" viewBox="0 0 193 193" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill1}/>
      <path d="M136.775 77L136.259 78.7535V129.637L136.775 130.152L160.394 116.191L136.775 77Z" fill="#DEDEDE"/>
      <path d="M136.778 77L113.158 116.191L136.778 130.152V105.455V77Z" fill="white"/>
      <path d="M136.776 134.626L136.485 134.981V153.106L136.776 153.955L160.41 120.672L136.776 134.626Z" fill="#DEDEDE"/>
      <path d="M136.778 153.955V134.626L113.158 120.671L136.778 153.955Z" fill="white"/>
      <path d="M136.78 130.152L160.399 116.191L136.78 105.455V130.152Z" fill="#BDBDBD"/>
      <path d="M113.158 116.191L136.777 130.153V105.455L113.158 116.191Z" fill="#DEDEDE"/>
      <mask id={mask1} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="-1" y="-1" width="146" height="182">
        <path d="M48.25 180.071C26.0855 167.275 9.91221 146.197 3.28816 121.476C-3.3359 96.7547 0.131853 70.4145 12.9285 48.25C25.7252 26.0855 46.8026 9.91222 71.524 3.28816C96.2453 -3.3359 122.585 0.131851 144.75 12.9285L96.5 96.5L48.25 180.071Z" fill="#C4C4C4"/>
      </mask>
      <g mask={maskFill1}>
        <circle cx="96.5" cy="96.5" r="96.5" transform="rotate(-180 96.5 96.5)" fill={fill2}/>
        <path opacity="0.9" fillRule="evenodd" clipRule="evenodd" d="M38.8809 50.6878C38.8809 58.5009 38.8719 59.3856 38.7908 59.4757C38.711 59.5643 38.3197 59.5757 35.3504 59.5757H32V62.6959V65.8161H35.3504C38.3197 65.8161 38.711 65.8275 38.7908 65.9162C38.8703 66.0044 38.8809 66.384 38.8809 69.1274C38.8809 71.8707 38.8703 72.2503 38.7908 72.3386C38.711 72.4272 38.3197 72.4386 35.3504 72.4386H32V75.5588V78.679H35.3504C38.3197 78.679 38.711 78.6904 38.7908 78.779C38.8719 78.869 38.8809 79.7422 38.8809 87.4396V96L49.016 95.9725C59.7335 95.9434 60.8739 95.9142 62.6775 95.6227C62.8825 95.5896 63.2437 95.5328 63.4802 95.4966C64.0057 95.416 64.0736 95.401 64.9711 95.1661C65.3653 95.0629 65.8169 94.9469 65.9746 94.9082C66.598 94.7554 68.4739 94.0719 69.3004 93.6965C70.523 93.1412 72.2589 92.1689 73.0849 91.5767C73.2741 91.441 73.6095 91.2009 73.8303 91.0431C74.2133 90.7695 75.6972 89.5504 75.8698 89.3677C75.915 89.3198 76.0932 89.1519 76.2659 88.9945C76.6733 88.6231 78.114 87.0228 78.4455 86.5735C78.587 86.3817 78.7169 86.2105 78.7342 86.193C78.7516 86.1754 78.9204 85.9462 79.1093 85.6835C79.8949 84.5915 80.8738 82.965 81.2555 82.1176C81.3265 81.96 81.4701 81.6734 81.5746 81.4808C81.6792 81.2882 81.8976 80.7867 82.0601 80.3665C82.5618 79.069 82.6553 78.8592 82.7731 78.7676C82.8668 78.6947 83.4072 78.6789 85.813 78.6781C87.4223 78.6777 88.7977 78.6598 88.8695 78.6384L89 78.5996L88.973 76.4902C88.9372 73.6845 88.8803 72.5796 88.7677 72.5007C88.7175 72.4657 87.7564 72.4401 86.4637 72.4395C84.4804 72.4387 84.2359 72.4275 84.1514 72.3336C84.0887 72.264 84.0707 72.1834 84.098 72.0948C84.216 71.7112 84.276 68.9347 84.2078 67.0061C84.1817 66.2689 84.1905 65.9748 84.2406 65.9077C84.298 65.831 84.665 65.8161 86.5056 65.8161C88.426 65.8161 88.7135 65.8035 88.7923 65.7161C88.8715 65.628 88.8823 65.2656 88.8823 62.6959C88.8823 60.1262 88.8715 59.7638 88.7923 59.6758C88.7127 59.5875 88.3652 59.5757 85.8366 59.5757H82.971L82.8303 59.4194C82.7529 59.3334 82.6895 59.218 82.6895 59.1629C82.6895 59.1077 82.6121 58.8924 82.5175 58.6842C82.4229 58.4761 82.3451 58.2692 82.3447 58.2244C82.3434 58.0888 81.1551 55.5044 80.8431 54.9591C79.9458 53.39 79.2071 52.2799 78.4307 51.3337C77.2039 49.8384 77.2272 49.8656 76.9553 49.6203C76.845 49.5208 76.5868 49.2708 76.3816 49.0648C75.5014 48.1811 74.1691 47.1097 72.8842 46.2523C72.1784 45.7812 70.2799 44.6954 69.8596 44.5224C69.6607 44.4405 69.5271 44.3819 68.77 44.0443C67.7347 43.5827 65.0803 42.7629 64.111 42.6053C63.9691 42.5822 63.711 42.5369 63.5376 42.5045C62.7221 42.3522 61.451 42.2005 60.3265 42.1212C59.7538 42.0809 55.3352 42.0437 49.1306 42.0273L38.8809 42V50.6878ZM60.8999 47.72C62.0993 47.883 62.3746 47.9218 62.5628 47.9547C63.838 48.1779 66.1655 48.9027 67.0678 49.3577C69.2311 50.4485 70.3965 51.203 71.68 52.3436C71.9165 52.5538 72.123 52.7415 72.1387 52.7608C72.1545 52.78 72.3088 52.9243 72.4817 53.0815C72.8822 53.4456 73.5267 54.1608 73.859 54.6099C74.0009 54.8017 74.1749 55.0243 74.2455 55.1045C74.5817 55.486 75.5423 56.9842 76.0508 57.9201C76.6247 58.9766 76.7795 59.4512 76.578 59.5371C76.5281 59.5583 69.2791 59.5757 60.4693 59.5757C45.9838 59.5757 44.4426 59.5662 44.3611 59.4757C44.2805 59.3861 44.271 58.7647 44.271 53.59C44.271 48.3993 44.2803 47.7941 44.3617 47.7037C44.4438 47.6126 45.2128 47.6054 52.4325 47.6285C57.4586 47.6444 60.5929 47.6784 60.8999 47.72ZM78.3183 65.8694C78.5161 66.0087 78.6305 67.1996 78.6314 69.1274C78.6321 70.88 78.502 72.2562 78.3237 72.3817C78.2803 72.4122 70.7235 72.4371 61.3484 72.4376C46.063 72.4385 44.4426 72.429 44.3611 72.3386C44.2817 72.2503 44.271 71.8707 44.271 69.1274C44.271 66.384 44.2817 66.0044 44.3611 65.9162C44.4426 65.8257 46.063 65.8162 61.3484 65.8171C70.6419 65.8176 78.2783 65.8411 78.3183 65.8694ZM76.6141 78.7782C76.7065 78.9019 76.6151 79.123 76.0003 80.2622C75.5635 81.0716 75.053 81.8705 74.4081 82.754C73.9547 83.375 72.4583 85.0354 71.909 85.5268C70.6524 86.651 69.213 87.6075 67.4129 88.5145C66.8731 88.7864 65.1323 89.4065 64.2257 89.6498C62.8774 90.0116 62.8815 90.0108 60.8999 90.28C60.5929 90.3216 57.4586 90.3556 52.4325 90.3715C45.2128 90.3946 44.4438 90.3874 44.3617 90.2963C44.2803 90.2059 44.271 89.6119 44.271 84.5373C44.271 79.4784 44.2805 78.8685 44.3611 78.779C44.4426 78.6885 45.9862 78.679 60.4956 78.679C74.9545 78.679 76.5473 78.6888 76.6141 78.7782Z" fill="white"/>
      </g>
      <path d="M193 104L89 104L89 0L163 0C179.569 0 193 13.4315 193 30V104Z" fill="#FD007A"/>
      <circle cx="96.5" cy="96.5" r="96.5" fill={fill3}/>
      <path d="M136.775 77L136.259 78.7535V129.637L136.775 130.152L160.394 116.191L136.775 77Z" fill="#DEDEDE"/>
      <path d="M136.778 77L113.158 116.191L136.778 130.152V105.455V77Z" fill="white"/>
      <path d="M136.776 134.626L136.485 134.981V153.106L136.776 153.955L160.41 120.672L136.776 134.626Z" fill="#DEDEDE"/>
      <path d="M136.778 153.955V134.626L113.158 120.671L136.778 153.955Z" fill="white"/>
      <path d="M136.78 130.152L160.399 116.191L136.78 105.455V130.152Z" fill="#BDBDBD"/>
      <path d="M113.158 116.191L136.777 130.153V105.455L113.158 116.191Z" fill="#DEDEDE"/>
      <mask id={mask2} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="-1" y="-1" width="146" height="182">
        <path d="M48.25 180.071C26.0855 167.275 9.91221 146.197 3.28816 121.476C-3.3359 96.7547 0.131853 70.4145 12.9285 48.25C25.7252 26.0855 46.8026 9.91222 71.524 3.28816C96.2453 -3.3359 122.585 0.131851 144.75 12.9285L96.5 96.5L48.25 180.071Z" fill="#C4C4C4"/>
      </mask>
      <g mask={maskFill2}>
        <circle r="96.5" transform="matrix(-1 0 0 1 96.5 96.5)" fill={fill4}/>
      </g>
      <path fillRule="evenodd" clipRule="evenodd" d="M52.4791 43.3903C52.4791 42.2284 52.4241 42.0494 51.9084 41.5355C51.1395 40.7692 51.0649 40.7791 47.6371 42.0984C45.1071 43.0723 41.2327 45.7467 38.7102 48.2606C36.2032 50.7589 33.492 54.6525 32.5491 57.1082C32.3418 57.6483 32.009 58.5144 31.8097 59.0326C31.4873 59.8705 30.856 62.2044 30.5116 63.8308C30.3548 64.5718 30 68.2822 30 69.182C30 70.2098 30.3665 73.8196 30.5829 74.9223C30.9275 76.6779 32.358 80.6804 33.2523 82.3906C36.0931 87.8233 41.6703 93.2062 46.9189 95.5813C50.3391 97.1289 51.1082 97.2916 51.9182 96.6379C52.3163 96.3167 52.3862 96.0631 52.4473 94.7209C52.5162 93.2091 52.5034 93.1574 51.8815 92.4516C51.2584 91.7443 49.6459 90.7812 49.0851 90.7812C48.9295 90.7812 47.7554 90.092 46.4761 89.2496C42.5662 86.675 40.0147 83.8216 37.9383 79.7018C36.0701 75.9945 35.4187 73.2245 35.4187 68.9874C35.4187 64.713 36.0656 61.9913 37.9899 58.1698C40.4747 53.2355 44.0355 49.7998 49.3298 47.2287C52.3243 45.7746 52.4791 45.5858 52.4791 43.3903ZM77.5121 45.7777C74.865 43.7398 72.4463 42.4325 69.2901 41.3341C67.9035 40.8515 67.7829 40.8636 67.0881 41.5559C66.5147 42.1274 66.499 42.1906 66.5668 43.6765C66.6211 44.8676 66.7232 45.3039 67.0266 45.6389C67.241 45.8761 68.5161 46.6195 69.8599 47.2912C75.1909 49.9553 78.5382 53.232 81.0787 58.273C82.947 61.9803 83.5984 64.7502 83.5984 68.9874C83.5984 72.905 83.3438 74.1214 81.4812 79.0976C79.816 83.5465 73.7006 89.4898 69.0507 91.1786C67.0053 91.9213 66.5451 92.5382 66.5408 94.542C66.5381 95.7528 66.5885 95.9209 67.1086 96.4393C67.9768 97.3044 68.4827 97.2174 72.0981 95.5813C76.4108 93.6296 81.3021 89.3748 84.0834 85.1551C85.8909 82.4128 87.3165 79.4134 87.9292 77.0628C89.1633 72.3296 89.3302 67.6747 88.4322 63.0524C88.0933 61.3072 86.6616 57.2992 85.7648 55.5841C83.9393 52.0932 80.6706 48.2093 77.5121 45.7777ZM62.2373 52.244C62.1518 50.6305 62.0676 50.2409 61.7312 49.9057C61.4043 49.5799 61.0521 49.4966 59.8811 49.4673C57.14 49.399 56.9006 49.5916 56.8169 51.9321C56.7654 53.3651 56.7525 53.9399 56.4595 54.26C56.254 54.4844 55.9109 54.5835 55.3204 54.7653C54.6299 54.9778 53.7208 55.3265 53.3002 55.5404C52.1847 56.1076 50.2192 58.1745 49.5995 59.4325C49.1078 60.4302 49.0621 60.7129 49.0621 62.7606C49.0621 64.7989 49.1092 65.0939 49.5903 66.0699C50.6002 68.1193 52.8544 69.7737 55.4081 70.3398C55.9987 70.4707 56.7997 70.6577 57.188 70.7556C57.5764 70.8533 58.1243 70.9333 58.4057 70.9333C58.9555 70.9333 60.1449 71.1866 61.8329 71.6632C63.5129 72.1378 64.9758 73.674 64.9758 74.9639C64.9758 75.5857 64.34 77.4323 63.9751 77.8705C63.412 78.5467 60.8045 79.4951 59.5085 79.4951C58.8435 79.4951 57.1625 79.0785 56.186 78.6716C55.2708 78.2902 54.3041 77.1597 54.0319 76.1529C53.9104 75.703 53.5201 75.0451 53.1645 74.6907C52.5383 74.0667 52.4686 74.0467 50.9216 74.0467C49.4173 74.0467 49.2919 74.0795 48.7542 74.6154C48.4402 74.9283 48.1834 75.3078 48.1834 75.459C48.1834 75.9593 48.9887 78.2175 49.4493 79.0087C50.5527 80.9041 52.8628 82.6414 55.0357 83.21C55.812 83.4132 56.499 83.6307 56.5622 83.6934C56.6255 83.7562 56.7233 84.6762 56.7798 85.7381C56.8743 87.5176 56.9244 87.7106 57.4188 88.2035C57.914 88.697 58.0747 88.7381 59.5085 88.7381C60.9449 88.7381 61.1024 88.6976 61.6019 88.1998C62.0914 87.712 62.1473 87.5118 62.1996 86.0594C62.2511 84.6258 62.2614 84.0458 62.5555 83.7211C62.7678 83.4869 63.1277 83.3855 63.7574 83.1925C65.337 82.7084 66.7154 81.8323 68.0943 80.4365C69.7474 78.7629 70.4388 77.0505 70.4388 74.6304C70.4388 71.3604 69.122 69.2001 66.2048 67.6848C65.0775 67.0991 64.3684 66.8852 62.1445 66.4599C61.5002 66.3365 60.6553 66.1544 60.2669 66.0549C59.8785 65.9553 59.307 65.874 58.9969 65.874C58.27 65.874 55.8365 64.9956 55.3514 64.5582C54.7229 63.9911 54.4318 63.2188 54.4318 62.118C54.4318 60.379 55.4012 59.2932 57.419 58.7721C58.7173 58.4368 59.5981 58.4031 60.4069 58.6581C60.7182 58.7563 61.2169 58.8898 61.5148 58.955C62.3326 59.1334 63.6164 60.3994 64.1141 61.5181C64.3578 62.0657 64.7024 62.5691 64.8801 62.637C65.0576 62.7049 65.9427 62.7606 66.8468 62.7606C68.2302 62.7606 68.5524 62.6989 68.881 62.3714C69.467 61.7874 69.3793 60.7341 68.6135 59.1552C67.6265 57.1202 65.876 55.5927 63.7066 54.8735C63.1697 54.6955 62.6424 54.4666 62.5351 54.3649C62.4277 54.2633 62.2937 53.3088 62.2373 52.244Z" fill="white"/>
      <defs>
        <linearGradient id={id1} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#697DBC"/>
          <stop offset="1" stopColor="#49589B"/>
        </linearGradient>
        <linearGradient id={id2} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E3A92F"/>
          <stop offset="1" stopColor="#E3BB60"/>
        </linearGradient>
        <linearGradient id={id3} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#697DBC"/>
          <stop offset="1" stopColor="#49589B"/>
        </linearGradient>
        <linearGradient id={id4} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#368CD1"/>
          <stop offset="1" stopColor="#294C73"/>
        </linearGradient>
      </defs>
    </svg>


  );
}
