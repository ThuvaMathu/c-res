import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import './Admin.css';
function Home() {
  const history = useHistory();
  const [loginStatus, setLoginStatus] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].email);
       

      }
    });
  }, []);
  
    

  return (
    
      <div>
    <div><Navbar /></div>
    
    <div class='home'>
      
      <h1><br/><br/><br/><br/>HI&nbsp;&nbsp;&nbsp;{loginStatus}</h1>
      </div> 
      </div>

   
    
  );
}

export default Home;