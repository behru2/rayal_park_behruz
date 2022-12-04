import React from "react";
import { Fade, LightSpeed, Zoom } from "react-reveal";
import s from "./Footer.module.css";
import Cards from "../Card/Card";
import logo from "../img/a.svg";
import fcbk from "../img/fcbk.svg";
import insta from "../img/insta.svg";
import twtr from "../img/twtr.svg";
import ggl from "../img/ggl.svg";

const Footer = () => {
  return (
    
      <div className={s.footer_container_prnt}>
        <div className={s.footer_nav_container_a}>
          <div className={s.logo}>
            <img src={logo} alt="" srcset="" />
            <div className={s.txt}>Rayal Park</div>
          </div>
          <div className={s.ttl1}>
            Travel deals on hotels, flights, vacation packages.
          </div>
          <div className={s.email}>@shovasatkhira88.com</div>
    
          <div className={s.icons}>
            <a href="#">
              {" "}
              <div className={s.fcbk + " " + s.icons}>
                {" "}
                <img src={fcbk} alt="" />{" "}
              </div>
            </a>
            <a href="#">
              <div className={s.insta + " " + s.icons}>
                {" "}
                <img src={insta} alt="" />{" "}
              </div>
            </a>
            <a href="#">
              {" "}
              <div className={s.twtr + " " + s.icons}>
                {" "}
                <img src={twtr} alt="" srcset="" />{" "}
              </div>
            </a>
            <a href="#">
              <div className={s.ggl + " " + s.icons}>
                {" "}
                <img src={ggl} alt="" srcset="" />{" "}
              </div>
            </a>
          </div>
    
          <a href=""></a>
        </div>
        <div className={s.footer_nav_container_b}>
  <div className={s.nav_title_b} >
    Home
  </div>
  <ul className={s.nav_container_a}>
  <li className={s.nav_txt_a}>Accessibility</li>
  <li className={s.nav_txt_a}>Lertifiotion</li>
  <li className={s.nav_txt_a}>Knowledge</li>
  
  
  </ul>
  
        </div>
  
        <div className={s.footer_nav_container_с}>
  <div className={s.nav_title_с} >
    Pages
  </div>
  <ul className={s.nav_container_b}>
  <li className={s.nav_txt_a}>Blogs</li>
  
  <li className={s.nav_txt_a}>Careers</li>
  <li className={s.nav_txt_a}>Communing</li>
  
  
  </ul>
  
        </div>
        <div className={s.nav_title_d} >
    SUBSCRIBE
    <div className={s.input_prnt}>
      <input className={s.footer_input} type="text" placeholder='Enter your email address' />
    </div>
    <div className={s.input_btn_prnt}>
      <button className={s.input_btn}> Subscribe</button>
    </div>
  </div>
        
      </div>

  );
};

export default Footer;
