import React from 'react';
import { useState } from "react";

import Axios from "axios";
import { Link, useHistory } from 'react-router-dom';
function Demo() {

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [email1, setemail1] = useState("");
    const [password1, setPassword1] = useState("");
    const [role, setrole] = useState(false);

    let history = useHistory();

    Axios.defaults.withCredentials = true;

    const register = () => {

        Axios.post("http://localhost:3001/employeereg", {
            email: email,
            password: password,
        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message);
                history.push('/')
            } else {
                window.location.reload();
            }
        });
    };


    const register1 = () => {

        Axios.post("http://localhost:3001/managerreg", {
            email: email1,
            password: password1,
            role: role,
        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message);
                history.push('/')
            } else {
                window.location.reload();
            }
        });
    };

    return (

        <div className="base-container" >
            <br /> <br />

            <div className="header">Employee Credential</div>
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
                <div className="footer">
                    <button type="submit" className="btn" onClick={register} >
                        register
                    </button>
                </div>

            </div>
            <br/><br/><br/>
            <div className="header">manager credential</div>
            <div className="content">

                <div className="form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input className="form-input" type="text" name="email" placeholder="email" onChange={(e) => {
                            setemail1(e.target.value);
                        }} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">role</label>
                        <input className="form-input" type="text" name="role" placeholder="email" onChange={(e) => {
                            setrole(e.target.value);
                        }} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input className="form-input" type="password" name="password" placeholder="password" onChange={(e) => {
                            setPassword1(e.target.value);
                        }} required />
                    </div>

                </div>
                <div className="footer">
                    <button type="submit" className="btn" onClick={register1} >
                        register
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Demo;
