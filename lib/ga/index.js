// log specific events happening.
export const event = ({ action, params }) => {
  if (window?.gtag) {
    window?.gtag('event', action, params)
  }
}