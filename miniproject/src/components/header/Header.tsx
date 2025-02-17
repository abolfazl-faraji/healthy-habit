import React from "react";
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
      />
      <h3 className="rght">مینی پروژه</h3>
      <ul>
        <li>
          <Link to={"/"}>
            Home<i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link to={"/pr1"}>
            Mini pr1 <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link to={"pr2"}>
            Mini pr2 <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link to={"pr3"}>
            Mini pr3 <i className="fas fa-angle-down"></i>
          </Link>
        </li>
        <li>
          <Link to={"pr4"}>
            Mini pr4 <i className="fas fa-angle-down"></i>
          </Link>
        </li>
      </ul>
      <h3 className="lft">Mini project</h3>
      <Outlet />
    </header>
  );
}
export default Header;
