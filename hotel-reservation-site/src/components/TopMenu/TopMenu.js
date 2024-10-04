import React from "react";
import Facebook from "../Icons/Facebook";
import Instagram from "../Icons/Instagram";
import Linkedin from "../Icons/Linkedin";
import Twitter from "../Icons/Twitter";
import Youtube from "../Icons/Youtube";
import Email from "../Icons/Email";
import Phone from "../Icons/Phone";
import "../../styles/main.scss";

const TopMenu = () => {
  return (
    <div className="container-custom">
      <div className="topmenu">
        <ul className="topmenu-right">
          <li>
            <a href="#">
              <Facebook></Facebook>
            </a>
          </li>
          <li>
            <a href="#">
              <Instagram></Instagram>
            </a>
          </li>
          <li>
            <a href="#">
              <Linkedin></Linkedin>
            </a>
          </li>
          <li>
            <a href="#">
              <Twitter></Twitter>
            </a>
          </li>
          <li>
            <a href="#">
              <Youtube></Youtube>
            </a>
          </li>
        </ul>
        <ul className="topmenu-left">
          <li><a href="mailto:arya@gmail.com">arya@gmail.com</a><Email></Email></li>
          <li><a href="tel:02181686">۰۲۱۸۱۶۸۸</a><Phone></Phone></li>
        </ul>
      </div>
    </div>
  );
};

export default TopMenu;
