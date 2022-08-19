import React, { useState, useRef, useEffect } from "react";
import * as ga from '../lib/ga'
import { linkTarget, lowerDash } from "../helpers/utilities";
import { Burger } from "./burger"

const pageJumps = (blocks) => {
  const anchorLinks: [] = blocks?.filter(block => block.navigationLabel).map(block => block.navigationLabel);
  return anchorLinks;
}

const Dropdown = ({item}) => {
  const ref = useRef(null);
  const [ isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ isOpen ]);

  return (
    <div className="relative inline-block" ref={ref}>
      <a className="block no-underline cursor-pointer select-none" onClick={() => setIsOpen(!isOpen)}>
        {item.label}
        <svg className="relative inline-block w-4 h-4 ml-2 -top-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path fill="#ffffff" d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z"/>
        </svg>
      </a>
      {isOpen && (
        <ul className="absolute top-10 right-0 bg-primary">
          {item.subNavItems.map(function (subItem, index) {
            return (
              <li className="block" key={index}>
                <a className={"block no-underline whitespace-nowrap px-4 py-1"} href={subItem.link} target={linkTarget(subItem.link)} onClick={() => setIsOpen(!isOpen)}>{subItem.label}</a>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  );
}

const MobileSub = ({item, className}) => {
  const [ isOpen, setIsOpen] = useState(false);
  const background = className.split(' ').filter((item) => !item.includes('opacity')).join(' ')
  return (
    <li>
      <div className={`w-full bg-white h-px opacity-25`} />
      <a className="block leading-8 py-4 no-underline cursor-pointer select-none" onClick={() => setIsOpen(true)}>
        {item.label}
        <svg className="relative inline-block w-3 h-3 ml-1.5 -top-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="#ffffff" d="M96 480c-8.188 0-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L242.8 256L73.38 86.63c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l192 192c12.5 12.5 12.5 32.75 0 45.25l-192 192C112.4 476.9 104.2 480 96 480z"/>
        </svg>
      </a>
      {/* {isOpen && ( */}
        <div className={`${background} fixed inset-0 transition-all transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none'}`} >
          <a className="block p-4 leading-8 mb-1" onClick={() => setIsOpen(false)}>
            <svg className="inline-block w-3 h-3 mr-1 relative -top-px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path fill="#ffffff" d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/>
            </svg>
            Back
          </a>
          <ul className="px-5">
            {item.subNavItems.map(function (subItem, index) {
              return (
                <li key={index}>
                  <div className={`bg-white h-px opacity-25`} />
                  <a className={"block no-underline whitespace-nowrap leading-8 py-4"} href={subItem.link} target={linkTarget(subItem.link)}>{subItem.label}</a>
                </li>
              )
            })}
          </ul>
        </div>
      {/* )} */}
    </li>
  );
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
  const sectionClasses = navOpen ? "md:h-screen" : "md:h-0";
  const navClasses = navOpen ? "md:opacity-100 m-0" : "h-0 md:opacity-0 pointer-events-none";
  const backgroundClasses = navOpen ? "opacity-100" : "opacity-0 pointer-events-none";
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
  const background = nav.navBackgroundColor.split(' ').filter((item) => !item.includes('opacity')).join(' ')
  
  function Logo(props) {
    const hasLogoImage = globalData.logo?.image;
    if (hasLogoImage) {
      return (
        <img className={props.className} src={globalData.logo?.image} width={globalData.logo?.imageWidth} height={globalData.logo?.imageHeight} style={logoStyles} alt={globalData.logo?.logoType || "logo"} />
      );
    }
    return (
      <h1 className={`flex-none ${props.className} ${globalData.logo?.logoTypeStyle}`} style={logoStyles}>{globalData.logo?.logoType}</h1>
    );
  }

  
  return (
    <section className="relative">
      <>
        {/* Desktop Nav */}
        <div className="md:hidden absolute z-10 top-0 left-0 right-0">
          <div className={`max-w-desktop-full mx-auto ${nav?.padding}`}>
            <div className="flex items-center">
              <Logo className="flex-none" />
              <ul style={navStyles} className={`${nav.navTypeStyle} ${nav.navAlignment} flex-grow list-none md:hidden`}>

                {pageJumps(blocks)?.map(function (item, index) {
                  return (
                    <li className="inline-block ml-6 first:ml-0" key={index}>
                      <a className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                    </li>
                  )
                })}

                {navItems.map(function (item, index) {
                  const subNavItems = item.subNavItems || null
                  if (subNavItems) {
                    return (
                      <li className="relative inline-block ml-6" key={index}>
                        <Dropdown item={item} />
                      </li>
                    )
                  } else {
                    return (
                      <li className="inline-block ml-8" key={index}>
                        <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)}>{item.label}</a>
                      </li>
                    )
                  }
                })}

              </ul>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`${sectionClasses} hidden md:block h-screen fixed z-40 top-0 left-0 right-0`}>
          <div style={backgroundStyles} className={`${backgroundClasses} ${background} transition duration-400 absolute w-full h-screen -z-1`}></div>
          <div className={`w-full md:p-5`}>
            <Logo className="absolute top-4 left-4 hidden" />
            <div className={`absolute top-3 -right-2 py-1 pl-2 pr-6 rounded ${nav.navBackgroundColor}`} onClick={() => setNavOpen(!navOpen)}>
              <Burger color="white" isOpen={navOpen}  />
            </div>
            <ul style={navStyles} className={`${navClasses} ${nav.navTypeStyle} flex-grow hidden md:block mt-12`}>

              {pageJumps(blocks)?.map(function (item, index) {
                return (
                  <li className="block" key={index}>
                    <div className={`bg-white h-px opacity-25`} />
                    <a style={linkStyles} className={"block no-underline"} href={`#${lowerDash(item)}`} onClick={ () => pageJump(item) }>{item}</a>
                  </li>
                )
              })}

              {navItems.map(function (item, index) {
                const subNavItems = item.subNavItems || null
                if (subNavItems) {
                  return (
                    <MobileSub item={item} className={nav.navBackgroundColor} key={index} />
                  )
                } else {
                  return (
                    <li className="block" key={index}>
                      <div className={`bg-white h-px opacity-25`} />
                      <a style={linkStyles} className={"block no-underline"} href={item.link} target={linkTarget(item.link)} onClick={() => setNavOpen(!navOpen)}>{item.label}</a>
                    </li>
                  )
                }
              })}

            </ul>
          </div>
          
        </div>
      </>
    </section>
  );
};
