import React, { useState, useEffect, useRef } from 'react';

import ColorPicker from './widgets/ColorPicker';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch } from './widgets/helpers'

export default function ColorControl({ field, input }) {
  const inputRef = useRef(null);
  const colors = [
    { label: "Primary", value: "primary"},
    { label: "Accent 1", value: "accent1"},
    { label: "Accent 2", value: "accent2"},
    { label: "Accent 3", value: "accent3"},
    { label: "Accent 4", value: "accent4"},
    { label: "White", value: "white"},
    { label: "Gray Light", value: "gray-light"},
    { label: "Gray", value: "gray"},
    { label: "Gray Dark", value: "gray-dark"},
    { label: "Black", value: "black"},
  ]
  const [color, setColor] = useState(getStyleMatch(colors, input.value));

  function updateHiddenField() {
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = color;
    input.value = newValue;
    input._valueTracker?.setValue(lastValue);
    // dispatchEvent is necessary so our form will recognize a change has been made
    input.dispatchEvent(new Event("input", {bubbles: true})); // eslint-disable-line no-undef
  }

  useEffect(() => {
    updateHiddenField()
  }, [color, inputRef.current]);

  function handleSetColor(value) {
    setColor(value)
  }

  return (
    <div className='mb-6'>
      <FieldLabel label={field.label} />
      <ColorPicker width={310} value={color} onClick={handleSetColor} />
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </div>
  )
}
