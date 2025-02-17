import React from "react";
import "./navar.css";
function Navar() {
  return (
    <header>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
      />
      <h3 className="rght">مینی پروژه</h3>
      <ul>
        <li>
          Mini pr1 <i className="fas fa-angle-down"></i>
        </li>
        <li>
          Mini pr2 <i className="fas fa-angle-down"></i>
        </li>
        <li>
          Mini pr3 <i className="fas fa-angle-down"></i>
        </li>
        <li>
          Mini pr4 <i className="fas fa-angle-down"></i>
        </li>
        <li>
          Mini pr5 <i className="fas fa-angle-down"></i>
        </li>
      </ul>
      <h3 className="lft">Mini project</h3>
    </header>
  );
}
export default Navar;
