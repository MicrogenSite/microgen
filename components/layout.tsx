import React from "react";
import Head from "next/head";
import { Header } from "./header";
import { Blocks } from "../components/blocks";
import layoutData from "../content/global/index.json";

export const Layout = ({
  pageData,
  globalData,
  children,
}) => {
  return (
    <>
      <Head>
        <title>{globalData?.meta?.pageTitle}</title>
        <meta name="author" content="Protocol Labs"></meta>
        <link rel="icon" type="image/png" sizes="48x48" href={globalData?.favicon} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content={globalData?.siteUrl} />
        <meta property="og:title" content={globalData?.meta?.pageTitle} />
        <meta property="og:description" content={globalData?.meta?.pageDescription} />
        <meta property="og:image" content={globalData?.meta?.siteImageSrc} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={globalData?.siteUrl} />
        <meta property="twitter:url" content={globalData?.siteUrl} />
        <meta name="twitter:title" content={globalData?.meta?.pageTitle} />
        <meta name="twitter:description" content={globalData?.meta?.pageDescription} />
        <meta name="twitter:image" content={globalData?.meta?.siteImageSrc} />
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
