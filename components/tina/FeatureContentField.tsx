import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './widgets/SelectMenu';
import { getStyleMatch } from './widgets/helpers'

export default function FeatureContentField({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [toEdge, setToEdge] = useState(input.value.includes("to-edge"));

  const widthOptions = [
    { label: "20%", value: "w-1/5"},
    { label: "25%", value: "w-1/4"},
    { label: "33%", value: "w-1/3"},
    { label: "50%", value: "w-1/2"},
    { label: "66%", value: "w-2/3"},
    { label: "75%", value: "w-3/4"},
    { label: "80%", value: "w-4/5"},
    { label: "100%", value: "w-full"},
  ]
  const [width, setWidth] = useState(getStyleMatch(widthOptions, input.value) || "w-1/2");
  
  const heightOptions = [
    { label: "auto", value: "min-h-0" },
    { label: "400", value: "min-h-100" },
    { label: "480", value: "min-h-120" },
    { label: "560", value: "min-h-140" },
    { label: "640", value: "min-h-160" },
    { label: "720", value: "min-h-180" },
    { label: "800", value: "min-h-200" },
    { label: "Screen", value: "min-h-screen" },
  ];
  const [height, setHeight] = useState(getStyleMatch(heightOptions, input.value) || "min-h-0");

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = `${width} ${height} ${toEdge === true ? "to-edge" : ""}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [width, height, toEdge, inputRef.current]);

  function handleToEdge() {
    setToEdge(!toEdge)
  }

  function SelectGroup(props) {
    return (
      <div className="relative flex-1 pl-5">
        <span className="absolute text-xs text-gray-300 font-bold top-3 left-0">{props.label}</span>
        <SelectMenu value={props.value} onChange={props.onChange} options={props.options} className="w-full" />
      </div>
    )
  }

  return (
    <div className="mb-4">
      <div className="flex items-center gap-2">
        <SelectGroup label="W" value={width} onChange={setWidth} options={widthOptions} className="w-1/3 shrink-0" />
        <SelectGroup label="H" value={height} onChange={setHeight} options={heightOptions} className="w-1/3 shrink-0" />
        <div className="w-1/3">
          <input className="ml-1 mr-2" type="checkbox" checked={toEdge} onChange={handleToEdge} />
          <label>to edge</label>
        </div>
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </div>
  )
}
