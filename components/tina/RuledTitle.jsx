import React from 'react';

export default function RuledTitle({ field, input, meta }) {

  return (
    <>
      <div className="relative mb-5">
        <div
          style={{
            position: "absolute",
            height: "1px",
            top: "10px",
            left: "-24px",
            right: "-24px",
            background: "rgba(0,0,0,.2)",
          }}
        ></div>
        {field.label && <h2 className="text-tina-gray8 font-bold" style={{
          paddingTop: "28px",
          fontSize: "var(--tina-font-size-2)",
          textOverflow: "ellipsis",
        }}>{field.label}</h2>}
        {!field.label && <div className="h-3 w-full" />}
      </div>
    </>
  )
}
