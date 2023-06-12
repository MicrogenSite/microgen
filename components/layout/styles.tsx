function justFontFamily(fontName) {
  const parts = fontName.split("@")
  const family = parts[0]?.replace(":wght", "")
  return family || ""
}

function justFontWeight(fontName) {
  const parts = fontName.split("@")
  const weight = parts[1]?.replace(":style", "")
  return Number(weight) || 400
}

function justFontStyle(fontName) {
  const parts = fontName.split("@")
  const style = parts[2]
  return style || "normal"
}

function slugify(string: string) {
  return string.replace(" ", "-").toLowerCase()
}

function buttonClass(obj) {
  const typography = JSON.parse(obj.typography)
  const color = typography.color.replace("text-", "")
  
  const getPadding = (obj, paddingPrefix) => {
    const isMobile = paddingPrefix.includes("sm")
    const desktopClasses = obj.padding.split(" ").filter(item => !item.includes("sm"))
    const mobileClasses = obj.padding.split(" ").filter(item => item.includes("sm"))
    const classes = isMobile ? mobileClasses : desktopClasses
    const paddingClass = classes.find(item => item.includes(paddingPrefix))
    const value = paddingClass?.replace(paddingPrefix, "") * 4
    return `${value}px`
  }
  const getRadius = (obj) => {
    const roundedOptions = {
      "rounded-none": "0px",
      "rounded-sm": "2px",
      "rounded": "4px",
      "rounded-md": "6px",
      "rounded-lg": "8px",
      "rounded-xl": "12px",
      "rounded-2xl": "16px",
      "rounded-3xl": "24px",
      "rounded-full": "100%",
    }
    return roundedOptions[obj.primaryRounded]
  }
  const getBorder = (border = "") => {
    const borderClasses = border.split(" ")
    if (borderClasses?.length !== 2) {
      return ""
    }
    // Color
    const borderColor = borderClasses[0].replace("border-", "")
    // Width
    const borderWidth = borderClasses[1].split("-")?.slice(-1)?.pop() || "0"
    // Side
    const borderSideClasses = borderClasses[1].split("-")
    const borderSideKey = borderSideClasses.length === 3 ? borderSideClasses[1] : "a"
    const borderSides = {
      "a": "border",
      "t": "border-top",
      "b": "border-bottom",
      "l": "border-left",
      "r": "border-right",
    }
    return `${borderSides[borderSideKey]}: ${borderWidth}px solid var(--${borderColor}-color)`
  }
  const getGradient = (tailwind: string) => {
    const tailwindClasses: string[] = tailwind.split(" ") || []
    const fromColor: string = tailwindClasses.find(item => item.includes("from")) || ""
    const toColor: string = tailwindClasses.find(item => item.includes("to")) || ""
    const directionToDegrees = {
      "bg-gradient-to-t": "0",
      "bg-gradient-to-tr": "45",
      "bg-gradient-to-r": "90",
      "bg-gradient-to-br": "135",
      "bg-gradient-to-b": "180",
      "bg-gradient-to-bl": "225",
      "bg-gradient-to-l": "270",
      "bg-gradient-to-tl": "315",
    }
    const direction: string = tailwindClasses.find(item => item.includes("gradient")) || ""
    const fromCSS: string = `var(--${fromColor.replace("from-", "")}-color)` || ""
    const toCSS: string = `var(--${toColor.replace("to-", "")}-color)` || ""
    return `linear-gradient(${directionToDegrees[direction]}deg, ${fromCSS} 0%, ${toCSS} 100%)`
  }
  const getBackgroundColor = (tailwind: string) => {
    const tailwindClasses: string[] = tailwind.split(" ") || []
    const backgroundColorClass = tailwindClasses.find(item => item.includes("bg-")) || ""
    return backgroundColorClass.replace("bg-", "")
  }
  const getBackground = (obj) => {
    const fillClass: string = obj.fill
    const isGradient: boolean = fillClass.includes("gradient")
    return isGradient ? getGradient(fillClass) : `var(--${getBackgroundColor(fillClass)}-color)`
  }

  const getIconSize = (iconSize) => {
    if (!iconSize || iconSize === "undefined") {
      return "16px"
    }
    return iconSize
  }

  if (!obj.label) return
  return `
    .btn-${slugify(obj.label)} {
      display: inline-block;
      color: var(--${color}-color);
      background: ${getBackground(obj)};
      font-family: ${justFontFamily(typography?.family)};
      font-weight: ${justFontWeight(typography?.family)};
      font-style: ${justFontStyle(typography?.family)};
      font-size: ${typography.size}px;
      line-height: ${typography.lineHeight}px;
      letter-spacing: ${typography.letterSpacing}px;
      padding: ${getPadding(obj, "pt-")} ${getPadding(obj, "pr-")} ${getPadding(obj, "pb-")} ${getPadding(obj, "pl-")};
      border-radius: ${getRadius(obj)};
      text-align: center;
      ${getBorder(obj.primaryBorder)};
    }
    .btn-${slugify(obj.label)} svg {
      fill: currentColor;
      height: ${getIconSize(obj.iconSize)};
    }`
}

function buttonClasses(buttons) {
  const items = buttons || []
  return items.map((item) => buttonClass(item)).join(" ")
}

function typographyClass(obj, isMobile: boolean) {
  const typography = JSON.parse(obj?.typography)
  if (!obj.label) return
  return `
    .mg-${slugify(obj.label)} {
      font-family: "${justFontFamily(typography?.family)}";
      font-weight: ${justFontWeight(typography?.family)};
      font-style: ${justFontStyle(typography?.family)};
      font-size: ${isMobile ? typography?.smSize : typography?.size}px;
      line-height: ${isMobile ? typography?.smLineHeight : typography?.lineHeight}px;
      letter-spacing: ${isMobile ? typography?.smLetterSpacing : typography?.letterSpacing}px;
      margin-bottom: ${isMobile ?  typography?.smMargin : typography?.margin}px;
    }`
}

function typographyClasses(typography, isMobile = false) {
  const items = typography || []
  return items.map((item) => typographyClass(item, isMobile)).join(" ")
}

export const styles = (theme) => {
  return `
    :root {
      --site-width: ${theme.desktopWidth}px;
      --edge-width: calc((100% - var(--site-width)) / 2);
      --primary-color: ${theme.colors?.primary};
      --accent1-color: ${theme.colors?.accent1};
      --accent2-color: ${theme.colors?.accent2};
      --accent3-color: ${theme.colors?.accent3};
      --accent4-color: ${theme.colors?.accent4};
      --white-color: ${theme.colors?.white};
      --black-color: ${theme.colors?.black};
      --gray-light-color: ${theme.colors?.grayLight};
      --gray-color: ${theme.colors?.gray};
      --gray-dark-color: ${theme.colors?.grayDark};              
      --link-color: ${theme.linkColor};              
    }
    html {
      scroll-behavior: smooth;
      height: 100%;
    }
    body {
      min-height: 100%;
      max-width: 100vw;
      overflow-x: hidden;
    }
    #__next {
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: clip;
      min-height: 100vh;
    }
    #footer {
      flex: 1;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
    }
    h1 a,
    h2 a,
    h3 a,
    h4 a,
    .markdown a {
      color: var(--${theme.linkColor}-color);
    }
    .markdown a:not(.button) {
      color: var(--${theme.linkColor}-color);
    }
    .markdown ul {
      list-style: disc;
      margin-left: 1.5rem;
    }
    .markdown ol {
      list-style: decimal;
      margin-left: 2rem;
    }
    .markdown ul li,
    .markdown ol li {
      margin-bottom: inherit;
    }
    .markdown a {
      text-decoration: underline;
    }
    .markdown p:not(:last-child) {
      margin-bottom: inherit;
    }
    .markdown.items-center img {
      margin: 0 auto 50px auto;
    }
    ${buttonClasses(theme.buttons)}
    ${typographyClasses(theme.typo)}
    
    @media only screen and (max-width: 700px) {
      html {
        overflow-x: hidden;
      }
      ${typographyClasses(theme.typo, true)}
    }
  `
}