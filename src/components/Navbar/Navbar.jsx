import React from 'react'
import { a, Route, Routes, useLocation, Link } from "react-router-dom";
import s from '../Navbar/Navbar.module.css'

import logo from '../img/Group 279.svg'

const Navbar = () => {
  return (
    <div className={s.nav_box2}>
    <div>
        <div className={s.nav_box}>
          
          <div className={s.nav}>
            <img src={logo} alt=""  className={s.logo_container}/>
            
          </div>
      

    <a href='/'>
    
              <div className={s.nav}>Home</div>
              
    </a>
    <a href='/features'>
    
              <div className={s.nav}>Features</div>
    
    
    </a>            <a href="/gallery">
            
              <div className={s.nav}>Gallery</div>
            
            </a>
           <a href = '/testominials'> <div className={s.nav}>Testominials</div></a>
    <a href='/Register'>
    
              <div className={s.nav}>Log in</div>
    </a>

  
  <div> 
         <a href='/book'> <button  className={s.book}>Book now</button></a>
        </div>
        </div>
</div>
    </div>
 
  )
}

export default Navbar