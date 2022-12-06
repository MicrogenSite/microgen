import React, { useState, useEffect, useRef } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities';
import Control from './Control';
import IconPicker from './widgets/IconPicker';
import LabeledSelectMenu from './widgets/LabeledSelectMenu';

const widths = [
  { label: "20%", value: "w-1/5"},
  { label: "25%", value: "w-1/4"},
  { label: "33%", value: "w-1/3"},
  { label: "40%", value: "w-2/5"},
  { label: "50%", value: "w-1/2"},
  { label: "60%", value: "w-3/5"},
  { label: "66%", value: "w-2/3"},
  { label: "75%", value: "w-3/4"},
  { label: "80%", value: "w-4/5"},
  { label: "100%", value: "w-full"},
]
const heights = [
  { label: "auto", value: "min-h-0" },
  { label: "400", value: "min-h-100" },
  { label: "480", value: "min-h-120" },
  { label: "560", value: "min-h-140" },
  { label: "640", value: "min-h-160" },
  { label: "720", value: "min-h-180" },
  { label: "800", value: "min-h-200" },
  { label: "Screen", value: "min-h-screen" },
];
const alignments = [
  { label: "text-left", value: "text-left"},
  { label: "text-center", value: "text-center"},
  { label: "text-right", value: "text-right"},
]

function buildOptions(options: { label: string, value: string }[] = [], isMobile = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(options, `${mobilePrefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const widthOptions = buildOptions(widths, isMobile)
  const [width, setWidth] = useState(getStyleMatch(widthOptions, inputValue));
  const heightOptions = buildOptions(heights, isMobile)
  const [height, setHeight] = useState(getStyleMatch(heightOptions, inputValue));
  const alignmentOptions = buildOptions(alignments, isMobile)
  const [alignment, setAlignment] = useState(getStyleMatch(alignmentOptions, inputValue));

  useEffect(() => {
    onUpdate(`${width} ${height} ${alignment}`)
  }, [width, height, alignment]);

  return (
    <div className="">
       <div className="flex items-center gap-2">
          <LabeledSelectMenu label="W" value={width} onChange={setWidth} options={widthOptions} className="flex-1" />
          <LabeledSelectMenu label="H" value={height} onChange={setHeight} options={heightOptions} className="flex-1" />
          <IconPicker value={alignment} onClick={value => setAlignment(value)} options={alignmentOptions} menuPosition="right" />
      </div>
      <input type="text" value={`${width} ${height} ${alignment}`} className="hidden" />
    </div>
  )
}

export default function FeatureContentControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}