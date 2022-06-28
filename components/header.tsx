import React, { useState } from "react";
import * as ga from '../lib/ga'
import { isString, lowerDash } from "../helpers/utilities";
import { Burger } from "./burger"

const navList = (blocks) => {
  const anchorLinks: [] = blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel);
  return anchorLinks;
}

const linkTarget = (link) => {
  const isExternalLink = isString(link) && link.charAt(0) !== '#'
  return isExternalLink ? '_blank' : ''
}

export const Header = ({
  blocks,
  globalData
}) => {
  const [navOpen, setNavOpen] = useState(false);

  const pageJump = (label) => {
    setNavOpen(!navOpen)
    ga.event({
      action: "page_jump",
      params : {
        jump_label: label
      }
    })
  }

  const nav = globalData.nav
  const navItems = nav?.navItems || []
  const sectionClasses = navOpen ? "sm:h-screen" : "sm:h-10 overflow-hidden";
  const navClasses = navOpen ? "sm:opacity-100 m-0" : "sm:opacity-0 sm:pointer-events-none";
  const backgroundClasses = navOpen ? "opacity-100" : "opacity-0";
  const navStyles = { 
    transition: "opacity .4s, margin .3s",
  }
  const backgroundStyles = { 
    transition: "opacity .4s ease-out",
  }
  const linkStyles = navOpen ? { 
    lineHeight: "4rem",
    transition: "line-height .4s"
  } : {
    lineHeight: "6rem",
    transition: "line-height .4s"
  }
  const logoStyles = { 
    marginRight: `${globalData.logo.imageMargin}px`
  }

  function Logo(props) {
    const hasLogoImage = globalData.logo?.image;
    if (hasLogoImage) {
      return (
        <a href="/">
          <img className={props.className} src={globalData.logo?.image} width={globalData.logo?.imageWidth} height={globalData.logo?.imageHeight} style={logoStyles} alt={globalData.logo?.logoType || "logo"} />
        </a>
      );
    }
    return (
      <a href="/">
        <h1 className={`flex-none ${props.className} ${globalData.logo?.logoTypeStyle}`} style={logoStyles}>{globalData.logo?.logoType}</h1>
      </a>
    );
  }

  return (
    <section className="relative">
      <div className={`${sectionClasses} sm:h-screen absolute z-40 top-0 left-0 right-0`}>
        <div style={backgroundStyles} className={`${backgroundClasses} ${nav.navBackgroundColor} transition duration-400 absolute inset-0 -z-1 hidden sm:block`}></div>
        <div className={`max-w-desktop-full mx-auto ${nav?.padding}`}>
          
          {/* Desktop Nav */}
          <div className="flex items-center sm:hidden">
            <Logo className="flex-none" />
            <ul style={navStyles} className={`${nav.navTypeStyle} ${nav.navAlignment} flex-grow list-none sm:hidden`}>
              {navList(blocks)?.map(function (item, index) {
                return (
                  <li className="inline-block ml-10 first:ml-0" key={index}>
                    <a className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                  </li>
                )
              })}
              {navItems && navItems.map(function (item, index) {
                return (
                  <li className="inline-block ml-10 first:ml-0" key={index}>
                    <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)} onClick={() => setNavOpen(!navOpen)}>{item.label}</a>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Mobile Nav */}
          <Logo className={`absolute top-4 left-4 hidden sm:block`} />
          <div className="absolute top-0 p-4 right-0 hidden sm:block" onClick={() => setNavOpen(!navOpen)}>
            <Burger color="white" isOpen={navOpen}  />
          </div>
          <ul style={navStyles} className={`${navClasses} ${nav.navTypeStyle} ${nav.navAlignment} flex-grow list-none hidden sm:block mt-16`}>
            {navList(blocks)?.map(function (item, index) {
              return (
                <li className="block" key={index}>
                  <div className={`bg-white h-px opacity-25`} />
                  <a style={linkStyles} className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                </li>
              )
            })}
            {navItems && navItems.map(function (item, index) {
              return (
                <li className="block" key={index}>
                  <div className={`bg-white h-px opacity-25`} />
                  <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)} onClick={() => setNavOpen(!navOpen)}>{item.label}</a>
                </li>
              )
            })}
          </ul>

        </div>
      </div>
    </section>
  );
};
