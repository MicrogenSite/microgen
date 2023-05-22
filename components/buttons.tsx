import * as React from "react";
import { linkTarget } from "../helpers/utilities";
import { trackGoal } from "fathom-client";

export const Buttons = ({
  className = "",
  layout = "",
  buttons,
}) => {
  const layoutClasses = layout.split(" ").filter((item) => !item.includes("w-")).join(" ")
  const buttonWidth = layout.split(" ").filter((item) => item.includes("w-")).join(" ")

  return (
    <div className={`inline-flex ${layoutClasses} ${className}`}>
      {buttons &&
        buttons.map(function (button, index) {
          const element = (
            <a
              className={`btn-${button.buttonStyle} ${buttonWidth}`}
              href={button.link}
              onClick={() => {
                if (button.fathomId) {
                  trackGoal(button.fathomId, 0);
                }
              }}
              target={linkTarget(button.link)}
              key={index}
            >
              { button.label }
            </a>
          );
          return element;
        })}
    </div>
  );
};
