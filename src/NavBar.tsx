import React from "react";
import "./NavBar.css"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./Home"
import App from "./App";

const NavBar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
      <BrowserRouter>
      <ul >
          <li><Link to={"Student"}>Home</Link></li>
          <li><Link to={"NavBar"}>App</Link></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <Routes>
               <Route path={"Student"} element={<Home/>} />
               <Route path={"App"} element={<App/>} />
            </Routes>
            </BrowserRouter>
        <a href="#home">Home</a>
        <a href="#news">News</a>
        <div className="dropdown">
          <button className="dropbtn">
            Dropdown
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBar;
