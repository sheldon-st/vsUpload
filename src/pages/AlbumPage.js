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

import albumfile from "../img/album.pdf";

const AlbumPage = () => {
  const ref = useRef(null);

  return (
    <>
      <div data-scroll-container ref={ref}>
        <ParagraphSectionWork
          content={
            <div id="headline" data-scroll-container ref={ref}>
              <h1 id="Album Design">Album Redesign</h1>

              <h6 id="Typography I">Typography I</h6>

              <h6 id="Designed in Adobe Illustrator">
                Designed in Adobe Illustrator
              </h6>

              <h3 id="Objective">Objective</h3>

              <h6 id="Express the meaning of a word or an idea through the spacing , sizing and placement of letters through the exercise of an album cover. Develop typographic forms for, and design a theoretical music album cover series based off an existing album.">
                Express the meaning of a word or an idea through the spacing ,
                sizing and placement of letters through the exercise of an album
                cover. Develop typographic forms for, and design a theoretical
                music album cover series based off an existing album.
              </h6>

              <h2 id="Design Restrictions">Design Restrictions</h2>

              <h5 id="Size: 800 × 800px">Size: 800 × 800px </h5>
              <h5 id="Use different">Use different </h5>
              <h5 id="Text must be based off of a character from one of the following typefaces:">
                Text must be based off of a character from one of the following
                typefaces:
              </h5>
              <ul>
                <li> Garamond</li>
                <li> Times New Roman</li>
                <li> Didot (or Bodoni)</li>
                <li> Clarendon</li>
                <li> Futura</li>
                <li> Helvetica</li>
                <li> Univers</li>
              </ul>
              <h5 id="Experiment with the following hierarchies to establish a series:">
                Experiment with the following hierarchies to establish a series:
              </h5>
              <ul>
                <li> Scale</li>
                <li> Placement</li>
                <li> Rotation</li>
                <li> Case</li>
                <li> Color (black, white, shades of gray)</li>
                <li> Weight</li>
              </ul>

              <h3>
                <a
                  class="animated-arrow"
                  href={albumfile}
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
export default AlbumPage;
