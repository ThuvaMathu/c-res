import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import Axios from "axios";

export function ManagerLogin() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  let [roles, setRoles] = useState("");
  let history = useHistory();
  let [loginStatus, setLoginStatus] = useState("");

  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/managerlogin").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].role);


        //history.push('/emp');
      }
    });
  }, []);

  let logout = () => {
    Axios.get("http://localhost:3001/logout").then((response) => {
      if (response.data.loggedIn === false) {
        
      }
    }); window.location.reload();
  }

  const gotodash = () => {
    if(loginStatus === "manager"){
      history.push('/manager/home');
    }
    else{
      history.push('/admin');
    }
    
    }

  const login = () => {
    Axios.post("http://localhost:3001/managerlogin", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        alert(response.data.message);
        window.location.reload();
      }
      else 
      {
        history.push('/manager/home');
      }
       
        

      });
    
  };


  if (loginStatus === "admin" ||loginStatus === "manager") {
    return (
      <div className="base-container" >
        <br /> <br />

        <div className="header">Manager Login</div>
        <div className="content">
          <div className="form">
            <h4> ** You already login **</h4>
          </div>
        </div>

        <div>
          <button type="submit" className="btn" onClick={gotodash} >Go to dashboard</button>
        </div>
        <div>
          <button type="submit" className="btn" onClick={logout} >logout</button>
        </div>

        <div>

        </div>
      </div>

    )
  }
  else {

    return (

      <div className="base-container" >
       <div className="header">Manager Login</div>
        <div className="content">
          <div className="form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input className="form-input" type="text" name="email" placeholder="email" onChange={(e) => {
                setemail(e.target.value);
              }} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input className="form-input" type="password" name="password" placeholder="password" onChange={(e) => {
                setPassword(e.target.value);
              }} required />
            </div>
          </div>

          <Link to="/forgotpass">Forgot your password?</Link>
          <Link to={'/apply'} className="nav-link">Apply for a job</Link>

        </div>
        <div className="footer23">
          <button type="submit" className="btn" onClick={login} >
            Login
                </button>

        </div>

        <div>

        </div>
      </div>
    )
  }

}
// <h3>{loginStatus}</h3>