import React from "react";
import "./style.scss";
import { NavLink } from "react-router-dom";
import logo from "../../img/1x/logoImg.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Social = () => {
  return (
    <div class="social-btns">
      <a class="btn email" href="mailto:sheldon.st@northeastern.edu">
        <FontAwesomeIcon className="fa" icon={faPaperPlane} color="E07A5F" />
      </a>
      <a
        class="btn linkedin"
        href="https://www.linkedin.com/in/stephen-sheldon"
      >
        <FontAwesomeIcon className="fa" icon={faLinkedinIn} color="#E07A5F" />
      </a>
      <a class="btn github" href="">
        <FontAwesomeIcon
          className="fa githubIcon"
          icon={faGithubAlt}
          color="red"
        />
      </a>
    </div>
  );
};

export default Social;
