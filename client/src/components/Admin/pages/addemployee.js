import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "axios";
import Navbar from '../components/Navbar';
import { useHistory, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { BsConeStriped } from 'react-icons/bs';

export default function Add(props) {
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
  const [salary, setSalary] = useState("");
  const [department, setDepartment] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");
  const [whpw, setWhpw] = useState("");



  let history = useHistory();
  const Goback = () => { history.push('/manager/candidate') };

  const getcandidate = () => {
    const { id } = props.match.params;
    Axios.get(`http://localhost:3001/getcan/${id}`, {
    }).then((response) => {
      let candidate = response.data[0];

      setcId(candidate.id);
      setName(candidate.candidate_name);
      setGender(candidate.candidate_gender);
      setPhone(candidate.candidate_phone);
      setAddr(candidate.candidate_addr);
      setEmail(candidate.candidate_email);
      setQuali(candidate.candidate_qualification);



    })
  };
  const add = () => {
    Axios.post(`http://localhost:3001/addemployee`, {
      id: cid,
      name: name,
      gender: gender,
      phone: phone,
      email: email,
      addr:addr,
      quali: quali,
      salary: salary,
      role: role,
      department: department,
      description: description,
      whpw : whpw,
    }).then((response) => {
      if(response.data.message)
      {
        alert(response.data.message)
      }
      else
      {
        alert("Somthing went wrong")
      }

    })
  };

  getcandidate();

  const classes = useStyles();

  return (

    <div>
      <div><Navbar /></div>
      
      <div className="table-container">
        <div className="table-header">Employee Form</div><br />
        <table className="tables">
        <tr >
            <th>Cadidate Name  </th>
            <td>{name}</td>
          
            <th>Cadidate ID  </th>
            <td>{cid}</td>
          </tr>
          <tr >
            <th>Cadidate Gender </th>
            <td>{gender}</td>
          
            <th>Cadidate Email </th>
            <td>{email}</td>
          </tr>
          <tr >
            <th>Cadidate Address</th>
            <td>{addr}</td>
          
            <th>Cadidate Phone </th>
            <td>{phone}</td>
          </tr>
          <tr >
            <th>Cadidate Qualification</th>
            <td>{quali}</td>
          
            <th>Standard salary </th>
            <td>
              <input className="form-input2" type="text" name="payroll" onChange={(e) => {
                setSalary(e.target.value);}} />
            </td>
          </tr>
          <tr >
            <th>Department</th>
            <td>
              <input className="form-input2" type="text" name="payroll" onChange={(e) => {
                setDepartment(e.target.value);}} />
            </td>
         
            <th>Employee roll</th>
            <td>
              <input className="form-input2" type="text" name="payroll" onChange={(e) => {
                setRole(e.target.value);}} />
            </td>
          </tr>
          <tr >
            <th>Short roll discription</th>
            <td>
            <textarea className="form-input2" name="w3review" rows="8" cols="50" onChange={(e) => {
                setDescription(e.target.value);}} />
            </td>
            <th>Working Hours per week</th>
            <td>
            <input className="form-input2" type="text" name="payroll" onChange={(e) => {
                setWhpw(e.target.value);}} />
            </td>
          </tr>
        </table>
        <div className="footer">
        
          <Button type="button" tag={Link} to={"/manager/candidate"}>Go back</Button>
        </div>
        <div className="footer">
          <Button className="tablebtn" onClick={add} >add employee</Button>

        </div>

      </div>
    </div>








  );
}







