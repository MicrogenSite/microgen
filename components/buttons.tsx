import * as React from "react";
import { linkTarget } from "../helpers/utilities";
import { trackGoal } from "fathom-client";
import { tinaField } from "tinacms/dist/react";

export const Buttons = ({ className = "", buttons, parentField = "" }) => {
  return (
    <div className={`inline-flex flex-wrap gap-4 items-center ${className}`}>
      {buttons &&
        buttons.map(function (button, index) {
          const element = (
            <a
              className={`btn-${button.buttonStyle}`}
              href={button.link}
              onClick={() => {
                if (button.fathomId) {
                  trackGoal(button.fathomId, 0);
                }
              }}
              target={linkTarget(button.link)}
              key={index}
              data-tina-field={tinaField(button, "label")}
            >
              {button.label}
            </a>
          );
          return element;
        })}
    </div>
  );
};
