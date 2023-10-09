
import React, { useState, useRef, useEffect } from 'react';

export default function UnitField(props) {
  const [isActive, setIsActive] = useState(false)
  const [number, setNumber] = useState(Number(props.value.replace(/\D/g, '')))
  const [currentOption, setCurrentOption] = useState(props.value.includes("%") ? "%" : "px")
  const clickOutsideRef = useRef(null);
  const isLabel = (!props.icon && props.label)
  const unitOptions = ["px", "%"]

  const togglePicker = () => {
    setIsActive(!isActive)
  }

  const handleClickOutside = (e) => {
    if (!clickOutsideRef.current.contains(e.target)) {
      setIsActive(false);
    }
  };
  const handleUnitClick = (newValue) => {
    setIsActive(false)
    setCurrentOption(newValue)
    props.onChange(`${number}${newValue}`)
  }

  const handleNumberChange = (e) => {
    setNumber(e.target.value)
    if (e.target.value === "") {
      props.onChange("")
      return
    }
    props.onChange(`${e.target.value}${currentOption}`)
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside); // eslint-disable-line no-undef
    return () => document.removeEventListener('mousedown', handleClickOutside); // eslint-disable-line no-undef
  });

  const options = unitOptions.map((option) => {
    return (
      <div
        onClick={() => handleUnitClick(option)}
        className={`icon-picker-option inline-flex w-8 h-8 items-center rounded-sm cursor-pointer`}
        key={option}
        >
        <div className="mx-auto">
          {option}
        </div>
      </div>
    )
  });

  return (
    <div className={`relative pl-5`}>
      {isLabel &&
        <span className="absolute text-xs text-gray-300 font-bold top-0 left-0 pt-3 pl-0.5">{props.label}</span>
      }
      {!isLabel &&
        <div className="absolute text-xs text-gray-300 font-bold top-0 left-0 pt-3 pl-0.5">
          {props.icon}
        </div>
      }
      <div className='relative'>
        <input value={number} onChange={(e) => handleNumberChange(e)} type="number" step="1" placeholder="auto"
          className="border border-gray-100 shadow text-gray-500 text-sm p-1 pl-2 h-10 w-full rounded-md hover:border-gray-200 focus:border-blue-500"
        />
        
        <div ref={clickOutsideRef} className='unit-picker absolute py-2 w-6 rounded text-center text-gray-400 text-xs cursor-pointer' onClick={togglePicker}>
          {currentOption}
          {isActive && (
            <div className="absolute rounded p-2 z-20 border shadow bg-white" style={{
              top: "calc(100% + 8px)",
              left: "auto",
              right: "0",
              transform: "translateX(50%)",
              borderColor: "var(--tina-color-grey-2)"
            }}>
              <div className="flex gap-1">
                {options}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }        
        input[type=number] {
          -moz-appearance: textfield;
        }
        .unit-picker {
          background: #ffffff;
          top: 4px;
          right: 4px;
          bottom: 4px;
        }
        .unit-picker:hover {
          background: rgb(246, 246, 249);
        }
      `}</style>
    </div>
  );
}
