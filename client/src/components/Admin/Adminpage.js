import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router,withRouter, Switch, Route } from 'react-router-dom';
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
import Calender from "./Calendar/Calendar";



function Adminpage() {
  
  return(

    <>
      <Router>
      
      
        <Switch>

        
          <Route exact path='/admin/' component={Home} />
          <Route  path='/admin/performance' component={Performance} />
          <Route  path='/adminr/payroll' component={Payroll} />
          <Route  path='/admin/leaves' component={Leaves} />
          <Route  path='/admin/timesheet' component={Calender} />
          <Route  path='/admin/candidate' component={Candidate} />
          <Route  path='/admin/scandidate' component={scandidate} />
          <Route  path='/admin/add/:id' component={Add} />
		  <Route  path='/admin/viewcandidate/:id' render={(props) => <Viewcandidate {...props} />}  />


        </Switch>
      </Router>
    </>
  );
  


}


export default Adminpage;
