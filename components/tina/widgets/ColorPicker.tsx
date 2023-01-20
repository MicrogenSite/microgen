import React, { useState, useRef, useEffect } from 'react';
import { client } from "../../../.tina/__generated__/client";

/*
Color picker expects the value prop to match one of the colorOptions
*/
interface ColorPickerProps {
  onClick;
  value: string;
  className?: string;
  width?: number;
}

export default function ColorPicker(props:ColorPickerProps) {
  const colorOptions = [
    { label: "Primary", value: "primary"},
    { label: "Accent 1", value: "accent1"},
    { label: "Accent 2", value: "accent2"},
    { label: "Accent 3", value: "accent3"},
    { label: "Accent 4", value: "accent4"},
    { label: "White", value: "white"},
    { label: "Gray Light", value: "gray-light"},
    { label: "Gray", value: "gray"},
    { label: "Gray Dark", value: "gray-dark"},
    { label: "Black", value: "black"},
  ]
  const [globalColors, setGlobalColors] = useState(null)
  const [isActive, setIsActive] = useState(false)
  const clickOutsideRef = useRef(null);

  const handleClickOutside = e => {
    if (!clickOutsideRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };
  function handleClick(newValue) {
    props.onClick(newValue)
    setIsActive(false)
  }
  function togglePicker() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await client.queries.global({relativePath: `../global/index.json`})
      const colors = fetchedData?.data?.global?.theme?.colors || {}
      setGlobalColors(colors);
    };
    fetchData().catch(console.error)

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const pickerClasses = `absolute left-0 p-2 border shadow bg-white`
  const pickerStyles = {
    display: isActive ? "grid" : "none",
    gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
    gap: "8px",
    zIndex: "1000",
    width: "176px",
    top: "calc(100% + 8px)",
    borderRadius: "3px",
    borderColor: "var(--tina-color-grey-2)",
  }
  
  const colorChipClasses = `border-box absolute w-7 h-7 rounded-sm`
  const colorChipStyles = {
    background: (globalColors && globalColors[props.value]) || "#000000",
    border: props.value === "white" ? "1px solid var(--tina-color-grey-2)" : "",
    top: "5px",
    left: "5px",
    width: props.width ? `${props.width - 12}px` : '',
  }

  const buttonClasses = `${props.className} relative cursor-pointer py-1 px-2 h-10 w-10 border border-gray-100 text-gray-500 text-sm p-1 h-9 shadow rounded-md hover:text-blue-400 hover:border-gray-200 focus:shadow-outline focus:border-blue-500 focus:text-blue-500`;
  const buttonStyles = {
    borderColor: "var(--tina-color-grey-2)",
    color: isActive ? "var(--tina-color-primary)" : "var(--tina-color-grey-8)",
    backgroundColor: "white",
    width: props.width ? `${props.width}px` : '',
  }

  const pickerOptions = colorOptions.map((option) => {
    const border = option.value === "white" ? "border border-tina-gray2" : ""
    return <div
      onClick={() => handleClick(option.value)}
      style={{background: (globalColors && globalColors[option.value]) || "#000000"}}
      className={`w-6 h-6 cursor-pointer rounded-sm ${border}`}
      key={option.value}
    ></div>
  });

  return (
    <div id="colorpicker" ref={clickOutsideRef} onClick={togglePicker} className={buttonClasses} style={buttonStyles}>
      <div className={colorChipClasses} style={colorChipStyles}></div>
      <div className={pickerClasses} style={pickerStyles}>
        {pickerOptions}
      </div>
    </div>
  )
}