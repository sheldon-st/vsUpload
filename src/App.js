// dependency imports
import React, { useState, useRef, useEffect } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useHistory } from "react-router-dom";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
  NavLink,
} from "react-router-dom";
import gsap from "gsap";
import SplitText from "./utils/Split3.min";
import AnimatedCursor from "react-animated-cursor";

// style imports
import "./styles/App.scss";
import "./styles/fonts.css";

// component imports
import Header from "./components/header/header";
import SectionMenu from "./components/workMenu/index.jsx";

// page imports
import Home from "./pages/home";
import About from "./pages/about";
import EpistemologyProject from "./pages/blog/EpistemologyProject";
import Banksy from "./pages/banksy";

import DoodlePage from "./pages/DoodlePage";
import StudentHubPage from "./pages/StudentHubPage";
import BanksyPage from "./pages/BanksyPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import AlbumPage from "./pages/AlbumPage";
import LogoPage from "./pages/LogoPage";
import KruskalPage from "./pages/KruskalPage";
import FloodPage from "./pages/FloodPage";

import Project1 from "./pages/workProjects/projects";

import Social from "./components/social/social";

import LocomotiveScroll from "locomotive-scroll";
import { useLocomotiveScroll } from "react-locomotive-scroll";
// import Work from "./pages/work";
// import RouteWithSubRoutes from "./pages/work";

// route config is just an array of logical "routes"
// with `path` and `component` props, ordered the same
// way as inside a `<Switch>`.
export const routes = [
  // main
  { path: "/home", component: Home, exact: true, name: "Home" },
  {
    path: "/about",
    component: About,
    name: "About",
  },
  {
    path: "/banksy",
    component: BanksyPage,
    name: "Banksy",
  },
  {
    path: "/epistemologyofprivacy",
    component: EpistemologyProject,
    name: "EpistemologyProject",
  },
  {
    path: "/doodle",
    component: DoodlePage,
    name: "DoodlePage",
  },
  {
    path: "/case-study",
    component: CaseStudyPage,
    name: "CaseStudyPage",
  },
  {
    path: "/studenthub",
    component: StudentHubPage,
    name: "Student Hub 2.0",
  },
  {
    path: "/albumcover",
    component: AlbumPage,
    name: "Album Cover Redesign",
  },
  {
    path: "/logo",
    component: LogoPage,
    name: "Logo Design",
  },
  {
    path: "/kruskal",
    component: KruskalPage,
    name: "Kruskal's Maze",
  },
  {
    path: "/floodit",
    component: FloodPage,
    name: "Flood It",
  },
  {
    path: "/work",
    component: Work,
    name: "Work",
    routes: [
      // work categories
      {
        path: "/work/ux",
        component: UxMenu,
        name: "ui",
      },
      {
        path: "/work/Frontend",
        component: WebMenu,
        name: "Front-end",
      },
      {
        path: "/work/backend",
        component: JavaMenu,
        name: "Back-end",
      },
      {
        path: "/work/graphics",
        component: GraphicsMenu,
        name: "Graphics",
      },
      {
        path: "/work/photo",
        component: PhotoMenu,
        name: "Photo",
      },
    ],
  },
  // projects
  {
    path: "/project1",
    component: Project1,
    name: "Photo",
  },
];

// all projects, with subititle, topic & path
const projects = [
  // { h1: "album redesign", h2: "typography", to: "/work", topics: ["graphics"] },

  {
    h1: "website & brother database",
    h2: "for pi kappa phi @ northeastern | next(react)js, firebase",
    to: "/work",
    topics: ["web"],
  },

  {
    h1: "logo design",
    h2: "typography | adobe illustrator",
    to: "/logo",
    topics: ["graphics"],
  },
  {
    h1: "album redesign",
    h2: "typography | adobe illustrator",
    to: "/albumcover",
    topics: ["graphics"],
  },

  {
    h1: "student hub 2.0",
    h2: "prototyping | adobe xd",
    to: "/studenthub",
    topics: ["ux"],
  },
  {
    h1: "google doodle",
    h2: "prototypes & frontend | adobe xd, html, css, vanilla js",
    to: "/doodle",
    topics: ["ux", "web"],
  },

  {
    h1: "Web App Design",
    h2: "research, design & testing | Covalent",
    to: "/case-study",
    topics: ["ux"],
  },
  {
    h1: "banksy?",
    h2: "prototypes & frontend | adobe xd, html, css, vanilla js",
    to: "/banksy",
    topics: ["ux", "web"],
  },

  {
    h1: "floodIt",
    h2: "things done",
    to: "/floodit",
    topics: ["java"],
  },
  {
    h1: "kruskal's maze",
    h2: "things done",
    to: "/kruskal",
    topics: ["java"],
  },

  {
    h1: "portfolio",
    h2: "prototyping and development | adobe xd, reactjs (at the moment)",
    to: "/work/portfolio",
    topics: ["ux", "web"],
  },

  {
    h1: "portrait",
    h2: "some photos i've taken",
    to: "/work/portrait",
    topics: ["photo"],
  },
  {
    h1: "landscape",
    h2: "just for fun",
    to: "/work/landscape",
    topics: ["photo"],
  },
  {
    h1: "wildlife",
    h2: "from all over",
    to: "/work/wildlife",
    topics: ["photo"],
  },
];

// main app component
export default function App() {
  const containerRef = useRef(null);
  var { asPath } = useParams();
  const { scroll } = useLocomotiveScroll();

  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");

  const history = useHistory();
  useEffect(() => {
    history.listen((location) => {
      console.log(`You changed the page to: ${location.pathname}`);
      asPath = location.pathname;

      scroll && scroll.update();
      scroll && scroll.scrollTo(0);

      cursor = document.querySelector(".custom-cursor");
      links = document.querySelectorAll("a");
      console.log(links);
      var initCursor = false;

      for (var i = 0; i < links.length; i++) {
        var selfLink = links[i];

        selfLink.addEventListener("mouseover", function () {
          cursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
          cursor.classList.remove("custom-cursor--link");
        });
      }
    });
  }, [history]);

  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM fully loaded and parsed");
    cursor = document.querySelector(".custom-cursor");
    links = document.querySelectorAll("a");
    var initCursor = false;

    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];

      selfLink.addEventListener("mouseover", function () {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function () {
        cursor.classList.remove("custom-cursor--link");
      });
    }

    window.onmousemove = function (e) {
      var mouseX = e.clientX;
      var mouseY = e.clientY;

      if (!initCursor) {
        // cursor.style.opacity = 1;
        gsap.to(cursor, 0.3, {
          opacity: 1,
        });
        initCursor = true;
      }

      gsap.to(cursor, 0, {
        top: mouseY + "px",
        left: mouseX + "px",
      });
    };

    window.onmouseout = function (e) {
      gsap.to(cursor, 0.3, {
        opacity: 0,
      });
      initCursor = false;
    };
  });

  return (
    <>
      <LocomotiveScrollProvider
        options={{
          smooth: true,
          // ... available Locomotive Scroll instance options
        }}
        watch={[
          [asPath],
          //...all the dependencies you want to watch to update the scroll
        ]}
        containerRef={containerRef}
        location={asPath}
        onLocationChange={(scroll) => {
          scroll.scrollTo(0, { duration: 0, disableLerp: true });
          console.log("scrolling to top");
        }}
        onUpdate={() => console.log("Updated, but not on location change!")}
      >
        <main
          data-scroll-container
          id="data-scroll-container"
          ref={containerRef}
        >
          <div className="main-container" id="app">
            <div className="custom-cursor" />
            <Header />
            <Social />

            <div className="container">
              {routes.map((route, i, path, Component) => (
                <RouteWithSubRoutes key={i} {...route}></RouteWithSubRoutes>
              ))}
            </div>
          </div>
        </main>
      </LocomotiveScrollProvider>
    </>
  );
}

// main work menu
function Work({ routes }) {
  useEffect(() => {
    const split = new SplitText("#section-item", {
      type: "lines",
      linesClass: "lineChildren",
    });

    const line = new SplitText("#section-item", {
      type: "lines",
      linesClass: "lineParent",
    });

    gsap.to(split.lines, {
      duration: 0.5,
      y: 0,
      opacity: 1,
      stagger: 0.1,
      ease: "power2",
    });
  }, []);

  const elApp = document.querySelector("#app");

  // What we need...
  // Mouse position
  // Currently hovered item

  // Replay animation by hiding & showing the element again
  let el = document.body;
  el.addEventListener("click", function (e) {
    el.hidden = true;
    requestAnimationFrame(() => {
      el.hidden = false;
    });
  });

  // Scroll to top on page load
  const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    scroll && scroll.scrollTo(0, { duration: 0 });
    var cursor = document.querySelector(".custom-cursor");
    var links = document.querySelectorAll("a");
    var initCursor = false;

    for (var i = 0; i < links.length; i++) {
      var selfLink = links[i];

      selfLink.addEventListener("mouseover", function () {
        cursor.classList.add("custom-cursor--link");
      });
      selfLink.addEventListener("mouseout", function () {
        cursor.classList.remove("custom-cursor--link");
      });
    }
  }, [scroll]);

  // work testing

  return (
    <div className="workContainer" id="app">
      <div className="logoContainerSpacer logoHeadingSpacer">
        <ul>
          <li>
            <NavLink
              className="workLink"
              exact
              activeClassName="activeWorkLink"
              to="/work/"
              id="section-item"
            >
              all work
            </NavLink>
          </li>

          <li>
            <NavLink
              className="workLink"
              activeClassName="activeWorkLink"
              to="/work/frontend"
              id="section-item"
            >
              frontend
            </NavLink>
          </li>
          <li>
            <NavLink
              className="workLink"
              activeClassName="activeWorkLink"
              to="/work/backend"
              id="section-item"
            >
              backend
            </NavLink>
          </li>
          <li>
            <NavLink
              className="workLink"
              activeClassName="activeWorkLink"
              to="/work/ux"
              id="section-item"
            >
              ui/ux
            </NavLink>
          </li>

          <li>
            <NavLink
              className="workLink"
              activeClassName="activeWorkLink"
              to="/work/graphics"
              id="section-item"
            >
              graphics
            </NavLink>
          </li>
          <li>
            <NavLink
              className="workLink"
              activeClassName="activeWorkLink"
              to="/work/photo"
              id="section-item"
            >
              photo
            </NavLink>
          </li>
        </ul>
      </div>

      <Switch>
        // section switch
        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
        // all work list - change to featured later
        <div>
          <SectionMenu menuItems={projects} />

          {/* <a href="#" class="image-hover">
            <span class="title style2" data-title="G">
              G
            </span>
            <img src="/img/doodle/G.jpeg" alt="" />
          </a> */}
        </div>
      </Switch>
    </div>
  );
}

function GraphicsMenu() {
  return (
    <div className="sectionMenuContainer">
      <SectionMenu
        menuItems={projects
          .filter((project) => project.topics.includes("graphics"))
          .map((filteredProject) => filteredProject)}
      />
    </div>
  );
}

function JavaMenu() {
  return (
    <div className="sectionMenuContainer">
      <SectionMenu
        menuItems={projects
          .filter((project) => project.topics.includes("java"))
          .map((filteredProject) => filteredProject)}
      />
    </div>
  );
}

function PhotoMenu() {
  return (
    <div className="sectionMenuContainer">
      <SectionMenu
        menuItems={projects
          .filter((project) => project.topics.includes("photo"))
          .map((filteredProject) => filteredProject)}
      />
    </div>
  );
}

function UxMenu() {
  return (
    <div className="sectionMenuContainer">
      <SectionMenu
        menuItems={projects
          .filter((project) => project.topics.includes("ux"))
          .map((filteredProject) => filteredProject)}
      />
    </div>
  );
}

function WebMenu() {
  return (
    <div className="sectionMenuContainer">
      <SectionMenu
        menuItems={projects
          .filter((project) => project.topics.includes("web"))
          .map((filteredProject) => filteredProject)}
      />
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
