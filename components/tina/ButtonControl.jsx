import React, { useState, useEffect, useRef } from 'react';

import ButtonPicker from './widgets/ButtonPicker';
import FieldLabel from './widgets/FieldLabel';

export default function ColorControl({ field, input }) {
  const inputRef = useRef(null);

  const [type, setType] = useState(input.value);

  function updateHiddenField() {
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = type;
    input.value = newValue;
    (input)._valueTracker?.setValue(lastValue);
    // dispatchEvent is necessary so our form will recognize a change has been made
    input.dispatchEvent(new Event("input", {bubbles: true})); // eslint-disable-line no-undef
  }

  useEffect(() => {
    updateHiddenField()
  }, [type, inputRef.current]);

  function handleSetType(value) {
    setType(value)
  }

  return (
    <div className="mb-4">
      <FieldLabel label={field.label} />
      <ButtonPicker value={type} onChange={handleSetType} />
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </div>
  )
}
