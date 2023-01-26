import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Blocks } from "../../components/blocks-renderer";

const systemFonts = ['Arial','Courier','Geneva','Georgia', 'Helvetica','Impact','Lucida Console','Lucida Grande','Monaco','Palatino','Tahoma','Times New Roman','Verdana']
const customFonts = ['Suisse Intl']

const googleFontsLink = (fonts) => {
  const uniqueFontList = fonts
  const googleFontList = uniqueFontList.filter(item => !systemFonts.includes(item)).filter(item => !customFonts.includes(item))
  const formattedFontList = googleFontList.map(item => item?.split(' ').join('+'))
  const familyString = formattedFontList.join('&family=')
  const fontLink = `https://fonts.googleapis.com/css2?family=${familyString}&display=swap`
  return uniqueFontList.length > 0 ?  fontLink : ''
}

export const Layout = ({ rawData, children }) => {
  const page = rawData.page
  const global = rawData.global
  const typographyFontFamilies = global.theme?.typo?.map(item => {
    const fontObject = JSON.parse(item.typography)
    return fontObject.family || null
  }) || []
  const buttonFontFamilies = global.theme?.buttons?.map(item => {
    const fontObject = JSON.parse(item.typography)
    return fontObject.family || null
  }) || []
  const fontFamilies = [...typographyFontFamilies, ...buttonFontFamilies]
  const uniqueFontFamilies =  unique(fontFamilies);

  function unique(list) {
    return list.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
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
    const getBorder = (obj) => {
      if (obj.primaryBorder?.length > 1) {
        return ""
      }
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
    const getBackground = (obj) => {
      const fillClass: string = obj.fill
      const isGradient: boolean = fillClass.includes("gradient")
      return isGradient ? getGradient(fillClass) : `var(--${getBackgroundColor(fillClass)}-color)`
    }

    if (!obj.label) return
    return `
      .btn-${slugify(obj.label)} {
        display: inline-block;
        color: var(--${color}-color);
        background: ${getBackground(obj)};
        font-family: "${justFontFamily(typography?.family)}";
        font-size: ${typography.size}px;
        line-height: ${typography.lineHeight}px;
        letter-spacing: ${typography.letterSpacing}px;
        padding: ${getPadding(obj, "pt-")} ${getPadding(obj, "pr-")} ${getPadding(obj, "pb-")} ${getPadding(obj, "pl-")};
        border-radius: ${getRadius(obj)};
        text-align: center;
        ${getBorder(obj)};
      }
    `
  }

  function buttonClasses() {
    const items = global?.theme?.buttons || []
    return items.map((item) => buttonClass(item)).join(" ")
  }

  function typographyClass(obj, isMobile: boolean) {
    const typography = JSON.parse(obj?.typography)
    if (!obj.label) return
    return `
      .mg-${slugify(obj.label)} {
        font-family: "${justFontFamily(typography?.family)}";
        font-weight: ${justFontWeight(typography?.family)};
        font-size: ${isMobile ? typography?.smSize : typography?.size}px;
        line-height: ${isMobile ? typography?.smLineHeight : typography?.lineHeight}px;
        letter-spacing: ${isMobile ? typography?.smLetterSpacing : typography?.letterSpacing}px;
        margin-bottom: ${isMobile ?  typography?.smMargin : typography?.margin}px;
      }
    `
  }

  function typographyClasses(isMobile = false) {
    const items = global?.theme?.typo || []
    return items.map((item) => typographyClass(item, isMobile)).join(" ")
  }

  return (
    <>    
      <Head>
        <title>{page.meta?.title}</title>
        <meta name="description" content={page.meta?.description} />
        <link rel="icon" type="image/png" sizes="48x48" href={global.favicon} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {page.meta?.ogImage &&
          <>
            <meta name="twitter:card" content="summary_large_image" />
            <meta property="og:site_name" content={global.siteUrl} />
            <meta property="og:url" content={global.siteUrl} />
            <meta property="og:type" content="website" />
            <meta property="og:title" content={page.meta?.title} />
            <meta property="og:description" content={page.meta?.description} />
            <meta property="og:image" content={page.meta?.siteImage} />
          </>
        }
        <style
          id="customProperties"
          dangerouslySetInnerHTML={{
            __html: `
            :root {
              --site-width: ${global?.theme?.desktopWidth}px;
              --edge-width: calc((100% - var(--site-width)) / 2);
              --background-color: ${page?.backgroundColor};
              --primary-color: ${global?.theme?.colors?.primary};
              --accent1-color: ${global?.theme?.colors?.accent1};
              --accent2-color: ${global?.theme?.colors?.accent2};
              --accent3-color: ${global?.theme?.colors?.accent3};
              --accent4-color: ${global?.theme?.colors?.accent4};
              --white-color: ${global?.theme?.colors?.white};
              --black-color: ${global?.theme?.colors?.black};
              --gray-light-color: ${global?.theme?.colors?.grayLight};
              --gray-color: ${global?.theme?.colors?.gray};
              --gray-dark-color: ${global?.theme?.colors?.grayDark};              
              --link-color: ${global?.links?.color};              
            }
            html {
              background-color: var(--${page?.backgroundColor}-color);
              scroll-behavior: smooth;
              overflow-x: hidden;
            }
            h1 a,
            h2 a,
            h3 a,
            h4 a,
            .markdown a {
              color: var(--${global?.theme?.linkColor}-color);
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
            ${buttonClasses()}
            ${typographyClasses()}
            
            @media only screen and (max-width: 700px) {
              ${typographyClasses(true)}
            }
          `,
          }}
        />
        
        {/* Google Analytics */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${global.gtmId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            if (document.location.hostname.replace("www.", "") === "${global.siteUrl}") {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${global.gtmId}', {
                  page_path: window.location.pathname,
                });
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
        <Header blocks={page?.blocks} globalData={global} />
        <div className={`flex flex-col`}>
          {children}
          <Blocks blocks={global.blocks} />
        </div>
      </div>
    </>
  );
};
