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

const DoodlePage = () => {
  const ref = useRef(null);

  return (
    <>
      <div data-scroll-container ref={ref}>
        <ParagraphSectionWork
          content={
            <div id="headline" data-scroll-container ref={ref}>
              <h1 id="headline">Google Doodle</h1>
              <ul id="headline">
                <li>ARTG 3333 Experience & Interaction</li>
                <li>Prototyping in Adobe XD</li>
                <li>Development in HTML\CSS\Vanilla JS</li>
              </ul>

              {/* <h2 id="headline">Prompt</h2> */}

              <h2 id="Mock-Ups">
                <a href="https://xd.adobe.com/view/d149dbbb-8b00-4c8d-accc-d6ceb9b28914-841a/">
                  Prototypes
                </a>
              </h2>

              <h2 id="Artifacts">Live Demo</h2>
            </div>
          }
        />
      </div>
    </>
  );
};
export default DoodlePage;
