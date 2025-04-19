import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";
import { useHistory, Link } from 'react-router-dom';
import { Button } from 'reactstrap';


export default function Add(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 950,
    },
  });
  const [cid, setcId] = useState("");
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
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
  const [lcount, setLcount] = useState(0);



  let history = useHistory();
  const Goback = () => { history.push('/manager/candidate') };

  useEffect(() => {
    const { id } = props.match.params;
    Axios.get(`http://localhost:3001/getcan/${id}`, {
    }).then((response) => {
      let candidate = response.data[0];

      setcId(candidate.id);
      setName(candidate.candidate_name);
      setLname(candidate.candidate_lname);
      setGender(candidate.candidate_gender);
      setPhone(candidate.candidate_phone);
      setAddr(candidate.candidate_addr);
      setEmail(candidate.candidate_email);
      setQuali(candidate.candidate_qualification);



    })},[]);
  const add = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:3001/addemployee`, {
      id: cid,
      name: name,
      lname:lname,
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
      lcount:lcount
    }).then((response) => {
      if(response.data.message)
      {
        alert(response.data.message)
        history.push('/manager/scandidate')
      }
      else
      {
        alert("Somthing went wrong")
      }

    })
  };

  //getcandidate();

  const classes = useStyles();

  return (

    <div>
      
      
      <div className="table-container">
        <div className="table-header">Employee Form</div><br />
        <div className="button_container">
        <Button className="back"type="button" tag={Link} to={"/manager/candidate"}>Go back</Button>
        </div>
        <form onSubmit={add}>
        <table className="tables-container">
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
                setSalary(e.target.value);}} required />
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
                setRole(e.target.value);}} required/>
            </td>
          </tr>
          <tr >
            <th>Short roll discription</th>
            <td>
            <textarea className="form-input2" name="w3review" onChange={(e) => {
                setDescription(e.target.value);}} />
            </td>
            <th>Working Hours per week</th>
            <td>
            <input className="form-input2" type="text" name="payroll" onChange={(e) => {
                setWhpw(e.target.value);}} />
            </td>
          </tr>
          <tr >
            <th>Total leave per year</th>
            <td>
              <input className="form-input2" type="number" name="lcount" onChange={(e) => {
                setLcount(e.target.value);}} />
            </td>
         
            
            
          </tr>
          
        </table>
        <div className="footer">
            <button type="submit" className="btn2"  >Add employee</button>

          </div>
        </form>
      </div>
    </div>








  );
}

//onClick={add}





