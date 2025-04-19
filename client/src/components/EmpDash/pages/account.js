import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'reactstrap';
import { Container, Row, Col } from 'react-bootstrap';


export default function Account(props) {
  Axios.defaults.withCredentials = true;
  const [showText, setShowText] = useState(false);
  const [empdata, setEmpdata] = useState([]);
  const history = useHistory();
  const [userdata, setUserdata] = useState([]);
  const [current, setCurrent] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setconfirm] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setUserdata(response.data.user[0]);

      }
    });
  }, []);
  useEffect(() => {
    const { id } = props.match.params;
    Axios.get(`http://localhost:3001/getemp/${id}`).then((response) => {
      setEmpdata(response.data[0]);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`http://localhost:3001/changepass`, {
      id:empdata.id,
    current: current,
    password:password,
    confirm: confirm,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message)

      }
      else {
        alert("password successfully changed")
      }
    })
  };


  return (
    <div>
      <h1>Account</h1>
      <div class="mhome-outer">

        
        <div className=" einner-col">
          <table className="table-w100">
            <tr>
              <td><span className="span-t">Employee Id: </span>{userdata.id}</td>
              <td><span className="span-t">Email: </span>{userdata.email}</td>
            </tr>
            <tr>
              <td><span className="span-t">Name: </span>{empdata.name + " " + empdata.lname}</td>
              <td><span className="span-t">Desingnation: </span>{userdata.role}</td>
            </tr>
            <tr>
              <td><span className="span-t">Department: </span>{empdata.department}</td>
              <td><span className="span-t">Phone Number: </span>{empdata.phone}</td>
            </tr>
          </table>

        </div>
        <div className="EAbutton">
          <button className="view" type="button" onClick={() => setShowText(!showText)}>{showText? 'cancel' : 'Change password'}</button>
        </div>
        {showText && <div>
          <div className="form">
          <div class="einner2-col">
            <h2>Change Password</h2>
            <div className="form-group">
              <label htmlFor="email">Current Paswword</label>
              <input className="form-input" type="password" name="email" placeholder="Current password" onChange={(e) => {
                setCurrent(e.target.value);
              }} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">New Password</label>
              <input className="form-input" type="password" name="password" placeholder="New password" onChange={(e) => {
                setPassword(e.target.value);
              }} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Confirm New Password</label>
              <input className="form-input" type="password" name="password" placeholder="Confirm password" onChange={(e) => {
                setconfirm(e.target.value);
              }} required />
            </div>
         
          <div className="footer">
            <button type="submit" className="btn2" onClick={handleSubmit} >submit</button>{" "}
            <button className="back" type="button" onClick={() => setShowText(!showText)}>cancel</button>
            </div>
          </div>
          </div>
        </div>}
      </div>

    </div>
  );
}


//onClick = {logout}