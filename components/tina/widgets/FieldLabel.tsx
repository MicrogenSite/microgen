import React from 'react';
import IconMobile from '../icons/IconMobile';

interface FieldLabelProps {
  label: string,
  hasMobileStyles?: boolean,
  mobileMode?: boolean,
  onMobileToggle?: Function;
}
export default function FieldLabel(props:FieldLabelProps) {
  function handleChange() {
    props.onMobileToggle()
  }

  return (
    <div className="relative">
      <label className="block mb-2 overflow-hidden font-bold text-tina-gray8" style={{
        fontSize: "var(--tina-font-size-1)",
        letterSpacing: "0.01em",
        textOverflow: "ellipsis",
      }}>{props.label}</label>
      {props.mobileMode &&
        <div className="absolute right-0 top-0" style={{ color: props.hasMobileStyles ? "var(--tina-color-primary)" : "var(--tina-color-grey-4)"}}>
          <input type="checkbox" checked={props.hasMobileStyles} onChange={handleChange} />
          <IconMobile className="float-right mt-1 ml-2" />
        </div>
      }
    </div>
  )
}