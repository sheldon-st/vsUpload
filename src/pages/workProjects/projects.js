import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { NavLink } from "react-router-dom";

import { gsap } from "gsap";

import SectionMenu from "../../components/workMenu/index.jsx";

import "../../styles/App.scss";

//projects

export default function Project1() {
  return (
    <div className="sectionMenuContainer">
      <SectionMenu
        lineContent="project 1"
        lineContent2="things done"
        toPath="/work"
      />
      <SectionMenu
        lineContent="ux work"
        lineContent2="things done"
        toPath="/work"
      />{" "}
    </div>
  );
}
