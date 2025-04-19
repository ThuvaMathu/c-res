import React, { useEffect, useState, } from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import Manager from './components/Manager/manager';
import Adminpage from './components/Admin/Adminpage';
import Empmain from './components/EmpDash/empmain';
//import Applyjop from './components/login/applyjop';
export default  function Main() {
  const [role, setRole] = useState("");
  const history = useHistory();
  Axios.defaults.withCredentials = true;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setRole(response.data.user[0].role);
        
        //history.push('/login');
      }else
      {
          setRole("login");
      }
      
    });
  }, []);

  return (
    <div>

      {role === "login" && <LoginPage />}
      {role === "employee" && <Empmain />}
      {role === "admin" && <Adminpage />}
      
    </div>
  );
}