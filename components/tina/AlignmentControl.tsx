import React, { useState, useEffect, useRef } from 'react';
import IconMobile from './icons/IconMobile';
import IconMargin from './icons/IconMargin';
import IconGap from './icons/IconGap';
import IconGapVertical from './icons/IconGapVertical';
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
  
  const gapOptions = [
    { label: "0", value: ""},
    { label: "4", value: "gap-1"},
    { label: "8", value: "gap-2"},
    { label: "16", value: "gap-4"},
    { label: "24", value: "gap-6"},
    { label: "32", value: "gap-8"},
    { label: "48", value: "gap-12"},
    { label: "80", value: "gap-20"},
    { label: "96", value: "gap-24"},
    { label: "112", value: "gap-28"},
    { label: "128", value: "gap-32"},
    { label: "160", value: "gap-40"},
    { label: "192", value: "gap-48"},
  ]
  const [gap, setGap] = useState(getStyleMatch(gapOptions, input.value) || "");

  const layoutOptionsMobile = [
    { label: "left image", value: "sm:flex-row"},
    { label: "right image", value: "sm:flex-row-reverse"},
    { label: "top image", value: "sm:flex-col"},
    { label: "bottom image", value: "sm:flex-col-reverse"},
  ]
  const [layoutMobile, setLayoutMobile] = useState(getStyleMatch(layoutOptionsMobile, input.value) || "sm:flex-col");
  
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
    const desktopStyles = `${layout} ${contentAlign} ${contentAlignVertical} ${gap}`
    const mobileStyles = `${layoutMobile} ${contentAlignMobile} ${contentAlignVerticalMobile}`;
    const newValue = `${desktopStyles} ${hasMobileStyles ? mobileStyles : ''}`;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [layout, contentAlign, contentAlignVertical, gap, layoutMobile, contentAlignMobile, contentAlignVerticalMobile, hasMobileStyles, inputRef.current]);

  return (
    <div className="mb-4">
      <FieldLabel label={field.label} hasMobileStyles={hasMobileStyles} onMobileToggle={toggleMobile} mobileMode={true} />
      <div className="flex gap-2">
        <SelectMenu value={layout} onChange={setLayout} options={layoutOptions} className="w-1/2 shrink-0" />
        {layout.includes("row") && (
          <IconPicker value={contentAlign} onClick={value => setContentAlign(value)} options={contentAlignOptions} menuPosition="right" className="flex-1" />
        )}
        {layout.includes("col") && (
          <IconPicker value={contentAlignVertical} onClick={value => setContentAlignVertical(value)} options={contentAlignVerticalOptions} menuPosition="right" className="flex-1" />
        )}
        <div className="w-4 pl-2 pt-3">
          {layout.includes("row") && (
            <IconGap className="float-right" />
          )}
          {layout.includes("col") && (
            <IconGapVertical className="float-right" />
          )}
        </div>
        <SelectMenu value={gap} onChange={setGap} options={gapOptions} className="w-12" />
      </div>
      {hasMobileStyles &&
        <div className="flex gap-2 mt-2 relative">
          <div className="absolute -left-4 top-2.5 pl-px" style={{ color: "var(--tina-color-grey-4" }}>
            <IconMobile />
          </div>
          <SelectMenu value={layoutMobile} onChange={setLayoutMobile} options={layoutOptionsMobile} className="w-1/2 shrink-0" />
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
