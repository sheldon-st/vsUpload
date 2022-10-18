import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
  useEffect,
} from "react-router-dom";

import { NavLink } from "react-router-dom";

import Title from "../components/title";

import { gsap } from "gsap";

import SectionMenu from "../components/workMenu/index.jsx";

import "../styles/App.scss";

import { routes } from "../App.js";

import { useLocomotiveScroll } from "react-locomotive-scroll";

export default function Work({ routes }) {
  // Scroll to top on page load
  const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    scroll && scroll.scrollTo(0, { duration: 0.5 });
  }, [scroll]);
  return (
    <div className="workContainer">
      <div className="logoContainerSpacer logoHeadingSpacer"></div>

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
