import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import { withRouter } from "react-router";
import Payroll from './pages/Payroll';
import Leaves from './pages/Leaves';
import Timesheet from './pages/timesheet';
import Axios from "axios";
import Account from './pages/account';


function Empmain() {
  
  let [id, setId] = useState(1);
  const [empdata, setEmpdata] = useState([]);
  const[bleave, setBleave] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setId(response.data.user[0].id);
        
        }
    });
  }, []);


   
  return (
    <>
    
      <Router>
      
      <Navbar />
        <Switch>
        
          <Route exact path='/emp/home' ><Home empid={id}/></Route>
          <Route  path='/emp/account/:id' render={(props) => <Account {...props} />}  />
          <Route  path='/emp/leaves/' component={Leaves} ><Leaves  /> </Route>
          <Route  exact path='/emp/timesheet/'><Timesheet message={id}/></Route>
          <Route  exact path='/emp/payroll/'><Payroll message={id}/></Route>
          
        </Switch>
      </Router>
    </>
  );
}

export default Empmain;
//<Route  path='/manager/payroll/:id' render={(props) => <Payroll {...props} />}  />
//<Route  path='/emp/payroll/' component={Payroll} />