import * as React from "react";

export default function IconMobile(props) {
  return (
    <div className={`inline-flex ${props.className}`}>
      <svg width="10" height="16" viewBox="0 0 10 16" fill="#e1ddec" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M8 2H2L2 14H8V2ZM2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.89543 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.895431 9.10457 0 8 0H2Z" />
        <rect x="2" y="12" width="6" height="2" />
      </svg>
    </div>
  )
}
