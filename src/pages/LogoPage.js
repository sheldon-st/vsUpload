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
              <h6 id="Typography I">Typography I</h6>
              <h6 id="Designed in Adobe Illustrator">
                Designed in Adobe Illustrator
              </h6>
              <h2 id="Objective">Objective </h2>
              <h5 id="Design an App icon for that effectively reflect your company’s nature and values through typography">
                Design an App icon for that effectively reflect your company’s
                nature and values through typography.
              </h5>
              <h3 id="Design Restrictions">Design Restrictions </h3>
              <h6 id="The icon needs to consist of 1 letter only using or based off one of the following typefaces:">
                The icon must be based off of a character from one of the
                following typefaces:{" "}
              </h6>
              <ul>
                <li>Garamond</li>
                <li>Times New Roman</li>
                <li>Didot (or Bodoni)</li>
                <li>Clarendon</li>
                <li>Futura</li>
                <li>Helvetica</li>
                <li>Univers</li>
              </ul>

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
            </div>
          }
        />
      </div>
    </>
  );
};
export default LogoPage;
