import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import React from "react";

function Header() {
  function opmenu() {
    const mnu = document.getElementById("div-mbmenu");
    if (mnu != null) {
      mnu.classList.remove("hide");
      mnu.classList.add("show");
    }
  }

  function clmenu() {
    const mnu = document.getElementById("div-mbmenu");
    if (mnu != null) {
      mnu.classList.remove("show");
      mnu.classList.add("hide");
    }
  }

  function lightdark() {
    document.getElementsByTagName("html")[0].classList.add("dark-mode");
    const light = document.getElementById("light-btn");
    const dark = document.getElementById("dark-btn");
    if (light != null && dark != null) {
      light.classList.remove("hide");
      dark.classList.add("hide");
    }
  }
  function darklight() {
    document.getElementsByTagName("html")[0].classList.remove("dark-mode");
    const light = document.getElementById("light-btn");
    const dark = document.getElementById("dark-btn");
    if (light != null && dark != null) {
      dark.classList.remove("hide");
      light.classList.add("hide");
    }
  }

  var txt = "ایران دانشکده";
  var i = 0;
  function nametag() {
    const a = document.getElementById("nameh1");
    if (i < txt.length) {
      if (a != null) {
        a.innerHTML += txt.charAt(i);
        i++;
        setTimeout(nametag, 80);
      }
    } else i = 0;
  }
  function nametagdl() {
    const a = document.getElementById("nameh1");
    if (i <= 13) {
      if (a != null) {
        a.classList.add("nhide");
      }
    } else setTimeout(nametagdl, 80);
  }
  function nametagcl() {
    const a = document.getElementById("nameh1");
    if (a != null && i === 0) {
      a.innerHTML = "";
      a.classList.remove("nhide");
      nametag();
    } else if (a != null) a.classList.remove("nhide");
  }

  window.onscroll = () => {
    var header = document.getElementById("Header");
    if (header != null) {
      var sticky = header.offsetTop;
      if (window.pageYOffset > sticky + 30) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
  };

  return (
    <>
      <header
        id="Header"
        className="trans-3"
        onMouseEnter={nametagcl}
        onMouseLeave={nametagdl}
      >
        <div className="div-mnav">
          <div className="div-logo trans-3">
            <div>
              <img src={require("../../img/logo.png")} alt="Irandaneshkade" />
            </div>
            <h1 id="nameh1" className="nhide">
              {" "}
            </h1>
          </div>

          <div className="div-nav trans-3">
            <nav>
              <ul>
                <li>
                  <Link to="/">خانه</Link>
                </li>
                <li>
                  <Link to="/konkor" className="lk">
                    کنکور
                    <span>
                      <img
                        src={require("../../img/rounded-down.png")}
                        alt=""
                        className="icofont-rounded-down"
                      />
                    </span>
                  </Link>
                  <div className="dropdown">
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/Os" className="lk">
                    استاید
                    <span>
                      <img
                        src={require("../../img/rounded-down.png")}
                        alt=""
                        className="icofont-rounded-down"
                      />
                    </span>
                  </Link>
                  <div className="dropdown">
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/Uni">
                    دانشگاه
                    <span>
                      <img
                        src={require("../../img/rounded-down.png")}
                        alt=""
                        className="icofont-rounded-down"
                      />
                    </span>
                  </Link>
                  <div className="dropdown">
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/Book">
                    کتاب
                    <span>
                      <img
                        src={require("../../img/rounded-down.png")}
                        alt=""
                        className="icofont-rounded-down"
                      />
                    </span>
                  </Link>
                  <div className="dropdown">
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                    <div className="dropdown-content">
                      <Link to="/">Link 1</Link>
                      <Link to="/">Link 2</Link>
                      <Link to="/">Link 3</Link>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/About">درباره ما</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="div-icn trans-3">
            <button onClick={lightdark} className="dark-btn " id="dark-btn">
              <img src={require("../../img/icons8-dark-mode.png")} alt=""></img>
            </button>
            <button
              onClick={darklight}
              className="light-btn  hide"
              id="light-btn"
            >
              <img
                src={require("../../img/icons8-light-mode.png")}
                alt=""
              ></img>
            </button>
          </div>

          <div className="mb-mnu trans-3">
            <button onClick={opmenu}>
              <div className="btndv1"></div>
              <div className="btndv2"></div>
              <div className="btndv3"></div>
            </button>
          </div>
        </div>

        <div id="div-mbmenu" className="hide trans-3">
          <button onClick={clmenu}>
            <img src={require("../../img/delete.png")} alt=""></img>
          </button>

          <div className="cn-mbmenu">
            <div className="mb-h3">
              <h3>دانشکده ای برای ایران</h3>
            </div>

            <div className="mb-lk">
              <li>
                <a>خانه </a>
              </li>

              <li>
                <a>
                  کنکور
                  <img src={require("../../img/caret-left-solid.png")} alt="" />
                </a>
                <div className="mb-hide"></div>
              </li>

              <li>
                <a>
                  استاید
                  <img src={require("../../img/caret-left-solid.png")} alt="" />
                </a>
                <div className="mb-hide"></div>
              </li>

              <li>
                <a>
                  دانشگاها
                  <img src={require("../../img/caret-left-solid.png")} alt="" />
                </a>
                <div className="mb-hide"></div>
              </li>

              <li>
                <a>
                  کتاب
                  <img src={require("../../img/caret-left-solid.png")} alt="" />
                </a>
                <div className="mb-hide"></div>
              </li>

              <li>
                <a>درباره ما</a>
              </li>
            </div>

            <div className="mb-icn">
              <span>
                <Link to="/">
                  <img src={require("../../img/icons-twitter.png")} alt="" />
                </Link>
              </span>
              <span>
                <Link to="/">
                  <img src={require("../../img/icons-instagram.png")} alt="" />
                </Link>
              </span>
              <span>
                <Link to="/">
                  <img src={require("../../img/icons-linkedin.png")} alt="" />
                </Link>
              </span>
            </div>
          </div>
        </div>
      </header>

      <Outlet />
    </>
  );
}

export default Header;
