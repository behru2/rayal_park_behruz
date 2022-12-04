import React from 'react'
import s from './Login.module.css'
import { NavLink, Route, Routes, useLocation, Link } from "react-router-dom";

const Login = () => {
  return (
    <>
  
    <div>
    
        <div className={s.container}>
        
            <div className={s.forms}>
                <div className={s.form_login}>
               
                    <span className={s.title}>Log in</span>
                    <Link to='/Login'>
                    <form action='#'>
                        <div className={s.input_field}>
                            <input type="text" placeholder='Enter your email' required className={s.input}/>
                            <i class="uil uil-envelope-alt"></i>
                        </div>
                        <div className={s.input_field1}>
                            <input type="text" placeholder='Enter your password' required className={s.input}/>
                            <i class="uil uil-envelope-alt"></i>
                        </div>
                        <div className={s.input_field2}>
                            <input type="password" placeholder='Confirm your password' required className={s.input}/>
                            <i class="uil uil-envelope-alt"></i>
                        </div>
                    </form>
                    </Link> 
                    <div className={s.btn_prnt}>
                        <a href = '/Login'><p><button className={s.log_in}>Log in</button></p></a>
                    </div>
                    
                        
                        
                        
                    
        <div className={s.login_href}>Don't have an account?<a className={s.reg_link} href="/register">Sign up</a> </div>

                </div>
            </div>
            
        </div>
        
    </div>

{/* <div className={s.reg_link}></div> <a className={s.reg_link_link} href="/Login"><div> Log in </div></a> */}


</>
  )
}

export default Login