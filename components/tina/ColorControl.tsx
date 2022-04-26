import React, { useState, useEffect, useRef } from 'react';

import ColorPicker from './widgets/ColorPicker';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch } from './widgets/helpers'

export default function ColorControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const colors = [
    { label: "Primary", value: "bg-primary"},
    { label: "Accent 1", value: "bg-accent1"},
    { label: "Accent 2", value: "bg-accent2"},
    { label: "Accent 3", value: "bg-accent3"},
    { label: "Accent 4", value: "bg-accent4"},
    { label: "White", value: "bg-white"},
    { label: "Gray Light", value: "bg-gray-light"},
    { label: "Gray", value: "bg-gray"},
    { label: "Gray Dark", value: "bg-gray-dark"},
    { label: "Black", value: "bg-black"},
  ]
  const [color, setColor] = useState(getStyleMatch(colors, input.value) || "white");

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    input.value = color;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [color, inputRef.current]);

  function handleSetColor(value: string) {
    setColor(value)
  }

  return (
    <>
      <FieldLabel label={field.label} />
      <ColorPicker width={120} value={color} onClick={handleSetColor} />
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </>
  )
}
