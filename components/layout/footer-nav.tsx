import React from "react";
import { FaIcon } from "../icons/fa-icon";
import { Logo } from "./logo"
import { linkTarget, lowerDash } from "../../helpers/utilities";

const pageJumps = (blocks) => {
  const anchorLinks: [] = blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel);
  return anchorLinks;
}

const Link = ({link, label}) => {
  return (
    <li className="inline-block ml-8 first:ml-0 md:block md:mb-4">
      <a className={"block no-underline"} href={link} target={linkTarget(link)}>{label}</a>
    </li>
  )
}

export const FooterNav = ({
  blocks,
  globalData
}) => {

  const nav = globalData.nav || {}
  const navItems = nav.navItems || []
  const navButtons = nav?.navButtons || []
  const logo = globalData.logo || {}
  const logoStyles = { 
    marginRight: `${logo.imageMargin}px`
  }
  
  return (
    <section className="relative">
      <div className={`max-w-desktop-full mx-auto ${nav.padding}`}>
        <div className="flex items-center md:items-start">
          <Logo className="flex-none" image={logo.image} imageHeight={logo.imageHeight} imageWidth={logo.imageWidth} logoStyles={logoStyles} logoType={logo.logoType} logoTypeStyle={logo.logoTypeStyle} />
          <ul className={`${nav.navTypeStyle} ${nav.navAlignment} mt-7 mb-0 flex-grow list-none md:m-0`}>

            {pageJumps(blocks)?.map(function (item, index) {
              return (
                <Link label={item} link={`#${lowerDash(item)}`} key={index} />
              )
            })}

            {navItems.map(function (item, index) {
              const subNavItems = item.subNavItems || null
              if (!subNavItems) {
                return (
                  <Link label={item.label} link={item.link} key={index} />
                )
              }
            })}
  
          </ul>
          
          {navButtons?.map(function (item, index) {
              return(
                <a href={item.link} className={`btn-${item.style} ml-6`} key={index}>
                  <div className="flex items-center gap-2">
                    { item.label && (
                      <span>{ item.label }</span>
                    )}
                    { item.icon && (
                      <FaIcon icon={item.icon} />
                    )}
                  </div>
                </a>
              )
            })}
        </div>
      </div>
    </section>
  );
};
