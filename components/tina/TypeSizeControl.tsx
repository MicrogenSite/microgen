import React, { useState, useEffect, useRef } from 'react';
import FieldLabel from './widgets/FieldLabel';

export default function TypeSizeControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [textSize, setTextSize] = useState(getTextSize(input.value))
  const [textLeading, setTextLeading] = useState(getTextLeading(input.value))

  function getTextSize(value) {
    return value.substring(0,value.indexOf("/"))
  }
  function getTextLeading(value) {
    return value.substring(value.indexOf("/") + 1)
  }

  function updateHiddenField() {
    const input = inputRef.current;
    const lastValue = input.value;
    const jsonValue = JSON.stringify(textSize);
    const newValue = `${textSize}/${textLeading}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }

  useEffect(() => {
    updateHiddenField()
  }, [textSize, textLeading, inputRef.current]);

  const inputClasses = "w-24 px-3 py-1 shadow-inner focus:shadow-outline focus:border-blue-500 text-base text-gray-600 bg-white border border-gray-200 focus:text-gray-900 rounded-md"
  return (
    <>
      <FieldLabel label={field.label} />
      <div className="mb-4">
        {/* <label className="w-20">Size</label> */}
        <input type="number" className={`flex-1 ${inputClasses}`} onChange={e => setTextSize(e.target.value)} value={textSize}/>
        <label className="w-10 px-3 text-center">/</label>
        <input type="number" className={`flex-1 ${inputClasses}`} onChange={e => setTextLeading(e.target.value)} value={textLeading}/>
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </>
  )
}
