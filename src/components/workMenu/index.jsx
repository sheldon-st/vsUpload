import React, { useEffect, useRef, useState } from "react";
import useOnScreen from "../../hooks/useOnScreen";

import gsap from "gsap";
import SplitText from "../../utils/Split3.min";
import cn from "classnames";
import { NavLink } from "react-router-dom";

import "./style.scss";
import SectionHeader from "../SectionHeader/SectionHeader.js";

export function SectionMenuItem({ lineContent, lineContent2, toPath }) {
  const ref = useRef(null);
  // const [reveal, setReveal] = useState(false);

  // const onScreen = useOnScreen(ref);

  // useEffect(() => {
  //   if (onScreen) setReveal(onScreen);
  // }, [onScreen]);

  // useEffect(()=>{
  //   const split = new SplitText("#sectionMenu", {
  //     type: 'lines',
  //     linesClass: 'lineChildren'
  //   });

  //   gsap.to(split.lines, {
  //     duration: .5,
  //     y: 0,
  //     opacity: 1,
  //     stagger: 0.1,
  //     ease: 'power2',

  //   })
  // },[reveal]);

  return (
    <div
      className={cn("sectionMenuItem" /* { "is-reveal": reveal } */)}
      id="sectionMenuItem"
      data-scroll-section
    >
      <NavLink
        ref={ref}
        to={toPath}
        className={cn("link link--elara")}
        activeStyle={{
          fontWeight: "bold",
          color: "#E07A5F",
        }}
      >
        <h1 id="section-menu-animate">{lineContent}</h1>
        <h2 id="section-menu-animate">{lineContent2}</h2>
        <p id="section-menu-animate" className="solid"></p>
      </NavLink>
    </div>
  );
}

export default function SectionMenu({ menuItems }) {
  useEffect(() => {
    const split = new SplitText("#section-menu-animate", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const line = new SplitText("#section-menu-animate", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 0.8,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <>
      {menuItems.map(({ h1, h2, to }) => (
        <SectionMenuItem
          key={to}
          lineContent={h1}
          lineContent2={h2}
          toPath={to}
        />
      ))}
    </>
  );
}
