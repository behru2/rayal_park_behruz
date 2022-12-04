import React from 'react'
import './App.css';
import Header from './components/Header/Header';
import Large from './components/Large/Large';
import Footer from './components/Footer/Footer';
import Cards from './components/Card/Card';
import Book from './pages/Book/Book'
import MainPage from './Mainpage'
import 'react-calendar/dist/Calendar.css';


import { routes } from "./routes/routes";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login/Login';
import Navbar from './components/Navbar/Navbar'
//  
import Register from './pages/Register/Register'


function App() {
  // const displayRoutes = () =>
  // routes.map((e) => <Route path={e.path} element={e.element} />);
  return (
    
  <div className='parent'>
    
    
  
       <Navbar />
        {/* <Header  />   */}
         {/* <Large/> 
        <Footer />   
        <RegForm />   */}
       
        <Routes>
        {/* <Route path to ='/home' element={<Header/>} /> */}
          <Route  path='/Register' element={<Register />} />
          <Route  path='/book' element={<Book />} />
          <Route  path='/' element={<MainPage/>}/>
          <Route path='/Login' element = {<Login />} />
          

         
        
      
      </Routes>
  </div>
  );
}


export default App;
