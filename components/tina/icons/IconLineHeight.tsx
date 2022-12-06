import * as React from "react";

export default function IconLineHeight(props) {
  return (
    <div className={`inline-flex justify-self-center ${props.className}`}>
      <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M11 5H3V7H6V13H8V7H11V5Z" fill="#CAC8CF" />
        <rect y="16" width="14" height="2" fill="#CAC8CF" />
        <rect width="14" height="2" fill="#CAC8CF" />
      </svg>
    </div>
  )
}
