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
              <h1 id="headline">Logo Design</h1>
              <ul id="headline">
                <li>Typography I</li>
                <li>Design in Adobe Illustrator</li>
              </ul>

              <a
                href={logofile}
                without
                rel="noopener noreferrer"
                target="_blank"
              >
                <h2 id="headline">Artifacts</h2>{" "}
              </a>
            </div>
          }
        />
      </div>
    </>
  );
};
export default LogoPage;
