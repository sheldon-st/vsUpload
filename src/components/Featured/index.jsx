import React from "react";
import "./style.scss";
import booklet from "../../img/booklet.png";
import studenthub from "../../img/studenthub.png";
import { NavLink } from "react-router-dom";

export default function Featured() {
  // const [firstUrl, secondUrl] = photos;
  //const [studenthub, booklet] = photos;

  return (
    <section className="featured-section"  data-scroll-section>
      <div className="featured-row-layout">
      <NavLink to="/booklet" className="featured-link">
        Student Hub 2.0
      </NavLink>
        <img src={studenthub} data-scroll/>
      </div>
      <div className='featured-column-layout'>
      <NavLink to="/booklet" className="featured-link" data-scroll>
      
      <img src={booklet} />
        NYFF Booklet Design
      </NavLink>
      </div>
    </section>
  )
}
