import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import SplitText from "../utils/Split3.min";

const Title = ({ lineContent, lineContent2 }) => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  const split = new SplitText("#header-text", {
    type: "lines",
    linesClass: "lineChildren",
  });

  const splitParent = new SplitText("#header-text", {
    type: "lines",
    linesClass: "lineParent",
  });

  useEffect(() => {
    gsap.from(split.lines, 0.8, {
      delay: 0.1,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15,
      },
    });
  }, split.lines);

  return (
    <h1 class="page-title">
      <div className="line-wrap">
        <div ref={(el) => (line1 = el)} className="line">
          {lineContent}
        </div>
      </div>
      <div className="line-wrap">
        <div id="header-text" ref={(el) => (line2 = el)} className="line">
          {lineContent2}
        </div>
      </div>
    </h1>
  );
};

export default Title;
