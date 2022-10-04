import React from "react";
import { NavLink } from "react-router-dom";
import "./style.scss";

import logo from "../../img/1x/logoImg.png";

const Header = () => {
  return (
    <div className="header" data-scroll-section>
      <NavLink
        className="logoContainer logoHeading"
        to="/home"
        exact
        activeStyle={{
          fontWeight: "bold",
          color: "#E07A5F",
          opacity: 0,
        }}
      >
        <img src={logo} className="logoImg" alt="" />
        <br />
      </NavLink>
      <div className="headerButtons">
        <NavLink
          className="link link--elara--header link--elara"
          to="/work"
          activeStyle={{
            fontWeight: "bold",
            color: "#E07A5F",
          }}
        >
          Work
        </NavLink>
        <NavLink
          className="link link--elara link--elara--header"
          to="/about"
          exact
          activeStyle={{
            fontWeight: "bold",
            color: "#E07A5F",
          }}
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
