import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Adddoc from './adddoc';
import Candilog from './candidatelogin';
import Register from './register';

import Applyresult from './applyresult';

function Candimain() {
    return (
        <>
            <Router>


                <Switch>

                    
                    <Route  path='/apply/' exat = {true} component={Candilog} />
                    <Route  path='/addoc' component={Adddoc} />
                    <Route path = '/register' component ={Register} />
                    <Route  path='/result' component={Applyresult} />
                    
                  
                </Switch>
            </Router>
        </>
    );
}

export default Candimain;