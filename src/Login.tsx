import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const [studentDetails, setStudentDetails] = useState<any>([]);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        console.log(response.data);
        debugger;
        response.data.map((item: any, key: any) => {
          return(
            setStudentDetails([...studentDetails,{"name":item.name,"phone":item.phone,"email":item.email,"zipcode":item.address.zipcode}])
          );
        });
        console.log(studentDetails);
      })
      .catch((error: any) => {
        alert("Invalid User");
      });
  }, []);

  const onFormSubmit = (data: any) => {
    setStudentDetails([
      ...studentDetails,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        zipcode: data.zipcode,
      },
    ]);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="fieldWrapper">
          <div>
            <label>User Name</label>
          </div>
          <div>
            <input type="text" {...register("name")} placeholder="User Name" />
          </div>
          <div>
            <label>Phone Number</label>
          </div>
          <div>
            <input
              type="text"
              {...register("phone")}
              placeholder="Phone Number"
            />
          </div>
          <div>
            <label>E-Mail</label>
          </div>
          <div>
            <input type="text" {...register("email")} placeholder="E-Mail" />
          </div>
          <div>
            <label>Zip Code</label>
          </div>
          <div>
            <input
              type="text"
              {...register("zipcode")}
              placeholder="Zip Code"
            />
          </div>
          <div>
            <button className="btnSubmit">Submit</button>
            <button className="btnReset">Reset</button>
          </div>
        </div>
      </form>

      <div className="divCount">
        <div>
          <label>Count</label>
          <input type="text"></input>
        </div>
      </div>

      <div className="divSection">
        {studentDetails.map((item: any, key: any) => {
          return (
            <div className="section" key={key}>
              <div>Name : {item.name}</div>
              <div>Phone Number :{item.phone}</div>
              <div>E-Mail : {item.email}</div>
              <div>Zip Code : {item.zipcode}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Login;
