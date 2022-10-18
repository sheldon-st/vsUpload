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

const StudentHubPage = () => {
  const ref = useRef(null);

  return (
    <>
      <div data-scroll-container ref={ref}>
        <ParagraphSectionWork
          content={
            <div id="headline" data-scroll-container ref={ref}>
              <h1 id="Logo Design">Student Hub 2.0</h1>
              <ul id="headline">
                <li>- Research, design, & prototyping</li>
                <li>- Design in Adobe XD</li>
              </ul>
              <br />
              <h3>
                <a
                  class="animated-arrow"
                  href="https://www.beautiful.ai/player/-Mois434CvqzRV5NWVBF"
                  without
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span class="the-arrow -left">
                    <span class="shaft"></span>
                  </span>
                  <span class="main">
                    <span class="text">View Project Proposal</span>
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
export default StudentHubPage;
