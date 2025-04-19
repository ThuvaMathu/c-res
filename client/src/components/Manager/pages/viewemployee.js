import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";
import { useHistory, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


export default function Viewemployee(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 950,
    },
  });
  const [cid, setcId] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [addr, setAddr] = useState("");
  const [phone, setPhone] = useState("");
  const [quali, setQuali] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [department, setDepartment] = useState("");
  const [description, setDescription] = useState("");

  let history = useHistory();
  const Goback = () => { history.push('/manager/employee') };




  const getcandidate = () => {
    const { id } = props.match.params;
    Axios.get(`http://localhost:3001/getemp/${id}`, {
    }).then((response) => {
      let employee = response.data[0];

      setcId(employee.id);
      setName(employee.name);
      setGender(employee.gender);
      setPhone(employee.phone);
      setAddr(employee.address);
      setEmail(employee.email);
      setQuali(employee.qualification);
      setRole(employee.em_role);
      setDepartment(employee.department);
      setDescription(employee.description);



    })
  };
  const fire = () => {
    Axios.post(`http://localhost:3001/deleteemp`, {
      id: cid
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message)
        history.push('/manager/employee')
      }
      else {
        alert("Somthing went wrong")
      }

    })
  };

  getcandidate();

  const classes = useStyles();

  return (

    <div>

      <div className="table-header2">Employee Name: {name}</div><br />

      <div className="button_container">
        <Button className="view" tag={Link} to={"/manager/editemployee/" + cid} >Edit</Button>{"      "}
       
        <Button className="btn2" tag={Link} to={"/manager/payroll/" + cid}>Create payroll</Button>{"      "}
        <Popup trigger={<button classname=""> Fire</button>} >
          <div>
            <div>
              <p> Are you sure!</p> 
              
            <button className="back" onClick={fire} >Fire</button>
            </div>
          </div>
        </Popup>

      </div>
      <div className="table-container">


        <table className="tables">
          <tr >
            <th>Employee ID  </th>
            <td>{cid}</td>
          </tr>
          <tr >
            <th>Employee Gender </th>
            <td>{gender}</td>
          </tr>
          <tr >
            <th>Employee Email </th>
            <td>{email}</td>
          </tr>
          <tr >
            <th>Employee Address</th>
            <td>{addr}</td>
          </tr>
          <tr >
            <th>Employee Phone </th>
            <td>{phone}</td>
          </tr>
          <tr >
            <th>Employee Qualification</th>
            <td>{quali}</td>
          </tr>
          <tr >
            <th>Employee Role </th>
            <td>{role}</td>
          </tr>
          <tr >
            <th>Employee Department </th>
            <td>{department}</td>
          </tr>
          <tr >
            <th>Role Description  </th>
            <td>{description}</td>
          </tr>


        </table>
        <div className="footer">

          <Button className="back" tag={Link} to={"/manager/employee"}>Go back</Button>
        </div>


      </div>
    </div>








  );
}







