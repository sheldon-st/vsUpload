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

const CaseStudyPage = () => {
  const ref = useRef(null);

  return (
    <>
      <div data-scroll-container ref={ref}>
        <ParagraphSectionWork
          content={
            <div id="headline" data-scroll-container ref={ref}>
              <h1 id="headline csH1" className="csH1">
                Covalent - Web App UI
              </h1>
              <ul id="headline">
                <li>- UX + UI Work Sample</li>
                <li>- Prototyping in Figma</li>
              </ul>

              {/* <h2 id="headline">Prompt</h2> */}

              <h2 id="Mock-Ups">Background</h2>
              <p>
                Covalent is a startup with the objective of driving attempting
                to drive engagement for communities and teams through custom
                email/slack based member matching and introductions. When I
                joined the team, ; they had developed an effective strategy for
                matching and introducing members, but still had to onboard,
                configure and manage the engagements manually. I worked with
                with the two company founders and another engineer to design and
                develop a web app that would automate these processes. We
                divided this core functionality of this into several projects
                following the agile methodology. Below, is some of the work I
                did for the first of these projects: "Match Logic."

                Worked with product and development teams to design and develop a web app that would automate the process of matching and introducing members of a community or team. 
              </p>

              <h2 id="Artifacts">Process + Artifacts</h2>
              <h3 id="Artifacts">Project Spec</h3>
              <h3 id="Artifacts">Ideation</h3>
              <p id="Artifacts">
                After finalizing the design, we began prototyping in Figma. We
                used the TailwindUI framework out design system to ensure
                consistency across their product and speed up development
                significantly. Using this system as a guide, we created high
                fidelity mockups of the UI, and after a few rounds of internal
                feedback,  turned these into functional prototypes in Figma to
                test with customers. Here are some of the final mockups for the
                Match Logic UI:
              </p>
              <img class="csImage" src={sketches} alt="sketches" />
              <h3 id="Artifacts">Prototyping</h3>
              <p id="Artifacts">
                After finalizing the design, we began prototyping in Figma. We
                used the TailwindUI framework out design system to ensure
                consistency across their product and speed up development
                signifigantly. Using this system as a guide, we created high
                fidelity mockups of the UI, and after a few rounds of internal
                feedback; turned these into functional prototypes in Figma to
                test with customers. Here are some of the final mockups for the
                Match Logic UI:
              </p>
              <img class="csImage" src={mock2} alt="mock2" />
              <img class="csImage" src={mock1} alt="mock1" />
              <h3 id="Artifacts">Development</h3>
              <p id="Artifacts">
                After finalizing the design in Figma, these mockups were passed
                to the senior front-end developer to implement in React. I
                worked with him to ensure that the UI was implemented as
                intended, and that the functionality was as expected. Sticking
                to the design system, we were able to achieve this relatively
                quickly. The final product was a fully functional UI that
                allowed users to configure and manage their match logic, and was
                later integrated into the rest of the product by the backend
                team.
              </p>
              <h3>Challenges</h3>
              <p>
                There were a few aspects of this project that presented
                challenges. The design decision we spent the most time
                evaluating was how matching criteria should be ranked/ ordered.
                Covalent's matching algorithm allows for a criteria to either be
                required or weighted, and we wanted to allow users to configure
                this in the UI. This was a bit of a challenge to implement, as
                we wanted to allow users to drag and drop the criteria to
                reorder them, but also wanted to allow them to toggle the
                required/weighted status of each criteria, and both needed to
                fit into a cohesive UI. We decided to implement this by allowing
                users to drag and drop the criteria to reorder them, and to
                toggle the required/weighted status by clicking on the criteria
                (which would remove it from the weighted section and indicate it
                is locked/required). This allowed us to keep the UI simple and
                intuitive, while still allowing users to configure the matching
                logic as they desired.
              </p>
            </div>
          }
        />
      </div>
    </>
  );
};
export default CaseStudyPage;
