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
  return (
    <div>
      <NavLink to={{ pathname: "https://herewecode.io/" }} target="_blank">
        Click to open HereWeCode (new tab)
      </NavLink>
    </div>
  );
};
export default CovalentMarketing;
