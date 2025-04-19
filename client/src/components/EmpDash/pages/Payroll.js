import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Payroll(props) {
  Axios.defaults.withCredentials = true;
  const [paydata, setPaydata] = useState([])
  const [empdata, setEmpdata] = useState([]);
  const id = props.message;

  useEffect(() => {
    Axios.post(`http://localhost:3001/getpayroll`, {
      id: id,
    }).then((response) => {
      setPaydata(response.data);

    });
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setEmpdata(response.data.user[0]);


      }
    });
  }, []);



  //
  return (

    <div>
      <h1>Payroll Statement</h1>
      <div className="shedule-outer ">
        <div className="pay-container">



          {
            paydata.map((datas) => (
              <div className="content-pading">
                <div className="date">
                  <p><span className="span_content">Date: </span>{datas.date}</p>
                </div>
                <p><span className="span_content">Employee Id: </span> {datas.emp_id}</p>
                <p><span className="span_content">Employee Email: </span> {empdata.email}</p>
                <p><span className="span_content">Roll: </span> {empdata.role}</p>
                <p><span className="span_content">Standard Salary: </span> {datas.st_salary}</p>
                <p><span className="span_content">Benefit: </span> {datas.benefit}</p>
                <p><span className="span_content">Deduction: </span>{datas.deduction}</p>
                <p><span className="span_content">Total Earning: </span>{datas.total}</p>
                <p><span>{datas.content}</span></p>
                <hr></hr>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

/*

{
          paydata.map((datas) => (
            <div className="content-pading">
              <p><span className="span_content">Date: </span>{datas.date}</p>
              <p><span className="span_content">Employee Id: </span> {datas.emp_id}</p>
              <p><span className="span_content">Standard Salary: </span> {datas.st_salary}</p>
              <p><span className="span_content">Benefit: </span> {datas.benefit}</p>
              <p><span className="span_content">Deduction: </span>{datas.deduction}</p>
              <p><span className="span_content">Total Earning: </span>{datas.total}</p>
              <p><span>{datas.content}</span></p>
              <hr></hr>
            </div>
          ))
        }

        */