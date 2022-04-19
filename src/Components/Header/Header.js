import React from "react";
import "./Header.css";
import logo from "../../Images/logo.png";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="header d-flex justify-content-between align-items-center py-3 ">
      <div>
        <Link to='/'>
          <img height={"30px"} src={logo} alt="" />
        </Link>
      </div>
      <div className="d-flex align-items-center ">
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/about"
        >
          About Me
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/blogs"
        >
          Blogs
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/login"
        >
          Login
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to="/registration"
        >
          Registration
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
