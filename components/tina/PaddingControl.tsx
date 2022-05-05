import React, { useState, useEffect, useRef } from 'react';
import IconMobile from './icons/IconMobile';
import SelectMenu from './widgets/SelectMenu';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch } from './widgets/helpers'

function buildOptions(prefix) {
  const options = [
    { label: "0", value: "0" },
    { label: "1", value: "px" },
    { label: "2", value: "0.5" },
    { label: "4", value: "1" },
    { label: "6", value: "1.5" },
    { label: "8", value: "2" },
    { label: "10", value: "2.5" },
    { label: "12", value: "3" },
    { label: "14", value: "3.5" },
    { label: "16", value: "4" },
    { label: "20", value: "5" },
    { label: "24", value: "6" },
    { label: "28", value: "7" },
    { label: "32", value: "8" },
    { label: "36", value: "9" },
    { label: "40", value: "10" },
    { label: "44", value: "11" },
    { label: "48", value: "12" },
    { label: "56", value: "14" },
    { label: "64", value: "16" },
    { label: "80", value: "20" },
    { label: "96", value: "24" },
    { label: "112", value: "28" },
    { label: "128", value: "32" },
    { label: "144", value: "36" },
    { label: "160", value: "40" },
    { label: "176", value: "44" },
    { label: "192", value: "48" },
    { label: "208", value: "52" },
    { label: "224", value: "56" },
    { label: "240", value: "60" },
    { label: "256", value: "64" },
    { label: "288", value: "72" },
    { label: "320", value: "80" },
    { label: "384", value: "96" },
  ]
  const newOptions = options.map(option => {
    return {
      label: option.label,
      value: `${prefix}-${option.value}`
    }
  });
  return newOptions;
}

export default function PaddingControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasMobileStyles, setHasMobileStyles] = useState(input.value.includes("sm:"));

  const topOptions = buildOptions('pt');
  const bottomOptions = buildOptions('pb');
  const rightOptions = buildOptions('pr');
  const leftOptions = buildOptions('pl');
  const topOptionsMobile = buildOptions('sm:pt');
  const bottomOptionsMobile = buildOptions('sm:pb');
  const rightOptionsMobile = buildOptions('sm:pr');
  const leftOptionsMobile = buildOptions('sm:pl');
  
  const [top, setTop] = useState(getStyleMatch(topOptions, input.value));
  const [bottom, setBottom] = useState(getStyleMatch(bottomOptions, input.value));
  const [right, setRight] = useState(getStyleMatch(rightOptions, input.value));
  const [left, setLeft] = useState(getStyleMatch(leftOptions, input.value));
  const [topMobile, setTopMobile] = useState(getStyleMatch(topOptionsMobile, input.value));
  const [bottomMobile, setBottomMobile] = useState(getStyleMatch(bottomOptionsMobile, input.value));
  const [rightMobile, setRightMobile] = useState(getStyleMatch(rightOptionsMobile, input.value));
  const [leftMobile, setLeftMobile] = useState(getStyleMatch(leftOptionsMobile, input.value));

  function toggleMobile() {
    if (!hasMobileStyles && topMobile === undefined) {
      setTopMobile("sm:pt-0")
      setBottomMobile("sm:pb-0")
      setRightMobile("sm:pr-0")
      setLeftMobile("sm:pl-0")
    }
    setHasMobileStyles(!hasMobileStyles)
  }

  function updateHiddenField() {
    const input = inputRef.current;
    const lastValue = input.value;
    const defaultClasses = `${top} ${bottom} ${right} ${left}`;
    const mobileClasses = `${topMobile} ${bottomMobile} ${rightMobile} ${leftMobile}`;
    const newValue = hasMobileStyles ? `${defaultClasses} ${mobileClasses}` : defaultClasses;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }

  useEffect(() => {
    updateHiddenField()
  }, [top, bottom, right, left, topMobile, bottomMobile, rightMobile, leftMobile, hasMobileStyles, inputRef.current]);

  function SelectGroup(props) {
    return (
      <div className="relative flex-1 pl-5">
        <span className="absolute text-xs text-gray-300 font-bold top-3 left-0.5">{props.label}</span>
        <SelectMenu value={props.value} onChange={props.onChange} options={props.options} className="w-full" />
      </div>
    )
  }

  return (
    <>
      <FieldLabel label={field.label} hasMobileStyles={hasMobileStyles} onMobileToggle={toggleMobile} mobileMode={true} />
      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <SelectGroup label="T" value={top} onChange={setTop} options={topOptions} />
          <SelectGroup label="B" value={bottom} onChange={setBottom} options={bottomOptions} />
          <SelectGroup label="L" value={left} onChange={setLeft} options={leftOptions} />
          <SelectGroup label="R" value={right} onChange={setRight} options={rightOptions} />
        </div>
        {hasMobileStyles &&
          <div className="flex gap-2 mb-2 relative">
            <div className="absolute -left-4 top-2.5 pl-px" style={{ color: "var(--tina-color-grey-4" }}>
              <IconMobile />
            </div>
            <SelectGroup label="T" value={topMobile} onChange={setTopMobile} options={topOptionsMobile} />
            <SelectGroup label="B" value={bottomMobile} onChange={setBottomMobile} options={bottomOptionsMobile} />
            <SelectGroup label="L" value={leftMobile} onChange={setLeftMobile} options={leftOptionsMobile} />
            <SelectGroup label="R" value={rightMobile} onChange={setRightMobile} options={rightOptionsMobile} />
          </div>
        }
        <input ref={inputRef} type="text" {...input}  className="hidden" />
      </div>
    </>
  )
}
