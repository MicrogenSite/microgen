
import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon';

interface IconPickerProps {
  options: {
    label: string,
    value: string
  }[];
  onClick;
  value: string;
  menuPosition?: string;
  className?: string;
}

export default function IconPicker(props:IconPickerProps) {
  const [isActive, setIsActive] = useState(false)
  const clickOutsideRef = useRef(null);
  const currentOption = props.options.find(option => option.value === props.value)

  const handleClickOutside = (e) => {
    if (!clickOutsideRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };
  const handleClick = (newValue) => {
    props.onClick(newValue)
    setIsActive(false)
  }
  const togglePicker = () => {
    setIsActive(!isActive)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  const options = props.options.map((option) => {
    return (
      <>
        <div
          onClick={() => handleClick(option.value)}
          className={`icon-picker-option inline-flex w-8 h-8 items-center rounded-sm cursor-pointer`}
          key={option.value}
          >
          <div style={{margin: "auto"}}>
            <Icon icon={option.label} />
          </div>
        </div>
      </>
    )
  });

  return (
    <div id="iconpicker" ref={clickOutsideRef} onClick={togglePicker}
      className={`relative flex flex-none items-center pl-2 p-1 bg-white font-bold text-center rounded border border-gray-100 shadow rounded-md text-gray-500 text-sm cursor-pointer hover:text-blue-400 hover:border-gray-200 focus:shadow-outline focus:border-blue-500 focus:text-blue-500 ${props.className || ""}`}
      style={{
        color: isActive ? "var(--tina-color-primary)" : "var(--tina-color-grey-8)",
        width: "48px",
        height: "40px"
      }}
    >
      <style>{".icon-picker-option:hover { background: #f6f6f9; }"}</style>
      <Icon icon={currentOption?.label?.replace('sm:', '')} />
      <Icon icon="angle-down" className="absolute right-0 top-2.5 text-primary h-3.5" />
      <div
        className="absolute p-2 z-20 border shadow bg-white"
        style={{
          display: isActive ? "block" : "none",
          top: "calc(100% + 8px)",
          left: props.menuPosition === "right" ? "auto" : "0",
          right: props.menuPosition === "right" ? "0" : "auto",
          borderRadius: "3px",
          borderColor: "var(--tina-color-grey-2)",
      }}>
        <div className="grid gap-1" style={{gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr"}}>
          {options}
        </div>
      </div>
    </div>
  )
}