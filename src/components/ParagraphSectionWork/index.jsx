import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SplitText from "../../utils/Split3.min"; 

import gsap from "gsap";

import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";
import SectionHeader from "../SectionHeader/SectionHeader.js";

export default function ParagraphSectionWork({content}) {
  const ref = useRef(null);

  const [reveal, setReveal] = useState(false);
  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  useEffect(() => {
    if (reveal) {
      const split = new SplitText("#headline", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal]);



  return (
    <section
      data-scroll-section
      className="workContainerPage"
      
    >
    {content}

    </section>
  );
}