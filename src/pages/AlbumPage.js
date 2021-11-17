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
              <h1 id="headline">Album Cover Redesign</h1>
              <ul id="headline">
                <li>Typography I</li>
                <li>Design in Adobe Illustrator</li>
              </ul>

              <a
                href={albumfile}
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
export default AlbumPage;
