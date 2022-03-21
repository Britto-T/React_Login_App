import react from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Home.css";

const UserDetails = () => {
  const [studentDetails, setStudentDetails] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        setStudentDetails(response.data);
        console.log(response.data.length);
      })
      .catch((error: any) => {});
     
    },[]);

  const counterHandler=(event:any)=>{
        console.log(event.target.value)
        studentDetails.filter((item, index) => index < 5).map((filteredItem) => {
          setStudentDetails(studentDetails);
          console.log(studentDetails);
        })
  }

  return (
    <>
    <div className="divCount">
        <div className="count">
        <label>Count :</label>
        <input type="text" onChange={counterHandler}></input>
        </div>
    </div>
    <div className="divSection">
      {studentDetails.map((item: any, key: any) => [
        <div className="section" key={key}>
          <div>Name : {item.name}</div>
          <div>Phone Number :{item.phone}</div>
          <div>E-Mail : {item.email}</div>
          <div>Zip Code : {item.address.zipcode}</div>
        </div>
      ])}
    </div>
    </>
  );
};

export default UserDetails;
