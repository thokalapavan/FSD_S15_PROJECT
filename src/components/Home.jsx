import React from 'react';
import './Home.css';
import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import Home1 from './Home1';
import Login from './Login';
import Registration from './Registration';


import Funcounter from './Funcounter';
import ResponsiveAppBar from './ResponsiveAppBar';
import Datafetch from './Datafetch';
import Photofetch from './Photofetch';
// import Header from './Header';

export const Home = () => {
  return (
    <div> 
      <div className="container">
        <div className="header">
        <ResponsiveAppBar/></div>
        <div className="lsd">Lsd</div>
        <div className="maincontent">
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Registration" element={<Registration />} />
            <Route path="/Counter" element={<Funcounter/>} />
            <Route path='/Datafetch' element={<Datafetch/>}/>
            <Route path='/Photofetch' element={<Photofetch/>
            }/>
          </Routes>
        </div>
        <div className="footer">Footer</div>
      </div>
    </div>
  );
};
