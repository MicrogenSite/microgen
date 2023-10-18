import React, { useState, useEffect } from 'react';
import { getStyleMatch, prefixSelectValues } from '../../helpers/utilities'
import Control from './Control';
import IconGap from './icons/IconGap';
import IconGapVertical from './icons/IconGapVertical';
import LabeledSelectMenu from './widgets/LabeledSelectMenu';
import SelectMenu from './widgets/SelectMenu';

const layoutOptions = [
  { label: "Row", value: "flex-wrap"},
  { label: "Stack", value: "flex-col"},
]
const gapOptions = [
  { label: "0", value: "gap-0"},
  { label: "2", value: "gap-0.5"},
  { label: "4", value: "gap-1"},
  { label: "6", value: "gap-1.5"},
  { label: "8", value: "gap-2"},
  { label: "10", value: "gap-2.5"},
  { label: "12", value: "gap-3"},
  { label: "14", value: "gap-3.5"},
  { label: "16", value: "gap-4"},
  { label: "20", value: "gap-5"},
  { label: "24", value: "gap-6"},
  { label: "27", value: "gap-7"},
  { label: "32", value: "gap-8"},
  { label: "36", value: "gap-9"},
  { label: "40", value: "gap-10"},
  { label: "44", value: "gap-11"},
  { label: "48", value: "gap-12"},
]
const widthOptions = [
  { label: "auto", value: "" },
  { label: "40", value: "w-10" },
  { label: "44", value: "w-11" },
  { label: "48", value: "w-12" },
  { label: "56", value: "w-14" },
  { label: "64", value: "w-16" },
  { label: "80", value: "w-20" },
  { label: "96", value: "w-24" },
  { label: "112", value: "w-28" },
  { label: "128", value: "w-32" },
  { label: "144", value: "w-36" },
  { label: "160", value: "w-40" },
  { label: "176", value: "w-44" },
  { label: "192", value: "w-48" },
  { label: "208", value: "w-52" },
  { label: "224", value: "w-56" },
  { label: "240", value: "w-60" },
  { label: "256", value: "w-64" },
  { label: "288", value: "w-72" },
  { label: "320", value: "w-80" },
  { label: "384", value: "w-96" },
]

function buildOptions(options = [{label: '', value: ''}], isMobile = false) {
  const mobilePrefix = isMobile ? 'sm:' : ''
  return prefixSelectValues(options, `${mobilePrefix}`)
}

const FieldRow = ({ inputValue='', onUpdate=(value)=>{ value }, isMobile = false }) => {
  const layoutOptionsPrefixed = buildOptions(layoutOptions, isMobile)
  const gapOptionsPrefixed = buildOptions(gapOptions, isMobile)
  const widthOptionsPrefixed = buildOptions(widthOptions, isMobile)
  const [layout, setLayout] = useState(getStyleMatch(layoutOptionsPrefixed, inputValue) || "flex-wrap");
  const [gap, setGap] = useState(getStyleMatch(gapOptionsPrefixed, inputValue) || "gap-0");
  const [width, setWidth] = useState(getStyleMatch(widthOptionsPrefixed, inputValue) || "");

  useEffect(() => {
    onUpdate(`${layout} ${gap} ${width}`)
  }, [layout, gap, width]);

  return (
    <>
      <div className="flex gap-2">
        <div>
          <SelectMenu value={layout} onChange={setLayout} options={layoutOptionsPrefixed} className="w-full" />
        </div>
        <div className="flex gap-2 flex-1">
          <div className="w-6 pl-2 pt-3">
            {layout.includes("wrap") && (
              <IconGap className="float-right" />
            )}
            {layout.includes("col") && (
              <IconGapVertical className="float-right" />
            )}
          </div>
          <SelectMenu value={gap} onChange={setGap} options={gapOptionsPrefixed} className="flex-1" />
        </div>
        <div className="flex-1">
          <LabeledSelectMenu label="W" value={width} onChange={setWidth} options={widthOptionsPrefixed} />
        </div>
      </div>
      <input type="text" defaultValue={`${layout} ${gap} ${width}`} className="hidden" />
    </>
  )
}

export default function ButtonsLayoutControl({ field, input }) {
  return <Control field={field} input={input} fieldRow={<FieldRow />} />
}
