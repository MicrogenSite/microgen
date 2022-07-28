import * as React from "react";

export default function IconGap(props) {
  return (
    <div className={`inline-flex ${props.className}`}>
      <svg width="16" height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2V6.99382e-07L8.74228e-08 0L0 2L16 2Z" fill="#D0CFD4"/>
        <path d="M16 18V16H8.74228e-08L0 18H16Z" fill="#D0CFD4"/>
        <path d="M8 4L8 14" stroke="#D0CFD4" stroke-width="2"/>
        <path d="M4.63605 10.8787L7.87873 14.1213L11.1214 10.8787M11.1214 7.1213L7.87873 3.87866L4.63605 7.1213" stroke="#D0CFD4" stroke-width="2"/>
      </svg>
    </div>
  )
}
