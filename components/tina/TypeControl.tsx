import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './widgets/SelectMenu';
import ToggleButton from './widgets/ToggleButton';
import ColorPicker from './widgets/ColorPicker';
import IconMobile from './icons/IconMobile';
import IconMargin from './icons/IconMargin';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch } from './widgets/helpers'
 
function getStringBetween(str, start, end) {
  const trim1 = str.substring(str.indexOf(start)).replace(start,'')
  const trim2 = trim1.substring(0, trim1.indexOf(end)).replace(end,'')
  const trim3 = trim2.replace(' ', '').replace(',', '')
  return trim3
}

function getFontNames() {
  const node = document.getElementById("customProperties");
  const cssText = node.childNodes[0].textContent;
  return {
    font1: getStringBetween(cssText, "--font1:", "sans-serif;"),
    font2: getStringBetween(cssText, "--font2:", "sans-serif;"),
    font3: getStringBetween(cssText, "--font3:", "sans-serif;"),
    font4: getStringBetween(cssText, "--font4:", "sans-serif;")
  }
}

function buildColorOptions(prefix?) {
  const options = [
    { label: "Primary", value: "text-primary"},
    { label: "Accent 1", value: "text-accent1"},
    { label: "Accent 2", value: "text-accent2"},
    { label: "Accent 3", value: "text-accent3"},
    { label: "Accent 4", value: "text-accent4"},
    { label: "White", value: "text-white"},
    { label: "Gray Light", value: "text-gray-light"},
    { label: "Gray", value: "text-gray"},
    { label: "Gray Dark", value: "text-gray-dark"},
    { label: "Black", value: "text-black"},
  ]
  const formattedOptions = options.map(option => {
    return {
      label: option.label,
      value: `${prefix || ""}${option.value}`
    }
  });
  return formattedOptions;
}
function buildFontOptions(prefix?) {
  const fontNames = getFontNames()
  const options = [
    { label: fontNames.font1, value: "font-1" },
    { label: fontNames.font2, value: "font-2" },
    { label: fontNames.font3, value: "font-3" },
    { label: fontNames.font4, value: "font-4" },
  ]
  const formattedOptions = options.map(option => {
    return {
      label: option.label,
      value: `${prefix || ""}${option.value}`
    }
  });
  return formattedOptions;
}
function buildSizeOptions(prefix?) {
  const options = [
    { label: "xs", value: "text-xs" },
    { label: "sm", value: "text-sm" },
    { label: "md", value: "text-base" },
    { label: "lg", value: "text-lg" },
    { label: "xl", value: "text-xl" },
    { label: "2xl", value: "text-2xl" },
    { label: "3xl", value: "text-3xl" },
    { label: "4xl", value: "text-4xl" },
    { label: "5xl", value: "text-5xl" },
    { label: "6xl", value: "text-6xl" },
    { label: "7xl", value: "text-7xl" },
    { label: "8xl", value: "text-8xl" },
  ]
  const formattedOptions = options.map(option => {
    return {
      label: option.label,
      value: `${prefix || ""}${option.value}`
    }
  });
  return formattedOptions;
}
function buildMarginOptions(prefix?) {
  const options = [
    { label: "0", value: "mb-0" },
    { label: "1", value: "mb-px" },
    { label: "2", value: "mb-0.5" },
    { label: "4", value: "mb-1" },
    { label: "6", value: "mb-1.5" },
    { label: "8", value: "mb-2" },
    { label: "10", value: "mb-2.5" },
    { label: "12", value: "mb-3" },
    { label: "14", value: "mb-3.5" },
    { label: "16", value: "mb-4" },
    { label: "20", value: "mb-5" },
    { label: "24", value: "mb-6" },
    { label: "28", value: "mb-7" },
    { label: "32", value: "mb-8" },
    { label: "36", value: "mb-9" },
    { label: "40", value: "mb-10" },
    { label: "44", value: "mb-11" },
    { label: "48", value: "mb-12" },
    { label: "56", value: "mb-14" },
    { label: "64", value: "mb-16" },
    { label: "80", value: "mb-20" },
    { label: "96", value: "mb-24" },
  ]
  const formattedOptions = options.map(option => {
    return {
      label: option.label,
      value: `${prefix || ""}${option.value}`
    }
  });
  return formattedOptions;
}
function buildWeightOptions(prefix?) {
  const options = [
    { label: "B", value: "font-bold" }
  ]
  const formattedOptions = options.map(option => {
    return {
      label: option.label,
      value: `${prefix || ""}${option.value}`
    }
  });
  return formattedOptions;
}

export default function TypeControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [hasMobileStyles, setHasMobileStyles] = useState(input.value.includes("sm:"));

  const colorOptions = buildColorOptions();
  const colorOptionsMobile = buildColorOptions('sm:');
  const fontOptions = buildFontOptions();
  const fontOptionsMobile = buildFontOptions('sm:');
  const sizeOptions = buildSizeOptions();
  const sizeOptionsMobile = buildSizeOptions('sm:');
  const marginOptions = buildMarginOptions();
  const marginOptionsMobile = buildMarginOptions('sm:');
  const weightOptions = buildWeightOptions();
  const weightOptionsMobile = buildWeightOptions('sm:');

  const [color, setColor] = useState(getStyleMatch(colorOptions, input.value));
  const [colorMobile, setColorMobile] = useState(getStyleMatch(colorOptionsMobile, input.value));
  const [font, setFont] = useState(getStyleMatch(fontOptions, input.value));
  const [fontMobile, setFontMobile] = useState(getStyleMatch(fontOptionsMobile, input.value));
  const [size, setSize] = useState(getStyleMatch(sizeOptions, input.value));
  const [sizeMobile, setSizeMobile] = useState(getStyleMatch(sizeOptionsMobile, input.value));
  const [margin, setMargin] = useState(getStyleMatch(marginOptions, input.value));
  const [marginMobile, setMarginMobile] = useState(getStyleMatch(marginOptionsMobile, input.value));
  const [weight, setWeight] = useState(getStyleMatch(weightOptions, input.value) || "");
  const [weightMobile, setWeightMobile] = useState(getStyleMatch(weightOptionsMobile, input.value) || "");

  function toggleMobile() {
    setHasMobileStyles(!hasMobileStyles)
  }

  function updateHiddenField() {
    const input = inputRef.current;
    const lastValue = input.value;
    const defaultClasses = `${color} ${font} ${size} ${margin} ${weight}`;
    const mobileClasses = `${colorMobile} ${fontMobile} ${sizeMobile} ${marginMobile} ${weightMobile}`;
    if (mobileClasses.includes("undefined")) {
      setColorMobile(`sm:${color || 'text-white'}`)
      setFontMobile(`sm:${font || 'font-1'}`)
      setSizeMobile(`sm:${size || 'text-base'}`)
      setMarginMobile(`sm:${margin || 'mb-0'}`)
      if (weight !== "") {
        setWeightMobile(`sm:${weight}`)
      }
    }
    const newValue = hasMobileStyles ? `${defaultClasses} ${mobileClasses}` : defaultClasses;
    input.value = newValue;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }
  
  useEffect(() => {
    updateHiddenField()
  }, [color, font, size, margin, weight, colorMobile, fontMobile, sizeMobile, marginMobile, weightMobile, hasMobileStyles, inputRef.current]);

  function handleSetColor(value: string) {
    setColor(`text-${value}`)
  }
  function handleSetColorMobile(value: string) {
    setColorMobile(`sm:text-${value}`)
  }

  return (
    <>
      <FieldLabel label={field.label} hasMobileStyles={hasMobileStyles} onMobileToggle={toggleMobile} mobileMode={true} />
      <div className="mb-4">
        <div className="flex mb-2 items-center gap-2">
          <ColorPicker value={color?.replace('text-','')} onClick={handleSetColor} className="w-9" />
          <SelectMenu value={font} onChange={setFont} options={fontOptions} className="w-12 flex-1" />
          <SelectMenu value={size} onChange={setSize} options={sizeOptions} className="w-13" />
          <div className="w-3.5 pr-.5">
            <IconMargin className="float-right" />
          </div>
          <SelectMenu value={margin} onChange={setMargin} options={marginOptions} className="w-12 " />
          <ToggleButton value={weight} onClick={setWeight} options={weightOptions} className="w-9 shrink-0" />
        </div>
        {hasMobileStyles &&
          <div className="flex mb-2 relative">
            <div className="absolute -left-4 top-2.5 pl-px">
              <IconMobile />
            </div>
            <div className="flex items-center w-full">
              <ColorPicker value={colorMobile?.replace('sm:text-','')} onClick={handleSetColorMobile} className="mr-2" />
              <SelectMenu value={fontMobile} onChange={setFontMobile} options={fontOptionsMobile} className="flex-grow mr-2" />
              <SelectMenu value={sizeMobile} onChange={setSizeMobile} options={sizeOptionsMobile} className="w-12" />
              <div className="w-6 pr-1">
                <IconMargin className="float-right" />
              </div>
              <SelectMenu value={marginMobile} onChange={setMarginMobile} options={marginOptionsMobile} className="w-12 mr-2" />
              <ToggleButton value={weightMobile} onClick={setWeightMobile} options={weightOptionsMobile} className="w-9" />
            </div>
          </div>
        }
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </>
  )
}
