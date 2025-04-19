import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Performance from './pages/Performance';
import Payroll from './pages/Payroll';
import Leaves from './pages/Leaves';
import Timesheet from './pages/timesheet';
import Employee from './pages/Employee';
import Candidate from './pages/candidate';
import Viewcandidate from './pages/viewcandidate'
import scandidate from './pages/selected_candidate.js';
import Add from "./pages/addemployee";
import '../Stylesheet/manager.css'
import Viewemployee from "./pages/viewemployee";
import Employeeedit from './pages/editemployee2'
import Navbar from './components/Navbar';
import Viewleave from "./pages/viewleave";
import Shedule from "./pages/Shedule";
import Account from "./pages/account";

//var rando = require('random-number-in-range');

function Manager() {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  let [loginStatus, setLoginStatus] = useState("");
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setLoginStatus("true");
       

      }
    });
  }, []);
if(loginStatus === "true"){
  return (
    <>
      <Router>
      
      <div><Navbar /></div>
        <Switch>

        
          <Route exact path='/manager/home' component={Home} />
          <Route  path='/manager/performance' component={Performance} />
          <Route  path='/manager/account' component={Account} />
          <Route  path='/manager/leaves' component={Leaves} />
          <Route  path='/manager/timesheet' component={Timesheet} />
          <Route  path='/manager/candidate' component={Candidate} />
          <Route  path='/manager/scandidate' component={scandidate} />
          <Route  path='/manager/add/:id' component={Add} />
          <Route  path='/manager/employee' component={Employee} />
          <Route  path='/manager/editemployee/:id' component={Employeeedit} />
          <Route  path='/manager/viewcandidate/:id' render={(props) => <Viewcandidate {...props} />}  />
          <Route  path='/manager/viewemployee/:id' render={(props) => <Viewemployee {...props} />}  />
          <Route  path='/manager/shedule/:id' render={(props) => <Shedule {...props} />}  />
          <Route  path='/manager/viewleave/:id' render={(props) => <Viewleave {...props} />}  />
          <Route  path='/manager/payroll/:id' render={(props) => <Payroll {...props} />}  />



        </Switch>
      </Router>
    </>
  );
}//component={Viewcandidate}
else{
  return(
    <h5>error loading...</h5>
  )
}
}
export default Manager;
//response.data.user[0].user