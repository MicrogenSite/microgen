import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './widgets/SelectMenu';
import ColorPicker from './widgets/ColorPicker';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch, getBorderWidth, getBorderSide } from './widgets/helpers'

export default function BorderControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  
  const colors = [
    { label: "Primary", value: "border-primary"},
    { label: "Accent 1", value: "border-accent1"},
    { label: "Accent 2", value: "border-accent2"},
    { label: "Accent 3", value: "border-accent3"},
    { label: "Accent 4", value: "border-accent4"},
    { label: "White", value: "border-white"},
    { label: "Gray Light", value: "border-gray-light"},
    { label: "Gray", value: "border-gray"},
    { label: "Gray Dark", value: "border-gray-dark"},
    { label: "Black", value: "border-black"},
  ]
  const [color, setColor] = useState(getStyleMatch(colors, input.value));

  const widths = [
    { label: "0", value: "0" },
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "6", value: "6" },
    { label: "8", value: "8" },
  ]
  const [width, setWidth] = useState(getBorderWidth(widths, input.value));

  const sides = [
    { label: "All", value: "border-" },
    { label: "Top", value: "border-t-" },
    { label: "Right", value: "border-r-" },
    { label: "Bottom", value: "border-b-" },
    { label: "Left", value: "border-l-" },
  ]
  const [side, setSide] = useState(getBorderSide(sides, input.value));

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = `${color} ${side}${width}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [color, width, sides, inputRef.current]);

  function handleSetColor(value: string) {
    setColor(`border-${value}`)
  }
  
  return (
    <>
      <FieldLabel label={field.label} />
      <div className="flex mb-6 items-center">
        <ColorPicker value={color?.replace('border-','')} onClick={handleSetColor} className="mr-2" />
        <SelectMenu value={width} onChange={setWidth} options={widths} className="w-14 mr-2" />
        <SelectMenu value={side} onChange={setSide} options={sides} className="flex-1" />
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </>
  )
}
