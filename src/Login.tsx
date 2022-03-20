import React from "react"
import "./Home.css"

const Login=()=>{
    return (
      <div className="fieldWrapper">
           <label>User Name</label>
           <input type="text"/>
           <label>Phone Number</label>
           <input type="text"/>
           <label>E-Mail</label>
           <input type="text"/>
           <label>Zip Code</label>
           <input type="text"/>
           <button className="btnSubmit">Submit</button>
      </div>
    );
}

export default Login