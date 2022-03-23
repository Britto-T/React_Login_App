import React from "react"
import "./FlexNavBar.css"
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Home from "./Home"

const FlexNavBar=()=>{
    return(
        <React.Fragment>
    <header className="header">
		<h1 className="logo"><a href="#">Flexbox</a></h1>
        <BrowserRouter>
      <ul className="main-nav">
      <li>
        <Link to={"Student"}>Home</Link></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
      </ul>
      <Routes>
               <Route path={"Student"} element={<Home/>} />
            </Routes>
            </BrowserRouter>
	</header> 

        </React.Fragment>
    )
}

export default FlexNavBar