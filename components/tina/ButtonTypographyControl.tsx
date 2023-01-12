import React, { useState, useEffect } from 'react';
import { fontOptions } from './options/font-options';
import Control from './Control';
import ColorPicker from './widgets/ColorPicker';
import PixelField from './widgets/PixelField';
import SelectMenu from './widgets/SelectMenu';
import IconFontSize from './icons/IconFontSize';
import IconLetterSpacing from './icons/IconLetterSpacing';
import IconLineHeight from './icons/IconLineHeight';
import IconMobile from './icons/IconMobile';

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

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const [color, setColor] = useState(getInputObject("color"));
  const [family, setFamily] = useState(getInputObject("family"));
  const [size, setSize] = useState(getInputObject("size"));
  const [letterSpacing, setLetterSpacing] = useState(getInputObject("letterSpacing"));
  const [lineHeight, setLineHeight] = useState(getInputObject("lineHeight"));
  const [smSize, setSmSize] = useState(getInputObject("smSize"));
  const [smLetterSpacing, setSmLetterSpacing] = useState(getInputObject("smLetterSpacing"));
  const [smLineHeight, setSmLineHeight] = useState(getInputObject("smLineHeight"));
  
  function getInputObject(type) {
    if (!inputValue) return ""
    const inputObj = JSON.parse(inputValue)
    return inputObj[type] 
  }

  const jsonInput = () => {
    return JSON.stringify({
      color: color || "text-primary",
      family: family || "Arial",
      size: size || "16",
      lineHeight: lineHeight || "16",
      letterSpacing: letterSpacing || "0",
      smSize: smSize || "16",
      smLineHeight: smLineHeight || "16",
      smLetterSpacing: smLetterSpacing || "0",
    })
  }

  useEffect(() => {
    onUpdate(`${jsonInput()}`)
  }, [color, family, size, letterSpacing, lineHeight, smSize, smLetterSpacing, smLineHeight]);

  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <ColorPicker value={color} onClick={setColor} className="w-9" />
        <SelectMenu value={family} onChange={setFamily} options={fontOptions} className="flex-1" />
      </div>
      <div className="mb-2" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "8px",
      }}>
        <PixelField value={size} label="Font Size" icon={<IconFontSize />} onChange={event => setSize(event.target.value)} className="" />
        <PixelField value={lineHeight} label="Line Height" icon={<IconLineHeight />} onChange={event => setLineHeight(event.target.value)} className="" />
        <PixelField value={letterSpacing} label="Tracking" icon={<IconLetterSpacing />} onChange={event => setLetterSpacing(event.target.value)} className="" />
      </div>
      <div className="relative p-1" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gap: "8px",
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
        <PixelField value={smSize} label="Font Size" icon={<IconFontSize />} onChange={event => setSmSize(event.target.value)} className="" />
        <PixelField value={smLineHeight} label="Line Height" icon={<IconLineHeight />} onChange={event => setSmLineHeight(event.target.value)} className="" />
        <PixelField value={smLetterSpacing} label="Tracking" icon={<IconLetterSpacing />} onChange={event => setSmLetterSpacing(event.target.value)} className="" />
      </div>
      <input type="text" defaultValue={`${jsonInput()}`} className="hidden" />
    </div>
  )
}

export default function ButtonTypographyControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} isResponsive={false} />
}