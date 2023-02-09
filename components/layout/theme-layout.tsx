import React from "react";
import Head from "next/head";
import { styles } from "./styles"
import { googleFontsLink } from "./google-fonts"

export const ThemeLayout = ({ theme, children }) => {
  return (
    <>    
      <Head>
        <title>{theme.title}</title>
        <meta name="description" content={theme.title} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <style id="theme-styles"
          dangerouslySetInnerHTML={{
            __html: styles(theme),
          }}
        />

        {/* Google Fonts */ }
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        {googleFontsLink(theme) && (
          <link href={googleFontsLink(theme)} rel="stylesheet"></link>
        )}
      </Head>
      <div className={`flex flex-col`}>
        {children}
      </div>
    </>
  );
};
