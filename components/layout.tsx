import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Blocks } from "../components/blocks";

const systemFonts = ['Arial','Courier','Geneva','Georgia', 'Helvetica','Impact','Lucida Console','Lucida Grande','Monaco','Palatino','Tahoma','Times New Roman','Verdana']
const customFonts = ['Suisse Intl']

const googleFontsLink = (fonts) => {
  const fontList = [fonts.font1, fonts.font2, fonts.font3, fonts.font4].filter(item => item !== undefined || '')
  const uniqueFontList = [...new Set(fontList)]
  const googleFontList = uniqueFontList.filter(item => !systemFonts.includes(item)).filter(item => !customFonts.includes(item))
  const formattedFontList = googleFontList.map(item => item.split(' ').join('+'))
  const familyString = formattedFontList.join('&family=')
  const fontLink = `https://fonts.googleapis.com/css2?family=${familyString}&display=swap`
  return fontList.length > 0 ?  fontLink : ''
}

const fontName = (font) => {
  return font.includes(':') ? font.substr(0, font.indexOf(':')) : font
}
const fontSize = (font) => {
  return font?.substring(0,font?.indexOf("/")) || "16"
}
const fontLeading = (font) => {
  return font?.substring(font?.indexOf("/") + 1) || "16"
}

export const ThemeContext = React.createContext({});

export const Layout = ({
  data,
  children,
}) => {
  const pageData = data.getPagesDocument.data
  const globalData = data.getGlobalDocument.data
  return (
    <>
      <ThemeContext.Provider value={globalData}>
        <Head>
          <title>{pageData?.meta?.pageTitle}</title>
          <meta name="description" content={pageData?.meta?.pageDescription} />
          <meta name="author" content="Protocol Labs"></meta>
          <link rel="icon" type="image/png" sizes="48x48" href={globalData?.favicon} />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content={globalData?.siteUrl} />
          <meta property="og:url" content={globalData?.siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={pageData?.meta?.pageTitle} />
          <meta property="og:description" content={pageData?.meta?.pageDescription} />
          {pageData?.meta?.siteImageSrc &&
            <meta property="og:image" content={pageData?.meta?.siteImageSrc} />
          }
          <style
            id="customProperties"
            // There is logic in the TypeControl component that figures out the custom property
            // names to populate the font option labels.
            // The typecontrol component should be revised with more direct access to data in 
            // the future and then this comment should be removed.
            dangerouslySetInnerHTML={{
              __html: `
              :root {
                --site-width: ${globalData?.desktopWidth}px;
                --edge-width: calc((100% - var(--site-width)) / 2);
                --primary-color: ${globalData?.colors?.primary};
                --accent1-color: ${globalData?.colors?.accent1};
                --accent2-color: ${globalData?.colors?.accent2};
                --accent3-color: ${globalData?.colors?.accent3};
                --accent4-color: ${globalData?.colors?.accent4};
                --white-color: ${globalData?.colors?.white};
                --black-color: ${globalData?.colors?.black};
                --gray-light-color: ${globalData?.colors?.grayLight};
                --gray-color: ${globalData?.colors?.gray};
                --gray-dark-color: ${globalData?.colors?.grayDark};              
                --link-color: ${globalData?.links?.color};              
                --font1: ${fontName(globalData?.fonts?.font1)}, sans-serif;
                --font2: ${fontName(globalData?.fonts?.font2)}, sans-serif;
                --font3: ${fontName(globalData?.fonts?.font3)}, sans-serif;
                --font4: ${fontName(globalData?.fonts?.font4)}, sans-serif;
                --text-size-xs: ${fontSize(globalData?.sizeLeading?.textXs)}px;
                --text-leading-xs: ${fontLeading(globalData?.sizeLeading?.textXs)}px;
                --text-size-sm: ${fontSize(globalData?.sizeLeading?.textSm)}px;
                --text-leading-sm: ${fontLeading(globalData?.sizeLeading?.textSm)}px;
                --text-size-md: ${fontSize(globalData?.sizeLeading?.textMd)}px;
                --text-leading-md: ${fontLeading(globalData?.sizeLeading?.textMd)}px;
                --text-size-lg: ${fontSize(globalData?.sizeLeading?.textLg)}px;
                --text-leading-lg: ${fontLeading(globalData?.sizeLeading?.textLg)}px;
                --text-size-xl: ${fontSize(globalData?.sizeLeading?.textXl)}px;
                --text-leading-xl: ${fontLeading(globalData?.sizeLeading?.textXl)}px;
                --text-size-2xl: ${fontSize(globalData?.sizeLeading?.text2xl)}px;
                --text-leading-2xl: ${fontLeading(globalData?.sizeLeading?.text2xl)}px;
                --text-size-3xl: ${fontSize(globalData?.sizeLeading?.text3xl)}px;
                --text-leading-3xl: ${fontLeading(globalData?.sizeLeading?.text3xl)}px;
                --text-size-4xl: ${fontSize(globalData?.sizeLeading?.text4xl)}px;
                --text-leading-4xl: ${fontLeading(globalData?.sizeLeading?.text4xl)}px;
                --text-size-5xl: ${fontSize(globalData?.sizeLeading?.text5xl)}px;
                --text-leading-5xl: ${fontLeading(globalData?.sizeLeading?.text5xl)}px;
                --text-size-6xl: ${fontSize(globalData?.sizeLeading?.text6xl)}px;
                --text-leading-6xl: ${fontLeading(globalData?.sizeLeading?.text6xl)}px;
                --text-size-7xl: ${fontSize(globalData?.sizeLeading?.text7xl)}px;
                --text-leading-7xl: ${fontLeading(globalData?.sizeLeading?.text7xl)}px;
                --text-size-8xl: ${fontSize(globalData?.sizeLeading?.text8xl)}px;
                --text-leading-8xl: ${fontLeading(globalData?.sizeLeading?.text8xl)}px;
              }
              html {
                scroll-behavior: smooth;
              }
              .markdown a:not(.button) {
                color: var(--${globalData?.links?.color}-color);
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
            `,
            }}
          />

          {/* Google Analytics */}
          <script async src={`https://www.googletagmanager.com/gtag/js?id=${globalData?.gtmId}`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              if (document.location.hostname === "${globalData?.siteUrl}") {
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${globalData?.gtmId}', {
                    page_path: window.location.pathname,
                  });
                }
              `,
            }}
          />

          {/* Google Fonts */ }
          <link rel="preconnect" href="https://fonts.googleapis.com"></link>
          <link rel="preconnect" href="https://fonts.gstatic.com"></link>
          {googleFontsLink(globalData?.fonts) && (
            <link href={googleFontsLink(globalData?.fonts)} rel="stylesheet"></link>
          )}
        </Head>

        <div className={`min-h-screen flex flex-col`}>
          <Header blocks={pageData?.blocks} globalData={globalData} />
          <div className="flex flex-col flex-1">{children}</div>
          {/* Footer Blocks */}
          <Blocks { ...globalData } />
        </div>
      </ThemeContext.Provider>
    </>
  );
};
