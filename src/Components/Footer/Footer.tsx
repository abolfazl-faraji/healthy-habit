import './Footer.css';
import { Outlet, Link } from "react-router-dom";
import React from 'react';

export default function Footer(){

    return(
        <>
            <footer>
                <div id='ft-main'>
                    <div id='ft-sc'>
                        <div id='ft-about'>
                            <h4>درباره ما</h4>
                            <span><img src={require("../../img/logo-n.png")} alt="Irandaneshkade" /></span>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز.</p>
                        </div>
                        <div id='ft-im'>
                            <h4>دسترسی سریع</h4>
                            <Link to="/">خانه</Link>
                            <Link to="/">کنکور</Link>
                            <Link to="/">اساتید</Link>
                            <Link to="/">کتاب</Link>
                        </div>
                        <div id='ft-uf'>
                            <h4>لینک های مفید</h4>
                            <Link to="/">تراز کنکور</Link>
                            <Link to="/">برترین استاید</Link>
                            <Link to="/">رتبه بندی دانشگاه</Link>
                            <Link to="/">کتاب های مرجع</Link>
                        </div>
                        <div id='ft-sm'>
                            <h4>با ما در ارتباط باشید</h4>
                            <p>ما 24 ساعت شبانه روز آنلاین هستیم. از طریق تلگرام و اینستاگرام، پاسخگوی پیام‌های شما هستیم. برای دریافت و کسب اطلاعات بیشتر بصورت متن یا صوت از این دو طریق با ما در ارتباط باشید.</p>
                            <div id='ft-icn'>
                                <span className='ft-icn'><Link to="/"><img src={require("../../img/icons-instagram.png")} alt="" /></Link></span>
                                <span className='ft-icn'><Link to="/"><img src={require("../../img/icons-telegram.png")} alt="" /></Link></span>
                                <span className='ft-icn'><Link to="/"><img src={require("../../img/icons-twitter.png")} alt="" /></Link></span>
                                <span className='ft-icn'><Link to="/"><img src={require("../../img/icons-linkedin.png")} alt="" /></Link></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id='ft-cr'>
                    <div>
                            <p>COPYRIGHT © 2024 IranDaneshkade , تمامی حقوق برای IranDaneshkade محفوظ است</p>
                    </div>
                </div>
            </footer>

            <Outlet />
        </>
    );
}