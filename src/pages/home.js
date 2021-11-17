import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

import Navbar from "../components/header/header.js";
import Footer from "../components/Footer";

import Featured from "../components/Featured";
import ParagraphSection from "../components/ParagraphSection";
import Hero from "../components/Hero";
import useLocoScroll from "../hooks/useLocoScroll";

const Home = () => {
  const ref = useRef(null);
  

  return (
    <>
      <div
        className="home-container"
        id="home-container"
        data-scroll-container
        ref={ref}
      >
        <Hero />
        <ParagraphSection />
        <Featured />
        {/* <Gallery /> */}
        <Footer />
      </div>
    </>
  );
};
export default Home;
