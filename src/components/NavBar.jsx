import React from "react";
import navLogo from "../assets/Group 2.png";
import fineGal from "../assets/Group 6.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="nav-con">
      <div className="d-flex justify-content-between align-items-center">
        <Link to="/">
          <img src={navLogo} alt="" />
        </Link>

        <div className="inner-nav d-flex align-items-center justify-content-between">
          <Link to="/new">New Task</Link>
          <Link to="/tasks">All Tasks</Link>
          <img src={fineGal} alt="" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
