import React, { useState, useEffect, useRef } from 'react';
import IconMobile from './icons/IconMobile';
import FieldLabel from './widgets/FieldLabel';
import IconPicker from './widgets/IconPicker';
import SelectMenu from './widgets/SelectMenu';
import { getStyleMatch } from './widgets/helpers'

export default function AlignmentControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasMobileStyles, setHasMobileStyles] = useState(input.value.includes("sm:"));

  const layoutOptions = [
    { label: "left image", value: "flex-row"},
    { label: "right image", value: "flex-row-reverse"},
    { label: "top image", value: "flex-col"},
    { label: "bottom image", value: "flex-col-reverse"},
  ]
  const [layout, setLayout] = useState(getStyleMatch(layoutOptions, input.value) || "flex-row");

  const textAlignOptions = [
    { label: "text-left", value: "text-left"},
    { label: "text-center", value: "text-center"},
    { label: "text-right", value: "text-right"},
  ]
  const [textAlign, setTextAlign] = useState(getStyleMatch(textAlignOptions, input.value) || "text-left");
  
  const contentAlignOptions = [
    { label: "items-start", value: "items-start"},
    { label: "items-center", value: "items-center"},
    { label: "items-end", value: "items-end"},
  ]
  const [contentAlign, setContentAlign] = useState(getStyleMatch(contentAlignOptions, input.value) || "items-start");
  
  const contentAlignVerticalOptions = [
    { label: "items-start-vertical", value: "items-start-vertical"},
    { label: "items-center-vertical", value: "items-center-vertical"},
    { label: "items-end-vertical", value: "items-end-vertical"},
  ]
  const [contentAlignVertical, setContentAlignVertical] = useState(getStyleMatch(contentAlignVerticalOptions, input.value) || "items-start-vertical");
  
  const layoutOptionsMobile = [
    { label: "left image", value: "sm:flex-row"},
    { label: "right image", value: "sm:flex-row-reverse"},
    { label: "top image", value: "sm:flex-col"},
    { label: "bottom image", value: "sm:flex-col-reverse"},
  ]
  const [layoutMobile, setLayoutMobile] = useState(getStyleMatch(layoutOptionsMobile, input.value) || "sm:flex-col");

  const textAlignOptionsMobile = [
    { label: "text-left", value: "sm:text-left"},
    { label: "text-center", value: "sm:text-center"},
    { label: "text-right", value: "sm:text-right"},
  ]
  const [textAlignMobile, setTextAlignMobile] = useState(getStyleMatch(textAlignOptionsMobile, input.value) || "sm:text-left");
  
  const contentAlignOptionsMobile = [
    { label: "items-start", value: "sm:items-start"},
    { label: "items-center", value: "sm:items-center"},
    { label: "items-end", value: "sm:items-end"},
  ]
  const [contentAlignMobile, setContentAlignMobile] = useState(getStyleMatch(contentAlignOptionsMobile, input.value) || "sm:items-start");
  
  const contentAlignVerticalOptionsMobile = [
    { label: "items-start-vertical", value: "sm:items-start-vertical"},
    { label: "items-center-vertical", value: "sm:items-center-vertical"},
    { label: "items-end-vertical", value: "sm:items-end-vertical"},
  ]
  const [contentAlignVerticalMobile, setContentAlignVerticalMobile] = useState(getStyleMatch(contentAlignVerticalOptionsMobile, input.value) || "sm:items-start-vertical");

  function toggleMobile() {
    if (!hasMobileStyles && !layoutMobile) {
      setLayoutMobile(`sm:flex-col`)
    }
    setHasMobileStyles(!hasMobileStyles)
  }

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const desktopStyles = `${layout} ${textAlign} ${contentAlign} ${contentAlignVertical}`
    const mobileStyles = `${layoutMobile} ${textAlignMobile} ${contentAlignMobile} ${contentAlignVerticalMobile}`;
    const newValue = `${desktopStyles} ${hasMobileStyles ? mobileStyles : ''}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [layout, textAlign, contentAlign, contentAlignVertical, layoutMobile, textAlignMobile, contentAlignMobile, contentAlignVerticalMobile, hasMobileStyles, inputRef.current]);

  return (
    <div className="mb-4">
      <FieldLabel label={field.label} hasMobileStyles={hasMobileStyles} onMobileToggle={toggleMobile} mobileMode={true} />
      <div className="flex gap-2">
        <SelectMenu value={layout} onChange={setLayout} options={layoutOptions} className="w-1/2 shrink-0" />
        <IconPicker value={textAlign} onClick={value => setTextAlign(value)} options={textAlignOptions} menuPosition="right" className="flex-1" />        
        {layout.includes("row") && (
          <IconPicker value={contentAlign} onClick={value => setContentAlign(value)} options={contentAlignOptions} menuPosition="right" className="flex-1" />
        )}
        {layout.includes("col") && (
          <IconPicker value={contentAlignVertical} onClick={value => setContentAlignVertical(value)} options={contentAlignVerticalOptions} menuPosition="right" className="flex-1" />
        )}
        </div>
      {hasMobileStyles &&
        <div className="flex gap-2 mt-2 relative">
          <div className="absolute -left-4 top-2.5 pl-px" style={{ color: "var(--tina-color-grey-4" }}>
            <IconMobile />
          </div>
          <SelectMenu value={layoutMobile} onChange={setLayoutMobile} options={layoutOptionsMobile} className="w-1/2 shrink-0" />
          <IconPicker value={textAlignMobile} onClick={value => setTextAlignMobile(value)} options={textAlignOptionsMobile} menuPosition="right" className="flex-1" />
          {layoutMobile.includes("row") && (
            <IconPicker value={contentAlignMobile} onClick={value => setContentAlignMobile(value)} options={contentAlignOptionsMobile} menuPosition="right" className="flex-1" />
          )}
          {layoutMobile.includes("col") && (
            <IconPicker value={contentAlignVerticalMobile} onClick={value => setContentAlignVerticalMobile(value)} options={contentAlignVerticalOptionsMobile} menuPosition="right" className="flex-1" />
          )}
        </div>
      }
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </div>
  )
}
