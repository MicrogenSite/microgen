import React, { useState, useEffect, useRef } from 'react';
import IconMobile from './icons/IconMobile';
import SelectMenu from './widgets/SelectMenu';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch } from './widgets/helpers'

export default function SelectField({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const options = field.options.filter(item => item.value !== "")
  const desktopOptions = options;
  const mobileOptions = options.map(item => {
    return {label: item.label, value: `sm:${item.value}`}
  })
  const [desktopStyle, setDesktopStyle] = useState(getStyleMatch(desktopOptions, input.value) || desktopOptions[0].value);
  const [mobileStyle, setMobileStyle] = useState(getStyleMatch(mobileOptions, input.value));
  const [hasMobileStyles, setHasMobileStyles] = useState(input.value.includes("sm:"));

  function toggleMobile() {
    if (!hasMobileStyles && !mobileStyle) {
      setMobileStyle(`sm:${desktopStyle}`)
    }
    setHasMobileStyles(!hasMobileStyles)
  }

  function updateHiddenField() {
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = hasMobileStyles ? `${desktopStyle} ${mobileStyle}` : desktopStyle;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }

  useEffect(() => {
    updateHiddenField()
  }, [desktopStyle, mobileStyle, hasMobileStyles, inputRef.current]);

  return (
    <>
      <FieldLabel label={field.label} hasMobileStyles={hasMobileStyles} onMobileToggle={toggleMobile} mobileMode={field?.ui?.mobileMode} />
      <div className="mb-4">
        <div className="flex gap-2 mb-2">
          <SelectMenu value={desktopStyle} onChange={setDesktopStyle} options={desktopOptions} className="w-full" />
        </div>
        {hasMobileStyles &&
          <div className="flex gap-2 mb-2 relative">
            <div className="absolute -left-4 top-2.5 pl-px" style={{ color: "var(--tina-color-grey-4" }}>
              <IconMobile />
            </div>
            <SelectMenu value={mobileStyle} onChange={setMobileStyle} options={mobileOptions} className="w-full mt-2" />
          </div>
        }
        <input ref={inputRef} type="text" {...input}  className="hidden" />
      </div>
    </>
  )
}
