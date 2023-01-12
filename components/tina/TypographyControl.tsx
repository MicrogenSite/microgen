import React, { useState, useEffect } from 'react';
import { fontOptions } from './options/font-options';
import Control from './Control';
import PixelField from './widgets/PixelField';
import SelectMenu from './widgets/SelectMenu';
import IconFontSize from './icons/IconFontSize';
import IconLetterSpacing from './icons/IconLetterSpacing';
import IconLineHeight from './icons/IconLineHeight';
import IconMargin from './icons/IconMargin';
import IconMobile from './icons/IconMobile';

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const [family, setFamily] = useState(getInputObject("family"));
  const [size, setSize] = useState(getInputObject("size"));
  const [letterSpacing, setLetterSpacing] = useState(getInputObject("letterSpacing"));
  const [lineHeight, setLineHeight] = useState(getInputObject("lineHeight"));
  const [margin, setMargin] = useState(getInputObject("smMargin"));
  const [smSize, setSmSize] = useState(getInputObject("smSize"));
  const [smLetterSpacing, setSmLetterSpacing] = useState(getInputObject("smLetterSpacing"));
  const [smLineHeight, setSmLineHeight] = useState(getInputObject("smLineHeight"));
  const [smMargin, setSmMargin] = useState(getInputObject("smMargin"));
  
  function getInputObject(type) {
    if (!inputValue) return ""
    const inputObj = JSON.parse(inputValue)
    return inputObj[type] 
  }

  const jsonInput = () => {
    return JSON.stringify({
      family: family || "Arial",
      size: size || "16",
      lineHeight: lineHeight || "16",
      letterSpacing: letterSpacing || "",
      margin: margin || "",
      smSize: smSize || "",
      smLineHeight: smLineHeight || "",
      smLetterSpacing: smLetterSpacing || "",
      smMargin: smMargin || "",
    })
  }

  useEffect(() => {
    onUpdate(`${jsonInput()}`)
  }, [family, size, letterSpacing, lineHeight, margin, smSize, smLetterSpacing, smLineHeight, smMargin]);

  return (
    <div style={{marginBottom: "40px"}}>
      <div className="flex items-center gap-2 mb-2">
        <SelectMenu value={family} onChange={setFamily} options={fontOptions} className="flex-1" />
      </div>
      <div className="mb-2" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
        gap: "8px",
      }}>
        <PixelField value={size} label="Font Size" icon={<IconFontSize />} onChange={event => setSize(event.target.value)} className="" />
        <PixelField value={lineHeight} label="Line Height" icon={<IconLineHeight />} onChange={event => setLineHeight(event.target.value)} className="" />
        <PixelField value={letterSpacing} label="Tracking" icon={<IconLetterSpacing />} onChange={event => setLetterSpacing(event.target.value)} className="" />
        <PixelField value={margin} label="Margin" icon={<IconMargin />} onChange={event => setMargin(event.target.value)} className="" />
      </div>
      <div className="relative p-1" style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
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
        <PixelField value={smMargin} label="Margin" icon={<IconMargin />} onChange={event => setSmMargin(event.target.value)} className="" />
      </div>
      <input type="text" value={`${jsonInput()}`} className="hidden" onChange={() => {console.log("change")}} />
    </div>
  )
}

export default function TypographyControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} isResponsive={false} />
}