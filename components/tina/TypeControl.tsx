import React, { useState, useEffect } from 'react';
import { getStyleMatch } from '../../helpers/utilities'
import Control from './Control';
import SelectMenu from './widgets/SelectMenu';
import ColorPicker from './widgets/ColorPicker';
import IconMargin from './icons/IconMargin';

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
  const options = [
    { label: "Headline Xs", value: "mg-headline-xs" },
    { label: "Headline Sm", value: "mg-headline-sm" },
    { label: "Headline Md", value: "mg-headline-md" },
    { label: "Headline Lg", value: "mg-headline-lg" },
    { label: "Headline Xl", value: "mg-headline-xl" },
    { label: "Body Xs", value: "mg-body-xs" },
    { label: "Body Sm", value: "mg-body-sm" },
    { label: "Body Md", value: "mg-body-md" },
    { label: "Body Lg", value: "mg-body-lg" },
    { label: "Body Xl", value: "mg-body-xl" },
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
    { label: "default", value: "" },
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

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const prefix = isMobile ? "sm:" : ""
  const colorOptions = buildColorOptions(prefix);
  const fontOptions = buildFontOptions(prefix);
  const marginOptions = buildMarginOptions(prefix);
  const [color, setColor] = useState(getStyleMatch(colorOptions, inputValue));
  const [font, setFont] = useState(getStyleMatch(fontOptions, inputValue));
  const [margin, setMargin] = useState(getStyleMatch(marginOptions, inputValue));
  
  function handleSetColor(value: String) {
    setColor(`${prefix}text-${value}`)
  }

  useEffect(() => {
    onUpdate(`${color} ${font} ${margin}`)
  }, [color, font, margin]);

  return (
    <>
      <div className="flex gap-2">
        <ColorPicker value={`${color?.replace('text-','').replace(prefix, '')}`} onClick={handleSetColor} className="w-9" />
        <SelectMenu value={font} onChange={setFont} options={fontOptions} className="w-12 flex-1" />
        <div style={{ padding: "9px 2px 0 0", width: "14px"}}>
          <IconMargin className="float-right" />
        </div>
        <SelectMenu value={margin} onChange={setMargin} options={marginOptions} className="w-16 " />
      </div>
      <input type="text" value={`${color} ${font} ${margin}`} className="hidden" />
    </>
  )
}

export default function TypeControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}