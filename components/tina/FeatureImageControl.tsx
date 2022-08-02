import React, { useState, useEffect, useRef } from 'react';
import FieldLabel from './widgets/FieldLabel';
import IconPicker from './widgets/IconPicker';
import { getStyleMatch } from './widgets/helpers'

const NumberGroup = ({value, label="", className="", onChange}) => {
  return (
    <div className={`relative pl-6 ${className}`}>
      <span className="absolute text-xs text-gray-300 font-bold top-3 left-0.5">{label}</span>
      <input value={value} onChange={onChange} type="number" step="1" placeholder="auto" className="border border-gray-100 shadow text-gray-500 text-sm p-1 pl-2 h-10 w-full rounded-md hover:border-gray-200 focus:border-blue-500" />
    </div>
  );
};

export default function FeatureImageControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const marginOptions = [
    { label: "margin-right", value: "mr-auto" },
    { label: "margin-center", value: "mx-auto" },
    { label: "margin-left", value: "ml-auto" },
  ]
  const [margin, setMargin] = useState(getStyleMatch(marginOptions, input.value) || "object-center");

  const getWidth = () => input.value.split(' ').find(item => item.includes('wpx-'))
  const [width, setWidth] = useState(getWidth() || "")
  
  const getHeight = () => input.value.split(' ').find(item => item.includes('hpx-'))
  const [height, setHeight] = useState(getHeight() || "")

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = `${width} ${height} ${margin}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [width, height, margin, inputRef.current]);

  return (
    <div className="mb-4">
      <FieldLabel label="Image" />
      <div className="grid grid-cols-3 gap-2">
        <NumberGroup value={width.replace('wpx-', '')} label="W"  onChange={event => setWidth(`wpx-${event.target.value}`)}  />
        <NumberGroup value={height.replace('hpx-', '')} label="H" onChange={event => setHeight(`hpx-${event.target.value}`)} />
        <IconPicker value={margin} onClick={value => setMargin(value)} options={marginOptions} menuPosition="right" className="flex-none" />
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </div>
  )
}
