import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Cards.module.css'

const Cards = () => {
  return (
    <NavLink to="/cards">  
     <div className={s.card}>
    <div className={s.img}></div>
    <div className={s.title}></div>
          </div>
          </NavLink>
   
    
  )
}

export default Cards