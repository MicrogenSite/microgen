import * as React from "react";

export default function IconGap(props) {
  return (
    <div className={`inline-flex ${props.className}`}>
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 8H14" stroke="#D0CFD4" stroke-width="2"/>
        <path d="M7.12132 4.87868L3.87868 8.12132L7.12132 11.364M10.8787 11.364L14.1213 8.12132L10.8787 4.87868" stroke="#D0CFD4" stroke-width="2"/>
        <rect width="2" height="16" fill="#D0CFD4"/>
        <rect x="16" width="2" height="16" fill="#D0CFD4"/>
      </svg>
    </div>
  )
}
