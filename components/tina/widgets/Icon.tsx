import * as React from "react";

interface IconProps {
  icon: string;
  className?: string;
}

const icons = {
  fontSize: `<svg fill="currentColor" width="18" height="13" viewBox="0 0 18 13" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M5 0H18V3H13V13H10V3H5V0ZM8 5H0V7H3V13H5V7H8V5Z"/></svg>`,
  mobile: `<svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M8 2H2L2 14H8V2ZM2 0C0.895431 0 0 0.895431 0 2V14C0 15.1046 0.89543 16 2 16H8C9.10457 16 10 15.1046 10 14V2C10 0.895431 9.10457 0 8 0H2Z" fill="currentColor"/><rect x="2" y="12" width="6" height="2" fill="currentColor"/></svg>`,
  'angle-down': `<svg fill="currentColor" width="18" height="13" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M151.5 347.8L3.5 201c-4.7-4.7-4.7-12.3 0-17l19.8-19.8c4.7-4.7 12.3-4.7 17 0L160 282.7l119.7-118.5c4.7-4.7 12.3-4.7 17 0l19.8 19.8c4.7 4.7 4.7 12.3 0 17l-148 146.8c-4.7 4.7-12.3 4.7-17 0z"></path></svg>`,
  'items-start': `<svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="12" transform="matrix(1 0 0 -1 4 15)"/><rect width="3" height="8" transform="matrix(1 0 0 -1 9 11)"/><rect width="16" height="1" transform="matrix(1 0 0 -1 0 1)"/></svg>`,
  'items-center': `<svg width="16" height="12" viewBox="0 0 16 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect width="3" height="12" transform="matrix(1 0 0 -1 4 12)"/><rect width="3" height="8" transform="matrix(1 0 0 -1 9 10)"/><rect width="16" height="1" transform="matrix(1 0 0 -1 0 6)"/></svg>`,
  'items-end': `<svg width="16" height="15" viewBox="0 0 16 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><rect x="4" width="3" height="12"/><rect x="9" y="4" width="3" height="8"/><rect y="14" width="16" height="1"/></svg>`,
  'items-start-vertical': `<svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 7L3 4L13 4L13 7L3 7Z" fill="black"/><path d="M3 12L3 9H9L9 12H3Z" fill="black"/><path d="M0 16L6.99382e-07 0L1 4.37114e-08L1 16H0Z" fill="black"/></svg>`,
  'items-center-vertical': `<svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 7L1.31134e-07 4L13 4V7L0 7Z" fill="black"/><path d="M2 12L2 9H11V12H2Z" fill="black"/><path d="M6 16L6 0L7 4.37114e-08L7 16H6Z" fill="black"/></svg>`,
  'items-end-vertical': `<svg width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 7V4L0 4L3.93403e-07 7L10 7Z" fill="black"/><path d="M10 12L10 9L4 9L4 12L10 12Z" fill="black"/><path d="M13 16L13 0L12 1.31134e-07L12 16H13Z" fill="black"/></svg>`,
  'text-left': `<svg fill="currentColor" width="18" height="13" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M12.83 344h262.34A12.82 12.82 0 0 0 288 331.17v-22.34A12.82 12.82 0 0 0 275.17 296H12.83A12.82 12.82 0 0 0 0 308.83v22.34A12.82 12.82 0 0 0 12.83 344zm0-256h262.34A12.82 12.82 0 0 0 288 75.17V52.83A12.82 12.82 0 0 0 275.17 40H12.83A12.82 12.82 0 0 0 0 52.83v22.34A12.82 12.82 0 0 0 12.83 88zM432 168H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0 256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16z"></path></svg>`,
  'text-center': `<svg fill="currentColor" width="18" height="13" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M108.1 88h231.81A12.09 12.09 0 0 0 352 75.9V52.09A12.09 12.09 0 0 0 339.91 40H108.1A12.09 12.09 0 0 0 96 52.09V75.9A12.1 12.1 0 0 0 108.1 88zM432 424H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm0-256H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm-92.09 176A12.09 12.09 0 0 0 352 331.9v-23.81A12.09 12.09 0 0 0 339.91 296H108.1A12.09 12.09 0 0 0 96 308.09v23.81a12.1 12.1 0 0 0 12.1 12.1z"></path></svg>`,
  'text-right': `<svg fill="currentColor" width="18" height="13" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M16 216h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16zm416 208H16a16 16 0 0 0-16 16v16a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-16a16 16 0 0 0-16-16zm3.17-384H172.83A12.82 12.82 0 0 0 160 52.83v22.34A12.82 12.82 0 0 0 172.83 88h262.34A12.82 12.82 0 0 0 448 75.17V52.83A12.82 12.82 0 0 0 435.17 40zm0 256H172.83A12.82 12.82 0 0 0 160 308.83v22.34A12.82 12.82 0 0 0 172.83 344h262.34A12.82 12.82 0 0 0 448 331.17v-22.34A12.82 12.82 0 0 0 435.17 296z"></path></svg>`,
}

export default function Icon(props:IconProps) {
  return (
    <div className={`inline-flex ${props?.className}`}>
      <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icons[props.icon])}`} />
    </div>
  )
}
