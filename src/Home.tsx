import React from "react"
import Login from "./Login"
import "./Home.css"

const Home = () => {
  return (
    <div className="container">
      <h2 className="headerLogin">React Login App</h2>
      <div className="wrapper">
        <Login />
      </div>
    </div>
  );
};

export default Home