import React from 'react';

export default function RuledTitle({ field, input, meta }) {

  return (
    <>
      <div className="relative mb-5">
        <div className="absolute h-px top-2.5 -left-5 -right-5 bg-gray-300 opacity-30"></div>
        {field.label && <h2 className="text-tina-gray8 font-bold pt-7" style={{
          fontSize: "var(--tina-font-size-2)",
          textOverflow: "ellipsis",
        }}>{field.label}</h2>}
        {!field.label && <div className="h-3 w-full" />}
      </div>
    </>
  )
}
