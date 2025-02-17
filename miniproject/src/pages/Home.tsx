import React from "react";
import Header from "../components/header/Header";
import "./css/Home.css";

function Home() {
  return (
    <body>
      <Header />
      <main>
        <div className="theme">
          <i className="fas fa-moon"></i>
        </div>
        <div className="prof">
          <img src={require("../Img/profile.jpg")} alt="Profile" />
          <div className="desc">
            <h2>
              <i className="far fa-user-circle"></i>
              ابوالفضل فرجی
            </h2>
            <p>
              <i className="fas fa-phone"></i>
              تلفن :{"09032311383"}
            </p>
            <p>
              <i className="	fas fa-at"></i>
              ایمیل :{"farajiabolfazl99@gmail.com"}
            </p>
          </div>
          <div className="social">
            <a href="">
              <i className="fab fa-instagram"></i>abolfazl._.faraji
            </a>
            <a href="">
              <i className="fab fa-telegram">ab_o_lfazl</i>
            </a>
          </div>
        </div>
      </main>
    </body>
  );
}

export default Home;
