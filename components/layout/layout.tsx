import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Footer } from "./footer";
import layoutData from "../../content/global/index.json";
import { roundedOptions } from "../../schema/options";

const systemFonts = ['Arial','Courier','Geneva','Georgia', 'Helvetica','Impact','Lucida Console','Lucida Grande','Monaco','Palatino','Tahoma','Times New Roman','Verdana']
const customFonts = ['Suisse Intl']

const googleFontsLink = (fonts) => {
  const uniqueFontList = fonts
  const googleFontList = uniqueFontList.filter(item => !systemFonts.includes(item)).filter(item => !customFonts.includes(item))
  const formattedFontList = googleFontList.map(item => item.split(' ').join('+'))
  const familyString = formattedFontList.join('&family=')
  const fontLink = `https://fonts.googleapis.com/css2?family=${familyString}&display=swap`
  return uniqueFontList.length > 0 ?  fontLink : ''
}

export const Layout = ({ rawData, data = layoutData, children }) => {
  const global = rawData.global
  const headlineXs = JSON.parse(global?.typography?.headlineXs) || {}
  const headlineSm = JSON.parse(global?.typography?.headlineSm) || {}
  const headlineMd = JSON.parse(global?.typography?.headlineMd) || {}
  const headlineLg = JSON.parse(global?.typography?.headlineLg) || {}
  const headlineXl = JSON.parse(global?.typography?.headlineXl) || {}
  const bodyXs = JSON.parse(global?.typography?.bodyXs) || {}
  const bodySm = JSON.parse(global?.typography?.bodySm) || {}
  const bodyMd = JSON.parse(global?.typography?.bodyMd) || {}
  const bodyLg = JSON.parse(global?.typography?.bodyLg) || {}
  const bodyXl = JSON.parse(global?.typography?.bodyXl) || {}
  const typeStyles = ["headlineXs", "headlineSm", "headlineMd", "headlineLg", "headlineXl"]
  const fontFamilies = typeStyles.map(type => getFontFamily(type))
  const uniqueFontFamilies =  unique(fontFamilies);

  function unique(list) {
    return list.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
  }

  function getFontFamily(type:string) {
    const jsonString = global.typography[type]
    if (jsonString) {
      const fontObject = JSON.parse(jsonString)
      return fontObject.family || ""
    } else {
      return ""
    }
  }

  function justFontFamily(fontName) {
    const parts = fontName.split(":wght@")
    return parts[0] || ""
  }
  
  function justFontWeight(fontName) {
    const parts = fontName.split(":wght@")
    return Number(parts[1]) || 400
  }
  
  function slugify(string: string) {
    return string.replace(" ", "-").toLowerCase()
  }
  
  function buttonClass(obj) {
    const type = JSON.parse(obj.typography)
    const color = type.color.replace("text-", "")
    
    const getPadding = (obj, paddingPrefix) => {
      const isMobile = paddingPrefix.includes("sm")
      const desktopClasses = obj.padding.split(" ").filter(item => !item.includes("sm"))
      const mobileClasses = obj.padding.split(" ").filter(item => item.includes("sm"))
      const classes = isMobile ? mobileClasses : desktopClasses
      const paddingClass = classes.find(item => item.includes(paddingPrefix))
      const value = paddingClass?.replace(paddingPrefix, "") * 4
      return `${value}px`
    }
    const getRadius = (obj, isMobile = false) => {
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
    const getBorder = (obj, isMobile = false) => {
      const borderClasses = obj.primaryBorder.split(" ")
      const borderColor = borderClasses[0].replace("border-", "")
      const borderWidth = borderClasses[1].split("-").at(-1)
      const borderSideClasses = borderClasses[1].split("-")
      const borderSideKey = borderSideClasses.length > 2 ? borderSideClasses[1] : "a"
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
    const getBackground = (obj, isMobile = false) => {
      const fillClass: string = obj.fill
      const isGradient: boolean = fillClass.includes("gradient")
      return isGradient ? getGradient(fillClass) : `var(--${getBackgroundColor(fillClass)}-color)`
    }

    return `
      .btn-${slugify(obj.label)} {
        color: var(--${color}-color);
        background: ${getBackground(obj)};
        font-family: ${type.family};
        font-size: ${type.size}px;
        line-height: ${type.lineHeight}px;
        letter-spacing: ${type.letterSpacing}px;
        padding: ${getPadding(obj, "pt-")} ${getPadding(obj, "pr-")} ${getPadding(obj, "pb-")} ${getPadding(obj, "pl-")};
        border-radius: ${getRadius(obj)};
        ${getBorder(obj)};
      }
    `
  }

  function buttonClasses() {
    const buttons = global?.buttons || []
    const styleArray = buttons.map((button) => buttonClass(button))
    return styleArray.join(" ")
  }




  return (
    <>    
      <Head>
        <title>Tina Page Title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style
          id="customProperties"
          // There is logic in the TypeControl component that figures out the custom property
          // names to populate the font option labels.
          // The typecontrol component should be revised with more direct access to data in 
          // the future and then this comment should be removed.
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --site-width: ${global?.desktopWidth}px;
              --edge-width: calc((100% - var(--site-width)) / 2);
              --background-color: ${global?.backgroundColor};
              --primary-color: ${global?.colors?.primary};
              --accent1-color: ${global?.colors?.accent1};
              --accent2-color: ${global?.colors?.accent2};
              --accent3-color: ${global?.colors?.accent3};
              --accent4-color: ${global?.colors?.accent4};
              --white-color: ${global?.colors?.white};
              --black-color: ${global?.colors?.black};
              --gray-light-color: ${global?.colors?.grayLight};
              --gray-color: ${global?.colors?.gray};
              --gray-dark-color: ${global?.colors?.grayDark};              
              --link-color: ${global?.links?.color};              
            }
            html {
              background-color: var(--${global?.backgroundColor}-color);
              scroll-behavior: smooth;
            }
            ${buttonClasses()}
            .mg-headline-xs {
              font-family: "${justFontFamily(headlineXs.family)}";
              font-weight: ${justFontWeight(headlineXs.family)};
              font-size: ${headlineXs.size}px;
              line-height: ${headlineXs.lineHeight}px;
              letter-spacing: ${headlineXs.letterSpacing}px;
              margin-bottom: ${headlineXs.margin}px;
            }
            .mg-headline-sm {
              font-family: "${justFontFamily(headlineSm.family)}";
              font-weight: ${justFontWeight(headlineSm.family)};
              font-size: ${headlineSm.size}px;
              line-height: ${headlineSm.lineHeight}px;
              letter-spacing: ${headlineSm.letterSpacing}px;
              margin-bottom: ${headlineSm.margin}px;
            }
            .mg-headline-md {
              font-family: "${justFontFamily(headlineMd.family)}";
              font-weight: ${justFontWeight(headlineMd.family)};
              font-size: ${headlineMd.size}px;
              line-height: ${headlineMd.lineHeight}px;
              letter-spacing: ${headlineMd.letterSpacing}px;
              margin-bottom: ${headlineMd.margin}px;
            }
            .mg-headline-lg {
              font-family: "${justFontFamily(headlineLg.family)}";
              font-weight: ${justFontWeight(headlineLg.family)};
              font-size: ${headlineLg.size}px;
              line-height: ${headlineLg.lineHeight}px;
              letter-spacing: ${headlineLg.letterSpacing}px;
              margin-bottom: ${headlineLg.margin}px;
            }
            .mg-headline-xl {
              font-family: "${justFontFamily(headlineXl.family)}";
              font-weight: ${justFontWeight(headlineXl.family)};
              font-size: ${headlineXl.size}px;
              line-height: ${headlineXl.lineHeight}px;
              letter-spacing: ${headlineXl.letterSpacing}px;
              margin-bottom: ${headlineXl.margin}px;
            }
            .mg-body-xs {
              font-family: "${justFontFamily(bodyXs.family)}";
              font-weight: ${justFontWeight(bodyXs.family)};
              font-size: ${bodyXs.size}px;
              line-height: ${bodyXs.lineHeight}px;
              letter-spacing: ${bodyXs.letterSpacing}px;
              margin-bottom: ${bodyXs.margin}px;
            }
            .mg-body-sm {
              font-family: "${justFontFamily(bodySm.family)}";
              font-weight: ${justFontWeight(bodySm.family)};
              font-size: ${bodySm.size}px;
              line-height: ${bodySm.lineHeight}px;
              letter-spacing: ${bodySm.letterSpacing}px;
              margin-bottom: ${bodySm.margin}px;
            }
            .mg-body-md {
              font-family: "${justFontFamily(bodyMd.family)}";
              font-weight: ${justFontWeight(bodyMd.family)};
              font-size: ${bodyMd.size}px;
              line-height: ${bodyMd.lineHeight}px;
              letter-spacing: ${bodyMd.letterSpacing}px;
              margin-bottom: ${bodyMd.margin}px;
            }
            .mg-body-lg {
              font-family: "${justFontFamily(bodyLg.family)}";
              font-weight: ${justFontWeight(bodyLg.family)};
              font-size: ${bodyLg.size}px;
              line-height: ${bodyLg.lineHeight}px;
              letter-spacing: ${bodyLg.letterSpacing}px;
              margin-bottom: ${bodyLg.margin}px;
            }
            .mg-body-xl {
              font-family: "${justFontFamily(bodyXl.family)}";
              font-weight: ${justFontWeight(bodyXl.family)};
              font-size: ${bodyXl.size}px;
              line-height: ${bodyXl.lineHeight}px;
              letter-spacing: ${bodyXl.letterSpacing}px;
              margin-bottom: ${bodyXl.margin}px;
            }
            .markdown a:not(.button) {
              color: var(--${global?.links?.color}-color);
            }
            .markdown ul {
              list-style: disc;
              margin-left: 1.5rem;
            }
            .markdown ul li,
            .markdown ol li {
              margin-bottom: .5rem;
            }
            .markdown a {
              text-decoration: underline;
            }

            @media only screen and (max-width: 700px) {
              .mg-headline-xs {
                font-size: ${headlineXs.smSize || headlineXs.size}px;
                line-height: ${headlineXs.smLineHeight || headlineXs.lineHeight}px;
                letter-spacing: ${headlineXs.smLetterSpacing || headlineXs.letterSpacing}px;
                margin-bottom: ${headlineXs.smMargin || headlineXs.margin}px;
              }
              .mg-headline-sm {
                font-size: ${headlineSm.smSize || headlineSm.size}px;
                line-height: ${headlineSm.smLineHeight || headlineSm.lineHeight}px;
                letter-spacing: ${headlineSm.smLetterSpacing || headlineSm.letterSpacing}px;
                margin-bottom: ${headlineSm.smMargin || headlineSm.margin}px;
              }
              .mg-headline-md {
                font-size: ${headlineMd.smSize || headlineMd.size}px;
                line-height: ${headlineMd.smLineHeight || headlineMd.lineHeight}px;
                letter-spacing: ${headlineMd.smLetterSpacing || headlineMd.letterSpacing}px;
                margin-bottom: ${headlineMd.smMargin || headlineMd.margin}px;
              }
              .mg-headline-lg {
                font-size: ${headlineLg.smSize || headlineLg.size}px;
                line-height: ${headlineLg.smLineHeight || headlineLg.lineHeight}px;
                letter-spacing: ${headlineLg.smLetterSpacing || headlineLg.letterSpacing}px;
                margin-bottom: ${headlineLg.smMargin || headlineLg.margin}px;
              }
              .mg-headline-xl {
                font-size: ${headlineXl.smSize || headlineXl.size}px;
                line-height: ${headlineXl.smLineHeight || headlineXl.lineHeight}px;
                letter-spacing: ${headlineXl.smLetterSpacing || headlineXl.letterSpacing}px;
                margin-bottom: ${headlineXl.smMargin || headlineXl.margin}px;
              }
              .mg-body-xs {
                font-size: ${bodyXs.smSize || bodyXs.size}px;
                line-height: ${bodyXs.smLineHeight || bodyXs.lineHeight}px;
                letter-spacing: ${bodyXs.smLetterSpacing || bodyXs.letterSpacing}px;
                margin-bottom: ${bodyXs.smMargin || bodyXs.margin}px;
              }
              .mg-body-sm {
                font-size: ${bodySm.smSize || bodySm.size}px;
                line-height: ${bodySm.smLineHeight || bodySm.lineHeight}px;
                letter-spacing: ${bodySm.smLetterSpacing || bodySm.letterSpacing}px;
                margin-bottom: ${bodySm.smMargin || bodySm.margin}px;
              }
              .mg-body-md {
                font-size: ${bodyMd.smSize || bodyMd.size}px;
                line-height: ${bodyMd.smLineHeight || bodyMd.lineHeight}px;
                letter-spacing: ${bodyMd.smLetterSpacing || bodyMd.letterSpacing}px;
                margin-bottom: ${bodyMd.smMargin || bodyMd.margin}px;
              }
              .mg-body-lg {
                font-size: ${bodyLg.smSize || bodyLg.size}px;
                line-height: ${bodyLg.smLineHeight || bodyLg.lineHeight}px;
                letter-spacing: ${bodyLg.smLetterSpacing || bodyLg.letterSpacing}px;
                margin-bottom: ${bodyLg.smMargin || bodyLg.margin}px;
              }
              .mg-body-xl {
                font-size: ${bodyXl.smSize || bodyXl.size}px;
                line-height: ${bodyXl.smLineHeight || bodyXl.lineHeight}px;
                letter-spacing: ${bodyXl.smLetterSpacing || bodyXl.letterSpacing}px;
                margin-bottom: ${bodyXl.smMargin || bodyXl.margin}px;
              }

              .sm\\:mg-headline-xs {
                font-size: ${headlineXs.smSize || headlineXs.size}px;
                line-height: ${headlineXs.smLineHeight || headlineXs.lineHeight}px;
                letter-spacing: ${headlineXs.smLetterSpacing || headlineXs.letterSpacing}px;
                margin-bottom: ${headlineXs.smMargin || headlineXs.margin}px;
              }
              .sm\\:mg-headline-sm {
                font-size: ${headlineSm.smSize || headlineSm.size}px;
                line-height: ${headlineSm.smLineHeight || headlineSm.lineHeight}px;
                letter-spacing: ${headlineSm.smLetterSpacing || headlineSm.letterSpacing}px;
                margin-bottom: ${headlineSm.smMargin || headlineSm.margin}px;
              }
              .sm\\:mg-headline-md {
                font-size: ${headlineMd.smSize || headlineMd.size}px;
                line-height: ${headlineMd.smLineHeight || headlineMd.lineHeight}px;
                letter-spacing: ${headlineMd.smLetterSpacing || headlineMd.letterSpacing}px;
                margin-bottom: ${headlineMd.smMargin || headlineMd.margin}px;
              }
              .sm\\:mg-headline-lg {
                font-size: ${headlineLg.smSize || headlineLg.size}px;
                line-height: ${headlineLg.smLineHeight || headlineLg.lineHeight}px;
                letter-spacing: ${headlineLg.smLetterSpacing || headlineLg.letterSpacing}px;
                margin-bottom: ${headlineLg.smMargin || headlineLg.margin}px;
              }
              .sm\\:mg-headline-xl {
                font-size: ${headlineXl.smSize || headlineXl.size}px;
                line-height: ${headlineXl.smLineHeight || headlineXl.lineHeight}px;
                letter-spacing: ${headlineXl.smLetterSpacing || headlineXl.letterSpacing}px;
                margin-bottom: ${headlineXl.smMargin || headlineXl.margin}px;
              }
              .sm\\:mg-body-xs {
                font-size: ${bodyXs.smSize || bodyXs.size}px;
                line-height: ${bodyXs.smLineHeight || bodyXs.lineHeight}px;
                letter-spacing: ${bodyXs.smLetterSpacing || bodyXs.letterSpacing}px;
                margin-bottom: ${bodyXs.smMargin || bodyXs.margin}px;
              }
              .sm\\:mg-body-sm {
                font-size: ${bodySm.smSize || bodySm.size}px;
                line-height: ${bodySm.smLineHeight || bodySm.lineHeight}px;
                letter-spacing: ${bodySm.smLetterSpacing || bodySm.letterSpacing}px;
                margin-bottom: ${bodySm.smMargin || bodySm.margin}px;
              }
              .sm\\:mg-body-md {
                font-size: ${bodyMd.smSize || bodyMd.size}px;
                line-height: ${bodyMd.smLineHeight || bodyMd.lineHeight}px;
                letter-spacing: ${bodyMd.smLetterSpacing || bodyMd.letterSpacing}px;
                margin-bottom: ${bodyMd.smMargin || bodyMd.margin}px;
              }
              .sm\\:mg-body-lg {
                font-size: ${bodyLg.smSize || bodyLg.size}px;
                line-height: ${bodyLg.smLineHeight || bodyLg.lineHeight}px;
                letter-spacing: ${bodyLg.smLetterSpacing || bodyLg.letterSpacing}px;
                margin-bottom: ${bodyLg.smMargin || bodyLg.margin}px;
              }
              .sm\\:mg-body-xl {
                font-size: ${bodyXl.smSize || bodyXl.size}px;
                line-height: ${bodyXl.smLineHeight || bodyXl.lineHeight}px;
                letter-spacing: ${bodyXl.smLetterSpacing || bodyXl.letterSpacing}px;
                margin-bottom: ${bodyXl.smMargin || bodyXl.margin}px;
              }
            }
          `,
          }}
        />
        {/* Google Fonts */ }
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        {googleFontsLink(uniqueFontFamilies) && (
          <link href={googleFontsLink(uniqueFontFamilies)} rel="stylesheet"></link>
        )}
      </Head>
      <div
        className={`flex flex-col`}
      >
        <Header data={data?.header} />
        <div className={`flex flex-col`}>
          {children}
        </div>
      </div>
    </>
  );
};
