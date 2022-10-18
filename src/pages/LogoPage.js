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
import { Document } from "react-pdf";

import logofile from "../img/logo.pdf";

const LogoPage = () => {
  const ref = useRef(null);

  return (
    <>
      <div data-scroll-container ref={ref}>
        <ParagraphSectionWork
          content={
            <div id="headline" data-scroll-container ref={ref}>
              <h1 id="Logo Design">Logo Design</h1>
              <ul id="headline">
                <li>- Typography</li>
                <li>- Design in Adobe Illustrator</li>
              </ul>
              <br />
              <h2 id="Objective">Objective </h2>
              <p id="Design an App icon for that effectively reflect your company’s nature and values through typography">
                Design an App icon for that effectively reflect our company’s
                nature and values through typography.
              </p>
              <h3>
                <a
                  class="animated-arrow"
                  href={logofile}
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">Process Artifacts</span>
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
    </>
  );
};
export default LogoPage;
