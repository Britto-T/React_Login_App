import React from "react";
import "./Home.css";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const Login = () => {
  const [studentDetails, setStudentDetails] = useState<any>([]);
  const [limiter, setLimiter] = useState(0);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function fetchStudentData(data:any,limit:any){
    const studentData: any = [];
      data.slice(0,limit).map((item: any) => {    
        studentData.push({"name":item?.name,"phone":item?.phone,"email":item?.email,"zipcode":item?.address?.zipcode})
      });
    return studentData;
  }

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response: any) => {
        const studentData = fetchStudentData(response.data,response.data.length)
        setStudentDetails(studentData);
        setLimiter(studentData.length);
      })
      .catch((error: any) => {
        alert(error);
      });
      setValue("name","Britto")
  }, []);

  const onFormSubmit = (data: any) => {
    setStudentDetails([
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        zipcode: data.zipcode,
      },
      ...studentDetails
    ]);
  };

  const ChangeLimit=(event:any)=>{
    //setLimiter(event.target.value);
    axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response: any) => {
      const studentData = fetchStudentData(response.data,event.target.value)
      setStudentDetails(studentData);
      setLimiter(studentData.length);
    })
    .catch((error: any) => {
      alert(error);
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)}>
        <div className="fieldWrapper">
          <div>
            <label>Student Name</label>
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
            <button type="reset" className="btnReset">Reset</button>
          </div>
        </div>
      </form>

      <div className="divCount">
        <div>
          <label>Count</label>
          <input type="text" onChange={ChangeLimit}></input>
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
