import React from "react";
import s from "./Header.module.css";
import image from "../img/1.jpg";
import logo from "../img/a.svg";
import rectangle from "../img/4.svg";
import line from "../img/2.svg";
import { Fade } from "react-reveal";

// import * as ReactDOM from "react-dom";
// import { HashLink } from 'react-router-hash-link'
import { NavLink, Route, Routes, useLocation, Link } from "react-router-dom";



const Header = () => {

//   const [visible, setVisible] = useState(false)
 
//   const [placement, setPlacement] = useState('right');

// const showDrawer = () =>{
//   setVisible(true)
// }

// const onChange = (e) => {
//   setPlacement(e.target.value)
// }

// const onClose = () => {
//   setVisible(false);
// };





  return (
    
    <div className={s.header}>
      <div className={s.uzb_img}>
        <img src={image} alt="" />

        
        

      {/* <div className={s.menu_icon} onClick={showDrawer}>
        <span/>
        <span/>
        <span/>
      </div>

        <Drawer title="Rayal Park" placement="right" onClose={onClose} visible={visible} width={"100%"}>
        <div className={s.nav_box}>
          <div className={s.logo_container}>
            <img src={logo} alt="" />
            <div className={s.name}>Rayal Park</div>
          </div>

          <div className={s.nav}>Home</div>

          <div className={s.nav}>Features</div>

          <a href="#features">
            <div className={s.nav}>Gallery</div>
          </a>
          <div className={s.nav}>Testominials</div>
        </div>
        <div>
          <button className={s.book}>Book now</button>
        </div>
        </Drawer> */}

        <div className={s.title_container}>
          <Fade top>
            <div className={s.title}>SERENITY</div>
            <div className={s.title_large}>
              Stay with us feel like <span className={s.blue}>home.</span>
            </div>
          </Fade>
          <Fade left>
            <div className={s.title_small}>
              Pet-friendly hotels are becoming increasingly popular; appealing
              to travellers who can't bear to be parted.
            </div>
          </Fade>
          <div>
            <Fade>
              <button className={s.read_more}>Read more</button>
            </Fade>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Header;
