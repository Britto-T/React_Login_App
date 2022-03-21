import React from "react"
import "./Home.css"
import UserDetails from "./UserDetails";

const Login=()=>{
    return (
      <>
      <div className="fieldWrapper">
           <div><label>User Name</label></div>
           <div><input type="text" placeholder="User Name"/></div>
           <div><label>Phone Number</label></div>
           <div><input type="text" placeholder="Phone Number"/></div>
           <div><label>E-Mail</label></div>
           <div><input type="text" placeholder="E-Mail"/></div>
           <div><label>Zip Code</label></div>
           <div><input type="text" placeholder="Zip Code"/></div>
           <div>
              <button className="btnSubmit">Submit</button>
              <button className="btnReset">Reset</button>
           </div>
      </div>
      <UserDetails/>
      </>
     
    );
}

export default Login