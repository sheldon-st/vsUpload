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
              <h1 id="headline">Student Hub 2.0</h1>
              <ul id="headline">
                <li>ARTG 3333 Experience & Interaction</li>
                <li>Prototyping in Adobe XD</li>
              </ul>

              {/* <h2 id="headline">Prompt</h2> */}

              <h2 id="Proposal">
                <a href="https://www.beautiful.ai/player/-Mois434CvqzRV5NWVBF">
                  Proposal
                </a>
              </h2>
              <h2 id="Mock-Ups">
                <a href="https://xd.adobe.com/view/663f76a2-7818-408e-b875-31ba2773cdae-336c/">
                  Prototypes
                </a>
              </h2>
            </div>
          }
        />
      </div>
    </>
  );
};
export default StudentHubPage;
