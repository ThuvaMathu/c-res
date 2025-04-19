import React from 'react';
import { Link } from 'react-router-dom';
import Axios from "axios";
import { useHistory } from 'react-router-dom';
import '../Stylesheet/styles.css'
import { Header } from '../login/header';

function Applyresult() {
    
    const history = useHistory();
    
    let logout = () => {
      Axios.get("http://localhost:3001/logout").then((response) => {
        if (response.data.loggedIn === false) {
          window.location.reload();
          }});
          history.push('/apply');
    }
        return (
          <div>
            <div><Header/></div>
            <div className="base-container" >
            <br /> <br />
            <div className="content">
            <div className="form-group">
                        <h3>Thank you for applying to C-Res! Your application will now be reviewed and you will be contacted shortly.</h3><br /> <br />
                        <button type="submit" className="btn" onClick={logout} >  LogOut </button>
            </div>
                

            </div>
        </div>
        </div>
    )
}
export default Applyresult;