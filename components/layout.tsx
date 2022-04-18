import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Blocks } from "../components/blocks";

const systemFonts = ['Arial','Courier','Geneva','Georgia', 'Helvetica','Impact','Lucida Console','Lucida Grande','Monaco','Palatino','Tahoma','Times New Roman','Verdana']

const googleFontsLink = (fonts) => {
  const fontList = [fonts.sans, fonts.serif, fonts.mono, fonts.display].filter(item => item !== undefined || '')
  const uniqueFontList = [...new Set(fontList)]
  const googleFontList = uniqueFontList.filter(item => !systemFonts.includes(item))
  const formattedFontList = googleFontList.map(item => item.split(' ').join('+'))
  const familyString = formattedFontList.join('&family=')
  const fontLink = `https://fonts.googleapis.com/css2?family=${familyString}&display=swap`
  return fontList.length > 0 ?  fontLink : ''
}

const fontName = (font) => {
  return font.includes(':') ? font.substr(0, font.indexOf(':')) : font
}

export const Layout = ({
  pageData,
  globalData,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{pageData?.meta?.pageTitle}</title>
        <meta name="author" content="Protocol Labs"></meta>
        <link rel="icon" type="image/png" sizes="48x48" href={globalData?.favicon} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content={globalData?.siteUrl} />
        <meta property="og:title" content={pageData?.meta?.pageTitle} />
        <meta property="og:description" content={pageData?.meta?.pageDescription} />
        {globalData?.meta?.siteImageSrc &&
          <meta property="og:image" content={globalData?.meta?.siteImageSrc} />
        }
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={globalData?.siteUrl} />
        <meta property="twitter:url" content={globalData?.siteUrl} />
        <meta name="twitter:title" content={pageData?.meta?.pageTitle} />
        <meta name="twitter:description" content={pageData?.meta?.pageDescription} />
        {globalData?.meta?.siteImageSrc &&
          <meta name="twitter:image" content={globalData?.meta?.siteImageSrc} />
        }
        <style
          id="customProperties"
          dangerouslySetInnerHTML={{
            __html: `
            html {
              scroll-behavior: smooth;
            }
            :root {
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
              --font-sans: ${fontName(globalData?.fonts?.sans)}, sans-serif;
              --font-serif: ${fontName(globalData?.fonts?.serif)}, serif;
              --font-mono: ${fontName(globalData?.fonts?.mono)}, monospace;
              --font-display: ${fontName(globalData?.fonts?.display)}, sans-serif;
            }
            .markdown ol {
              list-style: number;
              margin-left: 1.5rem;
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
    </>
  );
};
