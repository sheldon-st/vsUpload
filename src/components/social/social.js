import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import logo from "../../img/1x/logoImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div class="social-btns">
      <a class="btn email" href="#">
        <FontAwesomeIcon className="fa" icon={faGithubAlt} />
      </a>
      <a class="btn linkedin" href="#">
        <FontAwesomeIcon className="fa" icon={faGithubAlt} />
      </a>
      <a class="btn github" href="#">
        <FontAwesomeIcon className="fa" icon={faGithubAlt} />
      </a>
    </div>
  );
};

export default Social;
