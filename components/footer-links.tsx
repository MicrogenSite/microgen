import { link } from "fs";
import React, { useState, useRef, useEffect } from "react";
import { linkTarget, lowerDash } from "../helpers/utilities";

export const FooterLinks = ({
  globalData
}) => {

  const footerNav = globalData.footerNav
  const footerNavItems = footerNav?.footerNavItems || [
    {
      "label": "Terms of Use",
      "link": "https://discuss.ipfs.tech/tos"
    },
    {
      "label": "Privacy Policy",
      "link": "https://discuss.ipfs.tech/privacy"
    },
    {
      "label": "DMCA Policy",
      "link": "https://ipfs.tech/legal/"
    }
  ]

  const footerLinkColor = globalData.links?.color ? `text-${globalData.links?.color}` : 'text-white';

  return (
    <section className="relative">
      <>
        <ul className={"flex-grow list-none text-center bg-primary p-4"}>
          {footerNavItems.map(function (item, index) {
              return (
                <li className="inline-block ml-8 first:ml-0" key={index}>
                  <a className={`block no-underline hover:underline text-sm ${footerLinkColor}`} href={item.link} target={linkTarget(item.link)}>{item.label}</a>
                </li>
              )
          })}

        </ul>
      </>
    </section>
  );
};
