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

import Title from "../components/title";

import { gsap } from "gsap";

import SectionMenu from "../components/workMenu/index.jsx";

import "../styles/App.scss";

import { routes } from "../App.js";

export default function Work({ routes }) {
  return (
    <div className="workContainer">
      <div className="logoContainerSpacer logoHeadingSpacer">
        <ul>
          <li>
            <NavLink
              className="workLink"
              activeStyle={{
                fontWeight: "bold",
                color: "#E07A5F",
                opacity: 1,
              }}
              exact
              to="/work/"
            >
              all work
            </NavLink>
          </li>
          <li>
            <NavLink
              className="workLink"
              activeStyle={{
                fontWeight: "bold",
                color: "#E07A5F",
                opacity: 1,
              }}
              to="/work/ux"
            >
              ui
            </NavLink>
          </li>
          <li>
            <NavLink
              className="workLink"
              activeStyle={{
                fontWeight: "bold",
                color: "#E07A5F",
                opacity: 1,
              }}
              to="/work/web"
            >
              web
            </NavLink>
          </li>
          
            
          <li>
            <NavLink
              className="workLink"
              activeStyle={{
                fontWeight: "bold",
                color: "#E07A5F",
                opacity: 1,
              }}
              to="/work/graphics"
            >
              graphicsas
            </NavLink>
          </li>
          <li>
            <NavLink
              className="workLink"
              activeStyle={{
                fontWeight: "bold",
                color: "#E07A5F",
                opacity: 1,
              }}
              to="/work/java"
            >
              java
            </NavLink>
          </li>
          <li>
            <NavLink
              className="workLink"
              activeStyle={{
                fontWeight: "bold",
                color: "#E07A5F",
                opacity: 1,
              }}
              to="/work/photo"
            >
              photo
            </NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        <div>
          <SectionMenu
            lineContent="all work"
            lineContent2="things done"
            toPath="/work"
          />
          <SectionMenu
            lineContent="all work"
            lineContent2="things done"
            toPath="/work"
          />
          <SectionMenu
            lineContent="all work"
            lineContent2="things done"
            toPath="/work"
          />
        </div>
      </Switch>
    </div>
  );
}

// A special wrapper for <Route> that knows how to
// handle "sub"-routes by passing them in a `routes`
// prop to the component it renders.
function RouteWithSubRoutes(route) {
  return (
    <Route
      path={route.path}
      render={(props) => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}
