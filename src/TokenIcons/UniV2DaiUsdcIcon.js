import React from 'react';
import { v4 as uuid } from 'uuid';

export default function UniV2DaiUsdcIcon(props) {
  const id = `dai_usdc_univ2_icon_${uuid()}`;
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
      <path fillRule="evenodd" clipRule="evenodd" d="M133.479 88.3903C133.479 87.2284 133.424 87.0494 132.908 86.5355C132.139 85.7692 132.065 85.7791 128.637 87.0984C126.107 88.0723 122.233 90.7467 119.71 93.2606C117.203 95.7589 114.492 99.6525 113.549 102.108C113.342 102.648 113.009 103.514 112.81 104.033C112.487 104.871 111.856 107.204 111.512 108.831C111.355 109.572 111 113.282 111 114.182C111 115.21 111.367 118.82 111.583 119.922C111.927 121.678 113.358 125.68 114.252 127.391C117.093 132.823 122.67 138.206 127.919 140.581C131.339 142.129 132.108 142.292 132.918 141.638C133.316 141.317 133.386 141.063 133.447 139.721C133.516 138.209 133.503 138.157 132.881 137.452C132.258 136.744 130.646 135.781 130.085 135.781C129.93 135.781 128.755 135.092 127.476 134.25C123.566 131.675 121.015 128.822 118.938 124.702C117.07 120.994 116.419 118.225 116.419 113.987C116.419 109.713 117.066 106.991 118.99 103.17C121.475 98.2355 125.036 94.7998 130.33 92.2287C133.324 90.7746 133.479 90.5858 133.479 88.3903ZM158.512 90.7777C155.865 88.7398 153.446 87.4325 150.29 86.3341C148.904 85.8515 148.783 85.8636 148.088 86.5559C147.515 87.1274 147.499 87.1906 147.567 88.6765C147.621 89.8676 147.723 90.3039 148.027 90.6389C148.241 90.8761 149.516 91.6195 150.86 92.2912C156.191 94.9553 159.538 98.232 162.079 103.273C163.947 106.98 164.598 109.75 164.598 113.987C164.598 117.905 164.344 119.121 162.481 124.098C160.816 128.546 154.701 134.49 150.051 136.179C148.005 136.921 147.545 137.538 147.541 139.542C147.538 140.753 147.588 140.921 148.109 141.439C148.977 142.304 149.483 142.217 153.098 140.581C157.411 138.63 162.302 134.375 165.083 130.155C166.891 127.413 168.317 124.413 168.929 122.063C170.163 117.33 170.33 112.675 169.432 108.052C169.093 106.307 167.662 102.299 166.765 100.584C164.939 97.0932 161.671 93.2093 158.512 90.7777ZM143.237 97.244C143.152 95.6305 143.068 95.2409 142.731 94.9057C142.404 94.5799 142.052 94.4966 140.881 94.4673C138.14 94.399 137.901 94.5916 137.817 96.9321C137.765 98.3651 137.753 98.9399 137.459 99.26C137.254 99.4844 136.911 99.5835 136.32 99.7653C135.63 99.9778 134.721 100.327 134.3 100.54C133.185 101.108 131.219 103.175 130.599 104.433C130.108 105.43 130.062 105.713 130.062 107.761C130.062 109.799 130.109 110.094 130.59 111.07C131.6 113.119 133.854 114.774 136.408 115.34C136.999 115.471 137.8 115.658 138.188 115.756C138.576 115.853 139.124 115.933 139.406 115.933C139.956 115.933 141.145 116.187 142.833 116.663C144.513 117.138 145.976 118.674 145.976 119.964C145.976 120.586 145.34 122.432 144.975 122.871C144.412 123.547 141.804 124.495 140.509 124.495C139.843 124.495 138.162 124.079 137.186 123.672C136.271 123.29 135.304 122.16 135.032 121.153C134.91 120.703 134.52 120.045 134.165 119.691C133.538 119.067 133.469 119.047 131.922 119.047C130.417 119.047 130.292 119.08 129.754 119.615C129.44 119.928 129.183 120.308 129.183 120.459C129.183 120.959 129.989 123.217 130.449 124.009C131.553 125.904 133.863 127.641 136.036 128.21C136.812 128.413 137.499 128.631 137.562 128.693C137.626 128.756 137.723 129.676 137.78 130.738C137.874 132.518 137.924 132.711 138.419 133.204C138.914 133.697 139.075 133.738 140.509 133.738C141.945 133.738 142.102 133.698 142.602 133.2C143.091 132.712 143.147 132.512 143.2 131.059C143.251 129.626 143.261 129.046 143.556 128.721C143.768 128.487 144.128 128.386 144.757 128.192C146.337 127.708 147.715 126.832 149.094 125.437C150.747 123.763 151.439 122.051 151.439 119.63C151.439 116.36 150.122 114.2 147.205 112.685C146.078 112.099 145.368 111.885 143.145 111.46C142.5 111.336 141.655 111.154 141.267 111.055C140.879 110.955 140.307 110.874 139.997 110.874C139.27 110.874 136.836 109.996 136.351 109.558C135.723 108.991 135.432 108.219 135.432 107.118C135.432 105.379 136.401 104.293 138.419 103.772C139.717 103.437 140.598 103.403 141.407 103.658C141.718 103.756 142.217 103.89 142.515 103.955C143.333 104.133 144.616 105.399 145.114 106.518C145.358 107.066 145.702 107.569 145.88 107.637C146.058 107.705 146.943 107.761 147.847 107.761C149.23 107.761 149.552 107.699 149.881 107.371C150.467 106.787 150.379 105.734 149.614 104.155C148.626 102.12 146.876 100.593 144.707 99.8735C144.17 99.6955 143.642 99.4666 143.535 99.3649C143.428 99.2633 143.294 98.3088 143.237 97.244Z" fill="white"/>
      <mask id={mask2} style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="-1" y="-1" width="146" height="182">
        <path d="M48.25 180.071C26.0855 167.275 9.91221 146.197 3.28816 121.476C-3.3359 96.7547 0.131853 70.4145 12.9285 48.25C25.7252 26.0855 46.8026 9.91222 71.524 3.28816C96.2453 -3.3359 122.585 0.131851 144.75 12.9285L96.5 96.5L48.25 180.071Z" fill="#C4C4C4"/>
      </mask>
      <g mask={maskFill2}>
        <circle cx="96.5" cy="96.5" r="96.5" transform="rotate(-180 96.5 96.5)" fill={fill4}/>
        <path opacity="0.9" fillRule="evenodd" clipRule="evenodd" d="M38.8809 50.6878C38.8809 58.5009 38.8719 59.3856 38.7908 59.4757C38.711 59.5643 38.3197 59.5757 35.3504 59.5757H32V62.6959V65.8161H35.3504C38.3197 65.8161 38.711 65.8275 38.7908 65.9162C38.8703 66.0044 38.8809 66.384 38.8809 69.1274C38.8809 71.8707 38.8703 72.2503 38.7908 72.3386C38.711 72.4272 38.3197 72.4386 35.3504 72.4386H32V75.5588V78.679H35.3504C38.3197 78.679 38.711 78.6904 38.7908 78.779C38.8719 78.869 38.8809 79.7422 38.8809 87.4396V96L49.016 95.9725C59.7335 95.9434 60.8739 95.9142 62.6775 95.6227C62.8825 95.5896 63.2437 95.5328 63.4802 95.4966C64.0057 95.416 64.0736 95.401 64.9711 95.1661C65.3653 95.0629 65.8169 94.9469 65.9746 94.9082C66.598 94.7554 68.4739 94.0719 69.3004 93.6965C70.523 93.1412 72.2589 92.1689 73.0849 91.5767C73.2741 91.441 73.6095 91.2009 73.8303 91.0431C74.2133 90.7695 75.6972 89.5504 75.8698 89.3677C75.915 89.3198 76.0932 89.1519 76.2659 88.9945C76.6733 88.6231 78.114 87.0228 78.4455 86.5735C78.587 86.3817 78.7169 86.2105 78.7342 86.193C78.7516 86.1754 78.9204 85.9462 79.1093 85.6835C79.8949 84.5915 80.8738 82.965 81.2555 82.1176C81.3265 81.96 81.4701 81.6734 81.5746 81.4808C81.6792 81.2882 81.8976 80.7867 82.0601 80.3665C82.5618 79.069 82.6553 78.8592 82.7731 78.7676C82.8668 78.6947 83.4072 78.6789 85.813 78.6781C87.4223 78.6777 88.7977 78.6598 88.8695 78.6384L89 78.5996L88.973 76.4902C88.9372 73.6845 88.8803 72.5796 88.7677 72.5007C88.7175 72.4657 87.7564 72.4401 86.4637 72.4395C84.4804 72.4387 84.2359 72.4275 84.1514 72.3336C84.0887 72.264 84.0707 72.1834 84.098 72.0948C84.216 71.7112 84.276 68.9347 84.2078 67.0061C84.1817 66.2689 84.1905 65.9748 84.2406 65.9077C84.298 65.831 84.665 65.8161 86.5056 65.8161C88.426 65.8161 88.7135 65.8035 88.7923 65.7161C88.8715 65.628 88.8823 65.2656 88.8823 62.6959C88.8823 60.1262 88.8715 59.7638 88.7923 59.6758C88.7127 59.5875 88.3652 59.5757 85.8366 59.5757H82.971L82.8303 59.4194C82.7529 59.3334 82.6895 59.218 82.6895 59.1629C82.6895 59.1077 82.6121 58.8924 82.5175 58.6842C82.4229 58.4761 82.3451 58.2692 82.3447 58.2244C82.3434 58.0888 81.1551 55.5044 80.8431 54.9591C79.9458 53.39 79.2071 52.2799 78.4307 51.3337C77.2039 49.8384 77.2272 49.8656 76.9553 49.6203C76.845 49.5208 76.5868 49.2708 76.3816 49.0648C75.5014 48.1811 74.1691 47.1097 72.8842 46.2523C72.1784 45.7812 70.2799 44.6954 69.8596 44.5224C69.6607 44.4405 69.5271 44.3819 68.77 44.0443C67.7347 43.5827 65.0803 42.7629 64.111 42.6053C63.9691 42.5822 63.711 42.5369 63.5376 42.5045C62.7221 42.3522 61.451 42.2005 60.3265 42.1212C59.7538 42.0809 55.3352 42.0437 49.1306 42.0273L38.8809 42V50.6878ZM60.8999 47.72C62.0993 47.883 62.3746 47.9218 62.5628 47.9547C63.838 48.1779 66.1655 48.9027 67.0678 49.3577C69.2311 50.4485 70.3965 51.203 71.68 52.3436C71.9165 52.5538 72.123 52.7415 72.1387 52.7608C72.1545 52.78 72.3088 52.9243 72.4817 53.0815C72.8822 53.4456 73.5267 54.1608 73.859 54.6099C74.0009 54.8017 74.1749 55.0243 74.2455 55.1045C74.5817 55.486 75.5423 56.9842 76.0508 57.9201C76.6247 58.9766 76.7795 59.4512 76.578 59.5371C76.5281 59.5583 69.2791 59.5757 60.4693 59.5757C45.9838 59.5757 44.4426 59.5662 44.3611 59.4757C44.2805 59.3861 44.271 58.7647 44.271 53.59C44.271 48.3993 44.2803 47.7941 44.3617 47.7037C44.4438 47.6126 45.2128 47.6054 52.4325 47.6285C57.4586 47.6444 60.5929 47.6784 60.8999 47.72ZM78.3183 65.8694C78.5161 66.0087 78.6305 67.1996 78.6314 69.1274C78.6321 70.88 78.502 72.2562 78.3237 72.3817C78.2803 72.4122 70.7235 72.4371 61.3484 72.4376C46.063 72.4385 44.4426 72.429 44.3611 72.3386C44.2817 72.2503 44.271 71.8707 44.271 69.1274C44.271 66.384 44.2817 66.0044 44.3611 65.9162C44.4426 65.8257 46.063 65.8162 61.3484 65.8171C70.6419 65.8176 78.2783 65.8411 78.3183 65.8694ZM76.6141 78.7782C76.7065 78.9019 76.6151 79.123 76.0003 80.2622C75.5635 81.0716 75.053 81.8705 74.4081 82.754C73.9547 83.375 72.4583 85.0354 71.909 85.5268C70.6524 86.651 69.213 87.6075 67.4129 88.5145C66.8731 88.7864 65.1323 89.4065 64.2257 89.6498C62.8774 90.0116 62.8815 90.0108 60.8999 90.28C60.5929 90.3216 57.4586 90.3556 52.4325 90.3715C45.2128 90.3946 44.4438 90.3874 44.3617 90.2963C44.2803 90.2059 44.271 89.6119 44.271 84.5373C44.271 79.4784 44.2805 78.8685 44.3611 78.779C44.4426 78.6885 45.9862 78.679 60.4956 78.679C74.9545 78.679 76.5473 78.6888 76.6141 78.7782Z" fill="white"/>
      </g>
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
          <stop stopColor="#368CD1"/>
          <stop offset="1" stopColor="#294C73"/>
        </linearGradient>
        <linearGradient id={id4} x1="193" y1="2.46321" x2="193" y2="193" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E3A92F"/>
          <stop offset="1" stopColor="#E3BB60"/>
        </linearGradient>
      </defs>
    </svg>
  );
}
