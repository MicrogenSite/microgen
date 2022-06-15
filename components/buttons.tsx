import * as React from "react";
import { isString } from "../helpers/utilities";
import { ThemeContext } from "./layout";

export const Buttons = ({
  className = "",
  buttons,
  parentField = ""
}) => {
  
  const classes = (button) => {
    const theme: any = React.useContext(ThemeContext)
    const buttons: any = theme.buttons

    const styles = {
      primary: `${buttons?.primaryFill} ${buttons?.primaryTypography} ${buttons?.primaryBorder} ${buttons?.primaryPadding} ${buttons?.primaryRounded}`,
      secondary: `${buttons?.secondaryFill} ${buttons?.secondaryTypography} ${buttons?.secondaryBorder} ${buttons?.secondaryPadding} ${buttons?.secondaryRounded}`,
      minor: `${buttons?.minorFill} ${buttons?.minorTypography} ${buttons?.minorBorder} ${buttons?.minorPadding} ${buttons?.minorRounded}`,
    };
    return button.type ? styles[button.type] : styles.primary
  }

  const linkTarget = (link) => {
    const isExternalLink = isString(link) && link.charAt(0) !== '#'
    return isExternalLink ? '_blank' : ''
  }

  return (
    <div className={`inline-flex flex-wrap gap-4 items-center ${className}`}>
      {buttons &&
        buttons.map(function (button, index) {
          const element = (
              <a
                className={classes(button)}
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
