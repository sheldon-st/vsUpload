import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";

import SplitText from "../../utils/Split3.min";

import gsap from "gsap";

import { NavLink } from "react-router-dom";

import useOnScreen from "../../hooks/useOnScreen";

import "./style.scss";
import SectionHeader from "../SectionHeader/SectionHeader.js";

import "./style.scss";

export default function ParagraphSection() {
  const ref = useRef(null);
  const ref2 = useRef(null);

  const [reveal, setReveal] = useState(false);

  const onScreen = useOnScreen(ref);

  useEffect(() => {
    if (onScreen) setReveal(onScreen);
  }, [onScreen]);

  const [reveal2, setReveal2] = useState(false);
  const onScreen2 = useOnScreen(ref2);

  useEffect(() => {
    if (onScreen2) setReveal2(onScreen2);
  }, [onScreen2]);

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

  useEffect(() => {
    if (reveal2) {
      const split = new SplitText("#headline2", { type: "lines" });

      gsap.to(split.lines, {
        duration: 1,
        y: -20,
        opacity: 1,
        stagger: 0.1,
        ease: "power4.out",
        // onComplete: () => split.revert(),
      });
    }
  }, [reveal2]);

  var workLink = (
    <NavLink
      className="link link--elara"
      to="/work"
      activeStyle={{
        fontWeight: "bold",
        color: "#E07A5F",
      }}
    >
      some of my work
    </NavLink>
  );

  var uiLink = (
    <NavLink
      className="link link--elara"
      to="/work/ux"
      activeStyle={{
        fontWeight: "bold",
        color: "#E07A5F",
      }}
    >
      UX design{" "}
    </NavLink>
  );

  var frontendLink = (
    <NavLink
      className="link link--elara"
      to="/work/frontend"
      activeStyle={{
        fontWeight: "bold",
        color: "#E07A5F",
      }}
    >
      front-end
    </NavLink>
  );

  var resumeLink = (
    <NavLink
      className="link link--elara"
      to="/work/frontend"
      activeStyle={{
        fontWeight: "bold",
        color: "#E07A5F",
      }}
    >
      resume
    </NavLink>
  );

  var contactLink = (
    <a
      className="link link--elara"
      href="mailto:sheldon.st@northeastern.edu"
      activeStyle={{
        fontWeight: "bold",
        color: "#E07A5F",
      }}
    >
      get in touch{" "}
    </a>
  );

  return (
    <section data-scroll-section className="about-section">
      <h1> Hello! </h1>
      <p ref={ref} id="headline" className={cn({ "is-reveal": reveal })}>
        I’m a student, designer, and developer from Boston, Massachusetts who is
        passionate about finding creative and beautiful solutions to all kinds
        of problems. I have worked mostly with <br /> {uiLink} and{" "}
        {frontendLink} web development.
      </p>

      <p ref={ref2} id="headline2" className={cn({ "is-reveal2": reveal2 })}>
        Here you can find {workLink}, <br /> a {resumeLink}, and {contactLink}{" "}
        if you’d like to work together on a project or have any questions.
      </p>
    </section>
  );
}
