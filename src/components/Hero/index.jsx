import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SplitText from "../../utils/Split3.min";

import gsap from "gsap";

import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";
import SectionHeader from "../SectionHeader/SectionHeader.js";

export default function Hero() {
  useEffect(() => {
    const split = new SplitText("#section-text", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#section-text", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  useEffect(() => {
    const split = new SplitText("#section-content", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const splitParent = new SplitText("#section-content", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 1,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  return (
    <section className={"header-container"} data-scroll-section>
      <h1 id="section-text">
        {/* <mark id="heroDF">art</mark>ish */}
        <mark class="doublefont3">art</mark>ish
        <br />
      </h1>
      <p id="section-content">
        creative design <br />
        and development
      </p>
    </section>
  );
}
