import React from 'react';
import { useState, useEffect } from "react";
//import './applyjop.css';
import '../Stylesheet/applyjop.css';
import Axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import { Header } from '../login/header';

export function Candilog() {

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        Axios.get("http://localhost:3001/candilogin").then((response) => {
            if (response.data.loggedIn === true) {
                history.push('/addoc');
            }
        });}, []);

    const login = () => {
        Axios.post("http://localhost:3001/candilogin", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message);
                window.location.reload();
            } else {
                history.push('/addoc')
                // window.location.reload();

            }
        });
    };

    

    return (
        <div>
            <div><Header/></div>
            <div className="base-container" >
                <br /> <br />

                <div className="header">Employee Login</div>
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
                </div>
                <div className="footer">
                    <button type="submit" className="btn" onClick={login} >
                        Login
                        </button>
                </div>

                <div>
                    <Link to={'/register'} className="nav-link">Register for Job</Link>
                </div>
            </div>
        </div>

    )
}

export default Candilog;