
import React, { useState, useRef, useEffect } from 'react';
import Icon from './Icon';

interface IconPickerProps {
  options: {
    label: string,
    value: string
  }[];
  onClick: Function;
  value: string;
  menuPosition?: string;
  className?: string;
}

export default function IconPicker(props:IconPickerProps) {
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
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });
  

  const pickerClasses = `absolute p-2 z-20 border shadow bg-white`
  const pickerStyles = {
      display: isActive ? "block" : "none",
      top: "calc(100% + 8px)",
      left: props.menuPosition === "right" ? "auto" : "0",
      right: props.menuPosition === "right" ? "0" : "auto",
      borderRadius: "3px",
      borderColor: "var(--tina-color-grey-2)",
  }

  const buttonClasses = `${props.className} relative flex items-center h-10 pl-2 cursor-pointer bg-white font-bold text-center rounded 
  border border-gray-100 text-gray-500 text-sm p-1 h-9 shadow rounded-md hover:text-blue-400 hover:border-gray-200 focus:shadow-outline focus:border-blue-500 focus:text-blue-500`;
  const buttonStyles = {
    color: isActive ? "var(--tina-color-primary)" : "var(--tina-color-grey-8)",
  }

  const options = props.options.map((option) => {
    return <div
      onClick={() => handleClick(option.value)}
      className={`inline-flex items-center h-8 w-8 cursor-pointer rounded-sm hover:bg-tina-gray2`}
      key={option.value}
    >
      <Icon icon={option.label} className="m-auto" />
      </div>
  });

  return (
    <div id="iconpicker" ref={clickOutsideRef} onClick={togglePicker} className={buttonClasses} style={buttonStyles}>
      <Icon icon={props.value} />
      <Icon icon="angle-down" className="absolute right-0 top-2.5 text-primary h-3.5" />
      <div className={pickerClasses} style={pickerStyles}>
        {options}
      </div>
    </div>
  )
}