import React, { useState, useEffect, useRef } from 'react';
import SelectMenu from './widgets/SelectMenu';
import ColorPicker from './widgets/ColorPicker';
import FieldLabel from './widgets/FieldLabel';
import { getStyleMatch } from './widgets/helpers'

export default function FillControl({ field, input, meta }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const fillTypes = [
    { label: "None", value: "transparent" },
    { label: "Solid", value: "solid" },
    { label: "Gradient", value: "gradient" },
  ]
  const [fillType, setFillType] = useState(getFillType(input.value));
  const bgColors = [
    { label: "Primary", value: "bg-primary"},
    { label: "Accent 1", value: "bg-accent1"},
    { label: "Accent 2", value: "bg-accent2"},
    { label: "Accent 3", value: "bg-accent3"},
    { label: "Accent 4", value: "bg-accent4"},
    { label: "White", value: "bg-white"},
    { label: "Gray Light", value: "bg-gray-light"},
    { label: "Gray", value: "bg-gray"},
    { label: "Gray Dark", value: "bg-gray-dark"},
    { label: "Black", value: "bg-black"},
  ]
  const [bgColor, setBgColor] = useState(getStyleMatch(bgColors, input.value) || "bg-black");
  const fromColors = [
    { label: "Primary", value: "from-primary"},
    { label: "Accent 1", value: "from-accent1"},
    { label: "Accent 2", value: "from-accent2"},
    { label: "Accent 3", value: "from-accent3"},
    { label: "Accent 4", value: "from-accent4"},
    { label: "White", value: "from-white"},
    { label: "Gray Light", value: "from-gray-light"},
    { label: "Gray", value: "from-gray"},
    { label: "Gray Dark", value: "from-gray-dark"},
    { label: "Black", value: "from-black"},
  ]
  const [fromColor, setFromColor] = useState(getStyleMatch(fromColors, input.value) || "from-black");
  const toColors = [
    { label: "Primary", value: "to-primary"},
    { label: "Accent 1", value: "to-accent1"},
    { label: "Accent 2", value: "to-accent2"},
    { label: "Accent 3", value: "to-accent3"},
    { label: "Accent 4", value: "to-accent4"},
    { label: "White", value: "to-white"},
    { label: "Gray Light", value: "to-gray-light"},
    { label: "Gray", value: "to-gray"},
    { label: "Gray Dark", value: "to-gray-dark"},
    { label: "Black", value: "to-black"},
  ]
  const [toColor, setToColor] = useState(getStyleMatch(toColors, input.value) || "to-black");
  const directions = [
    { label: "↑", value: "bg-gradient-to-t" },
    { label: "↗", value: "bg-gradient-to-tr" },
    { label: "→", value: "bg-gradient-to-r" },
    { label: "↘", value: "bg-gradient-to-br" },
    { label: "↓", value: "bg-gradient-to-b" },
    { label: "↙", value: "bg-gradient-to-bl" },
    { label: "←", value: "bg-gradient-to-l" },
    { label: "↖", value: "bg-gradient-to-tl" },
  ]
  const [direction, setDirection] = useState(getStyleMatch(directions, input.value) || "bg-gradient-to-r");
  
  const opacities = [
    { label: "5%", value: "opacity-5" },
    { label: "10%", value: "opacity-10" },
    { label: "20%", value: "opacity-20" },
    { label: "30%", value: "opacity-30" },
    { label: "40%", value: "opacity-40" },
    { label: "50%", value: "opacity-50" },
    { label: "60%", value: "opacity-60" },
    { label: "70%", value: "opacity-70" },
    { label: "80%", value: "opacity-80" },
    { label: "90%", value: "opacity-90" },
    { label: "95%", value: "opacity-95" },
    { label: "100%", value: "opacity-100" },
  ]
  const [opacity, setOpacity] = useState(getStyleMatch(opacities, input.value) || "opacity-100");

  useEffect(() => {
    // Update Hidden Field
    const input = inputRef.current;
    const lastValue = input.value;
    const fillClasses = {
      transparent: "",
      solid: bgColor,
      gradient: `${fromColor} ${toColor} ${direction}`,
    }
    input.value = `${fillClasses[fillType]} ${opacity}`;
    (input as any)._valueTracker?.setValue(lastValue);
    input.dispatchEvent(new Event("input", {bubbles: true}));
  }, [bgColor, toColor, fromColor, fillType, direction, opacity, inputRef.current]);

  function getFillType(value: string) {
    if (value.includes("to-")) {
      return "gradient";
    } else if (value.includes("bg-")) {
      return "solid";
    }
    return "transparent";
  }
  function handleSetBgColor(value: string) {
    setBgColor(`bg-${value}`)
  }
  function handleSetToColor(value: string) {
    setToColor(`to-${value}`)
  }
  function handleSetFromColor(value: string) {
    setFromColor(`from-${value}`)
  }
  function handleSetFillType(value: string) {
    if (value === "solid") {
      setBgColor(fromColor?.replace("from-", "bg-"))
    } else {
      setFromColor(bgColor?.replace("bg-", "from-"))
    }
    setFillType(`${value}`)
  }

  return (
    <>
      <FieldLabel label={field.label} />
      <div className="flex gap-2 mb-4 items-center">
        <SelectMenu value={fillType} onChange={handleSetFillType} options={fillTypes} className="w-24" />
        {fillType === "solid" &&
          <ColorPicker value={bgColor?.replace('bg-','')} onClick={handleSetBgColor} />
        }
        {fillType === "gradient" &&
          <>
            <ColorPicker value={fromColor?.replace('from-','')} onClick={handleSetFromColor} />
            <ColorPicker value={toColor?.replace('to-','')} onClick={handleSetToColor} />
            <SelectMenu value={direction} onChange={setDirection} options={directions} className="w-12" />
          </>
        }
        {fillType !== "transparent" &&
          <SelectMenu value={opacity} onChange={setOpacity} options={opacities} className="w-16 flex-none" />
        }
      </div>
      <input ref={inputRef} type="text" {...input}  className="hidden" />
    </>
  )
}
