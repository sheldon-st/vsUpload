import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SplitText from "../../utils/Split3.min"; 

import gsap from "gsap";

import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";
import SectionHeader from "../SectionHeader/SectionHeader.js";



import "./style.scss";

export default function ParagraphSection() {
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
      className={cn("about-section", { "is-reveal": reveal })}
      data-scroll-section
    >
      <h1>Exploring the Epistemic and economic advantages of apples stance on privacy </h1>
     

      <SectionHeader title="The Bentham Panopticon of Tech" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
       
      </p>

      <SectionHeader title="The Right to Privacy" />
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        
      </p>
       
    </section>
  );
}