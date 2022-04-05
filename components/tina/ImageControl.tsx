import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './widgets/SelectMenu';
import IconMargin from './icons/IconMargin';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch } from './widgets/helpers'

export default function ImageControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const heights = [
    { label: "auto", value: "" },
    { label: "16", value: "h-4" },
    { label: "20", value: "h-5" },
    { label: "24", value: "h-6" },
    { label: "28", value: "h-7" },
    { label: "32", value: "h-8" },
    { label: "36", value: "h-9" },
    { label: "40", value: "h-10" },
    { label: "44", value: "h-11" },
    { label: "48", value: "h-12" },
    { label: "56", value: "h-14" },
    { label: "64", value: "h-16" },
    { label: "80", value: "h-20" },
    { label: "96", value: "h-24" },
    { label: "112", value: "h-28" },
    { label: "128", value: "h-32" },
    { label: "144", value: "h-36" },
    { label: "160", value: "h-40" },
    { label: "176", value: "h-44" },
    { label: "192", value: "h-48" },
    { label: "208", value: "h-52" },
    { label: "224", value: "h-56" },
    { label: "240", value: "h-60" },
    { label: "256", value: "h-64" },
    { label: "288", value: "h-72" },
    { label: "320", value: "h-80" },
    { label: "384", value: "h-96" },
  ]
  const [height, setHeight] = useState(getStyleMatch(heights, input.value));
  const fits = [
    { label: "Contain", value: "object-contain" },
    { label: "Cover", value: "object-cover" },
    { label: "Stretch", value: "object-fill" },
    { label: "Scale", value: "object-scale-down" },
    { label: "None", value: "object-none" },
  ]
  const [fit, setFit] = useState(getStyleMatch(fits, input.value));
  const positions = [
    { label: "Left", value: "object-left" },
    { label: "Center", value: "object-center" },
    { label: "Right", value: "object-right" },
  ]
  const [position, setPosition] = useState(getStyleMatch(positions, input.value));
  const margins = [
    { label: "0", value: "mb-0" },
    { label: "1", value: "mb-px" },
    { label: "2", value: "mb-0.5" },
    { label: "4", value: "mb-1" },
    { label: "6", value: "mb-1.5" },
    { label: "8", value: "mb-2" },
    { label: "10", value: "mb-2.5" },
    { label: "12", value: "mb-3" },
    { label: "14", value: "mb-3.5" },
    { label: "16", value: "mb-4" },
    { label: "20", value: "mb-5" },
    { label: "24", value: "mb-6" },
    { label: "28", value: "mb-7" },
    { label: "32", value: "mb-8" },
    { label: "36", value: "mb-9" },
    { label: "40", value: "mb-10" },
    { label: "44", value: "mb-11" },
    { label: "48", value: "mb-12" },
    { label: "56", value: "mb-14" },
    { label: "64", value: "mb-16" },
    { label: "80", value: "mb-20" },
    { label: "96", value: "mb-24" },
  ]
  const [margin, setMargin] = useState(getStyleMatch(margins, input.value));

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = `${height} ${fit} ${position} ${margin}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [height, fit, position, margin, inputRef.current]);

  return (
    <>
      <FieldLabel label={field.label} />
      <div className="flex mb-2 items-center">
        <label className="text-xs text-gray w-18 mr-2">Max Height</label>
        <SelectMenu value={height} onChange={setHeight} options={heights} className="w-24" />
        <div className="w-6 pr-1">
          <IconMargin className="float-right" />
        </div>
        <SelectMenu value={margin} onChange={setMargin} options={margins} className="w-18" />
      </div>
      <div className="flex gap-2 mb-6 items-center w-full">
        <SelectMenu value={fit} onChange={setFit} options={fits} className="w-1/2" />
        <SelectMenu value={position} onChange={setPosition} options={positions} className="w-1/2" />
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </>
  )
}
