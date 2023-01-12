import React, { useState, useEffect, useRef } from 'react';
import IconMobile from './icons/IconMobile';
import FieldLabel from './widgets/FieldLabel';

export default function Control({ field, input, fieldRow, isResponsive = true }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasMobileStyles, setHasMobileStyles] = useState(input.value.includes("sm:"));
  const [desktopValue, setDesktopValue] = useState(input.value.split(' ').filter(item => !item.includes('sm:')).join(' '));
  const [mobileValue, setMobileValue] = useState(input.value.split(' ').filter(item => item.includes('sm:')).join(' '));

  function toggleMobile() {
    if (!hasMobileStyles && !mobileValue) {
      setMobileValue(desktopValue.split(' ').map(item => `sm:${item}`).join(' '))
    }
    setHasMobileStyles(!hasMobileStyles)
  }

  function updateHiddenField() {
    const input = inputRef.current;
    const lastValue = input.value;
    const newValue = hasMobileStyles ? `${desktopValue} ${mobileValue}` : desktopValue;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }

  useEffect(() => {
    updateHiddenField()
  }, [desktopValue, mobileValue, hasMobileStyles, inputRef.current]);

  const desktopRow = React.cloneElement(fieldRow, { inputValue: desktopValue, onUpdate: value => setDesktopValue(value) })
  const mobileRow = React.cloneElement(fieldRow, { inputValue: mobileValue, onUpdate: value => setMobileValue(value), isMobile: true })

  return (
    <>
      <FieldLabel label={field.label} hasMobileStyles={hasMobileStyles} onMobileToggle={toggleMobile} mobileMode={isResponsive} />
      <div className="mb-4">
        {desktopRow}
        {(isResponsive && hasMobileStyles) &&
          <div className="flex gap-2 my-2 p-1 relative" style={{
            background: "rgba(0,0,0,.05)",
            borderRadius: "7px",
            border: "1px solid rgba(0,0,0,.03)"
          }}>
            <div
              className="absolute"
              style={{
                color: "var(--tina-color-grey-4)",
                top: "13px",
                left: "-17px",
              }}
            >
              <IconMobile />
            </div>
            <div className="w-full flex-1">
              {mobileRow}
            </div>
          </div>
        }
        <input ref={inputRef} type="text" {...input} className="hidden" />
      </div>
    </>
  )
}
