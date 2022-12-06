import * as React from "react";
import { linkTarget } from "../helpers/utilities";

export const Buttons = ({
  className = "",
  buttons,
  parentField = ""
}) => {
  
  // const classes = (button) => {
  //   const styles = {
  //     primary: `${buttons?.primaryFill} ${buttons?.primaryTypography} ${buttons?.primaryBorder} ${buttons?.primaryPadding} ${buttons?.primaryRounded}`,
  //     secondary: `${buttons?.secondaryFill} ${buttons?.secondaryTypography} ${buttons?.secondaryBorder} ${buttons?.secondaryPadding} ${buttons?.secondaryRounded}`,
  //     minor: `${buttons?.minorFill} ${buttons?.minorTypography} ${buttons?.minorBorder} ${buttons?.minorPadding} ${buttons?.minorRounded}`,
  //   };
  //   return button.type ? styles[button.type] : styles.primary
  // }

  return (
    <div className={`inline-flex flex-wrap gap-4 items-center ${className}`}>
      {buttons &&
        buttons.map(function (button, index) {
          const element = (
            <a
              className={`btn-${button.buttonStyle}`}
              href={button.link}
              target={linkTarget(button.link)}
              key={index}
              data-tinafield={`${parentField}.${index}`}
            >
              { button.label }
            </a>
          );
          return element;
        })}
    </div>
  );
};
