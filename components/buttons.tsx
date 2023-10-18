import * as React from "react";
import { tinaField } from "tinacms/dist/react";
import { FaIcon } from "./icons/fa-icon";
import { linkTarget } from "../helpers/utilities";
import { trackGoal } from "fathom-client";

export const Buttons = ({
  className = "",
  layout = "",
  buttons,
}) => {
  const layoutClasses = layout?.split(" ").filter((item) => !item.includes("w-")).join(" ")
  const buttonWidth = layout?.split(" ").filter((item) => item.includes("w-")).join(" ")
  const isStacked = layout?.includes("flex-col")

  return (
    <div className={`inline-flex ${isStacked && "items-start"} ${layoutClasses} ${className}`}>
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
              <div className="inline-flex items-center gap-2">
                <span data-tina-field={tinaField(button, "label")}>{ button.label }</span>
                { button.icon && (
                  <FaIcon icon={button.icon} />
                )}
              </div>
            </a>
          );
          return element;
        })}
    </div>
  );
};
