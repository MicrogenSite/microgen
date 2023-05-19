import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Blocks } from "../../components/blocks-renderer";
import { styles } from "./styles"
import { googleFontsLink } from "./google-fonts"
import { Background } from "../background";

export const Layout = ({ rawData, children }) => {
  const page = rawData.page
  const global = rawData.global

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
            <meta property="og:image" content={page.meta?.ogImage} />
          </>
        }
        
        <style id="theme-styles"
          dangerouslySetInnerHTML={{
            __html: styles(global?.theme),
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

        {/* Typekit Project Link */ }
        { global.theme.fonts?.typekitLink && (
          <link rel="stylesheet" href={global.theme.fonts?.typekitLink}></link>
        )}

        {/* Google Fonts */ }
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        {googleFontsLink(global.theme) && (
          <link href={googleFontsLink(global.theme)} rel="stylesheet"></link>
        )}
      </Head>
      <Background background={page.background}></Background>
      <Header blocks={page?.blocks} globalData={global} />
      <main>
        {children}
      </main>
      <div id="footer">
        <Blocks blocks={global.blocks} />
      </div>
    </>
  );
};
