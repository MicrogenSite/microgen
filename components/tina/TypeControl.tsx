import React, { useState, useEffect } from 'react';
import { getStyleMatch } from '../../helpers/utilities'
import Control from './Control';
import SelectMenu from './widgets/SelectMenu';
import ColorPicker from './widgets/ColorPicker';
import IconMargin from './icons/IconMargin';
import { client } from "../../.tina/__generated__/client";

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

function getFontClass(classString: string) {
  const classes = classString.split(" ")
  return classes.find(item => item.includes("mg-"))
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const prefix = isMobile ? "sm:" : ""
  const colorOptions = buildColorOptions(prefix);
  const [fontOptions, setFontOptions] = useState([{ label: "loading", value: "loading" }]);
  const marginOptions = buildMarginOptions(prefix);
  const [color, setColor] = useState(getStyleMatch(colorOptions, inputValue));
  const [font, setFont] = useState(getFontClass(inputValue));
  const [margin, setMargin] = useState(getStyleMatch(marginOptions, inputValue));
  
  function handleSetColor(value: string) {
    setColor(`${prefix}text-${value}`)
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await client.queries.global({relativePath: `../global/index.json`})
        const data = fetchedData?.data?.global?.theme?.typo
        const options = data.map(item => ({ label: item.label, value: `mg-${item.label.replace(" ", "-").toLowerCase()}` }))
        setFontOptions([{ label: "default", value: "" }, ...options]);
      } catch (error) {
        setFontOptions([{ label: "default", value: "" }]);
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    onUpdate(`${color} ${font} ${margin}`)
  }, [color, font, margin]);

  return (
    <>
      <div className="flex gap-2">
        <ColorPicker value={`${color?.replace('text-','').replace(prefix, '')}`} onClick={handleSetColor} className="w-9" />
        <SelectMenu value={font} onChange={setFont} options={fontOptions} className="w-12 flex-1 " />
        <div style={{ padding: "9px 2px 0 0", width: "14px"}}>
          <IconMargin className="float-right" />
        </div>
        <SelectMenu value={margin} onChange={setMargin} options={marginOptions} className="w-16" />
      </div>
      <input type="text" value={`${color} ${font} ${margin}`} className="hidden" />
    </>
  )
}

export default function TypeControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}