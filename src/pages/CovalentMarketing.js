import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Navbar from "../components/header/header.js";
import Footer from "../components/Footer";

import Featured from "../components/Featured";
import ParagraphSectionWork from "../components/ParagraphSectionWork";
import Hero from "../components/Hero";
import useLocoScroll from "../hooks/useLocoScroll";
import sketches from "../img/updatedFlowNoExtrasSVG.svg";
import mock1 from "../img/Opt-In Form.png";
import mock2 from "../img/Match Logic.png";
import "../styles/main.css";
import { NavLink } from "react-router-dom";

const CovalentMarketing = () => {
  const ref = useRef(null);

  return (
    <div data-scroll-container ref={ref}>
      <ParagraphSectionWork
        content={
          <div id="headline" data-scroll-container ref={ref}>
            <h1 id="Logo Design">Covalent - Marketing Website</h1>
            <ul id="headline">
              <li>- Research, design, copy & SEO</li>
              <li>- Design in Figma</li>
              <li>- Built in Webflow</li>
            </ul>
            <br />
            <h3>
              <a
                class="animated-arrow"
                href="https://www.covalent.live"
                without
                rel="noopener noreferrer"
                target="_blank"
              >
                <span class="the-arrow -left">
                  <span class="shaft"></span>
                </span>
                <span class="main">
                  <span class="text">Proceed to Covalent's website</span>
                  <span class="the-arrow -right">
                    <span class="shaft"></span>
                  </span>
                </span>
              </a>
            </h3>
            <h3> Further information available upon request.</h3>
          </div>
        }
      />
    </div>
  );
};
export default CovalentMarketing;
