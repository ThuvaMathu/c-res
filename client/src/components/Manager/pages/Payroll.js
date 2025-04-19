import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory, Link } from 'react-router-dom';



const Payroll = (props) => {
  let [empdata, setEmpdata] = useState([]);
  const [empID, setEmpId] = useState("");
  const [standard_salary, setStandardSalary] = useState("");
  const [deduction, setDeduction] = useState("");
  const [benefit, setBenefit] = useState("");
  let history = useHistory();
  useEffect(() => {
    const { id } = props.match.params;
    Axios.get(`http://localhost:3001/getemp/${id}`).then((response) => {
      setEmpdata(response.data[0]);
      
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    let total = parseInt(standard_salary) - parseInt(deduction);
   // total = total - parseInt(benefit);
    //total.toString();
    //console.log(total);
    Axios.post("http://localhost:3001/generate", {
      empID: empdata.id,
      salary: empdata.st_salary,
      deduction: deduction,
      benefit: benefit,
      //total: total,
    }).then((response) => {
      if (response.data.message) {
        alert("response.data.message");
        history.push('/manager/employee')
      } else {
        alert("Something went wrong.");
      }
    });
  };


  return (
    <div>
      <div className="shedule-outer">
        <h2>Payslip</h2>
        <div className="payrol-form">
          <h3>Employee Details</h3>
          <table className="table-inside">
            <tr>
              <th>Employee Id</th>
              <th>Name</th>
            </tr>
            <tr>
              <td>{empdata.id}</td>
              <td>{empdata.name}</td>
            </tr>
            <tr>
              <th>Email</th>
              <th>Standard salary</th>
            </tr>
            <tr>
              <td>{empdata.email}</td>
              <td>{empdata.st_salary}</td>
            </tr>
          </table>
        </div>
        <div className="payrol-form">
          <form onSubmit={handleSubmit}>
          <table className="table-inside">
            <tr>
              <th>
                <label htmlFor="empID">Deduction</label>
              </th>
              <th>
                <label htmlFor="email">Benefit</label>
              </th>
            </tr>
            <tr>
              <td>
                <input className="form-input2" type="text" name="deduction" placeholder="Deduction"
                  onChange={(e) => { setDeduction(e.target.value); }} required />
              </td>
              <td>
                <input className="form-input2" type="text" name="benefit" placeholder="Benefit"
                  onChange={(e) => { setBenefit(e.target.value); }} required />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit" className="btn2" >Create Payslip</button>{" "}
                <button type="reset" className="view">Reset</button>{" "}
               </td>
               <td>
               <Link className="back" to="/manager/employee">back</Link>
               </td>
            </tr>
          </table>
          </form>
        </div>
      </div>

    </div>
  );
}

export default Payroll;

/*<div><Navbar /></div>
      <div className='manager'>
        <h1>Payroll</h1>
      </div>
      <div className="main-container">
        <div className="func-container">
        <div className="form">

        <Form>
      <div className="form-box">
        <div className="form-group">
          <label htmlFor="empID">Employee ID</label>
          <input className="form-input" type="text" name="empID" value = {empID}placeholder="Employee ID"
          onChange={(e) => { setEmpId(e.target.value); }} required />
          <label htmlFor="standard-salary">Standard Salary</label>
          <input className="form-input" type="text" name="standard-salary" value={standard_salary} placeholder="Standard Salary"
          onChange={(e) => { setStandardSalary(e.target.value); }} required />
        </div>
        <div className="form-group">
        <label htmlFor="empID">Deduction</label>
          <input className="form-input" type="text" name="deduction" value = {deduction}placeholder="Deduction"
          onChange={(e) => { setDeduction(e.target.value); }} required />
          <label htmlFor="email">Benefit</label>
          <input className="form-input" type="text" name="benefit" value={benefit} placeholder="Benefit"
          onChange={(e) => { setBenefit(e.target.value); }} required />
        </div>
      </div>

        <div className="button-box">
        <button onClick={handleSubmit}>Create A Payroll</button>
        </div>
    </Form>
        </div>
    </div>
        <div className="box">
          <BasicTable></BasicTable>
        </div>*/