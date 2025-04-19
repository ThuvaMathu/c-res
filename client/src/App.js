import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import {LoginPage, Forgetpass} from './components/login/index';
import Empmain from './components/EmpDash/empmain';
import  Candimain from './components/Candidate/candimain';
import Manager  from './components/Manager/manager';
//import {Performance,Payroll,Leaves,Timesheet,Home} from './components/EmpDash/pages/index'
import Main from './main';
import Register from './components/Candidate/register';
import Adddoc from './components/Candidate/adddoc';
import Demo from './demosample';
import Demo2 from './demosample2';
import Adminpage from './components/Admin/Adminpage';
import { Verify } from './components/login/verifi';
import { Resetpass } from './components/login/resetpass';
class App extends Component {
render() {
  

    return (
      
      <Router>
        <div>
          <Switch>

            
              <Route exact path='/' component={LoginPage} />
              <Route path='/login' component={LoginPage} />
              <Route path='/apply' component={Candimain} />
              <Route path='/emp' component={Empmain} />
              <Route path='/forgotpass' component={Forgetpass} />
              <Route path = '/manager' component={Manager} />
              <Route path = '/admin' component={Adminpage} />
              <Route path = '/demo' component={Demo} />
              <Route path = '/demo2' component={Demo2} />
              <Route  path='/verify/:email' render={(props) => <Verify {...props} />}  />
              <Route  path='/resetpass/:email' render={(props) => <Resetpass {...props} />}  />

              
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
//<Route exact path='/login' component={LoginPage} />
//<Route path='/result' component={Jopresult} />
//<Route exact path='/emp' component={Empmain} />
//<Route exact path='/h' component={Main} />
