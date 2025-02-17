import "./Css/Home.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import Konkor from "./konkor";
import Os from "./ostad";
import University from "./university";
import Book from "./books";
import About from "./about";
import React from "react";
import { link } from "fs";

function App() {
  var i = 0;
  var delay = 4500;

  function chng() {
    const cn = document.getElementsByClassName("cn-chng");
    if (cn != null) {
      if (i === 0) {
        cn[0].classList.add("shw");
        cn[2].classList.remove("shw");
        cn[3].classList.add("shw");
        cn[5].classList.remove("shw");
        setTimeout(chng, delay);
        i++;
      } else if (i === 1) {
        cn[1].classList.add("shw");
        cn[0].classList.remove("shw");
        cn[4].classList.add("shw");
        cn[3].classList.remove("shw");
        setTimeout(chng, delay);
        i++;
      } else {
        cn[2].classList.add("shw");
        cn[1].classList.remove("shw");
        cn[5].classList.add("shw");
        cn[4].classList.remove("shw");
        setTimeout(chng, delay);
        i = 0;
      }
    }
  }

  window.onload = function () {
    chng();
  };
  const [checked, setchecked] = React.useState(true);
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css"
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route path="Konkor" element={<Konkor />}></Route>
            <Route path="Os" element={<Os />}></Route>
            <Route path="University" element={<University />}></Route>
            <Route path="Books" element={<Book />}></Route>
            <Route path="About" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
      <main>
        <section>
          <div id="hd">
            <div className="hd-txt">
              <h1>ایران دانشکده</h1>
              <h3>
                مجموعه ای از بهترین ( <var className="cn-chng">کتاب</var>
                <var className="cn-chng">اساتید</var>
                <var className="cn-chng">دانشگاه</var>&emsp;&emsp;&emsp; ) موجود
                در ایران{" "}
              </h3>
              <h5 className="cn-chng">
                مجموعه ای از کتاب های مرجع برای دانشگاه های سرتاسر ایران به صورت
                رایگان , ترجمه و نسخه اصلی برخی از کتاب ها و رمان های معروف دنیا
              </h5>
              <h5 className="cn-chng">
                معرفی استاید برتر دانشگاه های کشور بر اساس میزان بار علمی , نظر
                دنشجویان و میانگین نمرات داده شده
              </h5>
              <h5 className="cn-chng">
                معرفی دانشگاه های برتر ایران بر اساس رتبه در تایمز , تعداد
                مقالات علمی دانشگاه و میزان توان در تدریس استاید
              </h5>
            </div>
            <div>
              <input
                className="search-input"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        </section>

        <section className="section1">
          <div className="box">
            <img
              className="sec1-box-icon"
              src={require("../img/ostada-icon.png")}
              alt=""
            />
            <h3>استادا</h3>
            <p>بهترین مرجع اساتید</p>
            <a className="box-link" href="">
              بریم
              <i className="fas fa-angle-left"></i>
            </a>
          </div>
          <div className="box">
            <img src={require("../img/ketaba-icon.png")} alt="" />
            <h3>کتابا</h3>
            <p>بهترین مرجع کتاب های دانشگاهی</p>
            <a className="box-link" href="">
              بریم
              <i className="fas fa-angle-left"></i>
            </a>
          </div>
          <div className="box">
            <img
              className="sec1-box-icon"
              src={require("../img/daneshgaha-icon.png")}
              alt=""
            />
            <h3>دانشگاها</h3>
            <p>مرجع بهترین دانشگاه های ایران</p>
            <a className="box-link" href="">
              بریم
              <i className="fas fa-angle-left"></i>
            </a>
          </div>
        </section>
        <section>
          <div className="most-popular-uni-header">
            <h3>برترین دانشگاه های ایران</h3>
            <hr />
          </div>
          <div className="most-popular-university-box">
            <div className="most-popular-university-photo"></div>
            <ul className="most-popular-university-list">
              <li className="most-popular-university-option">
                <h5 className="uni-name">
                  ۱ - {"دانشگاه آزاد اسلامی واحد تاکستان"}
                </h5>
                <div>
                  <p className="uni-teachers-avrage">
                    4.2 <i className="fas fa-user-tie"></i>
                  </p>
                  <p className="uni-rank">
                    4.9 <i className="fas fa-university"></i>
                  </p>
                </div>
              </li>
              <hr className="most-popular-university-hr" />
              <li className="most-popular-university-option">
                <h5 className="uni-name">۲ - {"دانشگاه تورگوز آباد"}</h5>
                <div>
                  <p className="uni-teachers-avrage">
                    3.6 <i className="fas fa-user-tie"></i>
                  </p>
                  <p className="uni-rank">
                    5.0 <i className="fas fa-university"></i>
                  </p>
                </div>
              </li>
              <hr className="most-popular-university-hr" />
              <li className="most-popular-university-option">
                <h5 className="uni-name">
                  ۳ - {"دانشگاه بین المللی امام خمینی (ره)"}
                </h5>
                <div>
                  <p className="uni-teachers-avrage">
                    4.0 <i className="fas fa-user-tie"></i>
                  </p>
                  <p className="uni-rank">
                    4.9 <i className="fas fa-university"></i>
                  </p>
                </div>
              </li>
              <hr className="most-popular-university-hr" />
              <li className="most-popular-university-option">
                <h5 className="uni-name">
                  ۴ - {"دانشگاه پیام نور واحد قزوین"}
                </h5>
                <div>
                  <p className="uni-teachers-avrage">
                    4.1 <i className="fas fa-user-tie"></i>
                  </p>
                  <p className="uni-rank">
                    4.9 <i className="fas fa-university"></i>
                  </p>
                </div>
              </li>
              <hr className="most-popular-university-hr" />
              <li className="most-popular-university-option">
                <h5 className="uni-name">
                  ۵ - {"دانشگاه علوم پزشکی شهید بهشتی"}
                </h5>
                <div>
                  <p className="uni-teachers-avrage">
                    3.8 <i className="fas fa-user-tie"></i>
                  </p>
                  <p className="uni-rank">
                    4.9 <i className="fas fa-university"></i>
                  </p>
                </div>
              </li>
              <hr className="most-popular-university-hr" />
              <li className="most-popular-university-option">
                <h5 className="uni-name">۶ - {"دانشکاه صنعتی امیر کبیر"}</h5>
                <div>
                  <p className="uni-teachers-avrage">
                    5.0 <i className="fas fa-user-tie"></i>
                  </p>
                  <p className="uni-rank">
                    4.3 <i className="fas fa-university"></i>
                  </p>
                </div>
              </li>
              <hr className="most-popular-university-hr" />
              <li className="most-popular-university-option">
                <h5 className="uni-name">۷ - {"دانشگاه صنعتی اصفهان"}</h5>
                <div>
                  <p className="uni-teachers-avrage">
                    3.0 <i className="fas fa-user-tie"></i>
                  </p>
                  <p className="uni-rank">
                    3.4 <i className="fas fa-university"></i>
                  </p>
                </div>
              </li>
              <hr className="most-popular-university-hr" />
              <li className="most-popular-university-option">
                <h5 className="uni-name">۸ - {"دانشگاه صنعتی شریف"}</h5>
                <div>
                  <p className="uni-teachers-avrage">
                    4.8 <i className="fas fa-user-tie"></i>
                  </p>
                  <p className="uni-rank">
                    4.7 <i className="fas fa-university"></i>
                  </p>
                </div>
              </li>
              <a className="more-button" href="">
                <i className="fas fa-sort-down"></i>
              </a>
            </ul>
          </div>
        </section>
        <section>
          <div className="books-section-header">
            <h1>کتاب های برتر</h1>
            <hr />
          </div>
          <div className="books-section">
            <ul className="books-section-list">
              <a href="">
                <li className="books-section-op">ریاضی</li>
              </a>
              <a href="">
                <li className="books-section-op">فیزیک</li>
              </a>
              <a href="">
                <li className="books-section-op">شعر و ادبیات</li>
              </a>
              <a href="">
                <li className="books-section-op">روانشناسی</li>
              </a>
              <a href="">
                <li className="books-section-op">زبان</li>
              </a>
              <a href="">
                <li className="books-section-op">
                  بیشتر <i className="fas fa-angle-left"></i>
                </li>
              </a>
            </ul>
            <div className="book-card">
              <div className="book-image"></div>
              <h1 className="book-name">نام کتاب</h1>
              <h3 className="book-writer">نام نویسنده</h3>
              <h3 className="book-translator">نام مترجم</h3>
              <p className="book-score">
                <i className="fas fa-star"></i>
                4.9
              </p>
              <span className="book-price">99,500 تومان</span>
            </div>
            <div className="book-card">
              <div className="book-image"></div>
              <h1 className="book-name">نام کتاب</h1>
              <h3 className="book-writer">نام نویسنده</h3>
              <h3 className="book-translator">نام مترجم</h3>
              <p className="book-score">
                <i className="fas fa-star"></i>
                4.9
              </p>
              <span className="book-price">کلیه سمت راست</span>
            </div>
            <div className="book-card">
              <div className="book-image"></div>
              <h1 className="book-name">نام کتاب</h1>
              <h3 className="book-writer">نام نویسنده</h3>
              <h3 className="book-translator">نام مترجم</h3>
              <p className="book-score">
                <i className="fas fa-star"></i>
                4.9
              </p>
              <span className="book-price">مجانی</span>
            </div>
            <div className="book-card">
              <div className="book-image"></div>
              <h1 className="book-name">نام کتاب</h1>
              <h3 className="book-writer">نام نویسنده</h3>
              <h3 className="book-translator">نام مترجم</h3>
              <p className="book-score">
                <i className="fas fa-star"></i>
                4.9
              </p>
              <span className="book-price">خداتومن</span>
            </div>
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
      </main>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Footer />}>
            <Route path="Konkor" element={<Konkor />}></Route>
            <Route path="Os" element={<Os />}></Route>
            <Route path="University" element={<University />}></Route>
            <Route path="Books" element={<Book />}></Route>
            <Route path="About" element={<About />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
