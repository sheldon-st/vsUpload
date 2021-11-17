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
      data-scroll-section
      className="blogContainer"
    >
      <h1> Hello! </h1>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
      I’m a student, designer, and developer from Boston, Massachusetts - who is passionate about finding creative and beautiful solutions to all kinds of problems. I work mostly with UI/UX design and front-end web development.

      <p>Checks out of some my work</p>
      </p>



    </section>
  );
}