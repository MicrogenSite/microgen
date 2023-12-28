
import React from 'react';

export default function NumberField(props) {
  const isLabel = (!props.icon && props.label)
  return (
    <div className={`relative pl-6 ${props.className}`}>
      {isLabel &&
        <span className="absolute text-xs text-gray-300 font-bold" style={{ top: "12px", left: "2px" }}>{props.label}</span>
      }
      {!isLabel &&
        <div className="absolute text-sm text-gray-300 font-bold" style={{ top: "12px", left: "2px" }}>
          {props.icon}
        </div>
      }
      <input value={props.value} onChange={props.onChange} type="number" step="1" className="border border-gray-100 shadow text-gray-500 text-sm p-1 pl-2 h-10 w-full rounded-md hover:border-gray-200 focus:border-blue-500" />
      {props.unit &&
        <div className='absolute top-1 right-0 mr-1 p-1 py-2 h-6 inline-block text-xs bg-white text-gray-300'>{props.unit}</div>
      }
      <style>{`
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }        
        input[type=number] {
          -moz-appearance: textfield;
        }
      `}</style>
    </div>
  );
}
