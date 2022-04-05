import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './widgets/SelectMenu';
import { getStyleMatch } from './widgets/helpers'

export default function FeatureImageField({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [toEdge, setToEdge] = useState(input.value?.includes("to-edge"));

  const fitOptions = [
    { label: "natural", value: "object-scale-down" },
    { label: "fit", value: "object-contain" },
    { label: "fill", value: "object-cover" },
  ];
  const [fit, setFit] = useState(getStyleMatch(fitOptions, input.value) || "object-scale-down");

  const positionOptions = [
    { label: "bottom", value: "object-bottom" },
    { label: "center", value: "object-center" },
    { label: "left", value: "object-left" },
    { label: "left Bottom", value: "object-left-bottom" },
    { label: "left Top", value: "object-left-top" },
    { label: "right", value: "object-right" },
    { label: "right Bottom", value: "object-right-bottom" },
    { label: "right Top", value: "object-right-top" },
    { label: "top", value: "object-top" },
  ]
  const [position, setPosition] = useState(getStyleMatch(positionOptions, input.value) || "object-center");

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = `${position} ${fit} ${toEdge === true ? "to-edge" : ""}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [position, fit, toEdge, inputRef.current]);

  function handleToEdge() {
    setToEdge(!toEdge)
  }

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <SelectMenu value={fit} onChange={setFit} options={fitOptions} className="w-1/3 shrink-0" />
        <SelectMenu value={position} onChange={setPosition} options={positionOptions} className="w-1/3 shrink-0" />
        <div className="w-1/3">
          <input className="ml-1 mr-2" type="checkbox" checked={toEdge} onChange={handleToEdge} />
          <label>to edge</label>
        </div>
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </div>
  )
}
