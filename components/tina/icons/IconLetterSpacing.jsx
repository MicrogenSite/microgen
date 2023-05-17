import * as React from "react";

export default function IconLetterSpacing(props) {
  return (
    <div className={`inline-flex justify-self-center ${props.className}`}>
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 5H4V7H7V13H9V7H12V5Z" fill="#CAC8CF" />
        <rect x="14" y="18" width="18" height="2" transform="rotate(-90 14 18)" fill="#CAC8CF" />
        <rect y="18" width="18" height="2" transform="rotate(-90 0 18)" fill="#CAC8CF" />
      </svg>
    </div>
  )
}
