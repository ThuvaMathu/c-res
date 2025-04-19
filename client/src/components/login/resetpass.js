import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header } from './index';
import Axios from 'axios';

export function Resetpass(props) {

    //const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cpassword, setCpassword] = useState("");
    let history = useHistory();
    let { email } = props.match.params;
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === cpassword) {
            Axios.post(`http://localhost:3001/forget3`, {
                email: email,
                password: password,
            }).then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                    history.push('/')

                }
                else {
                    alert("Somthing wrong, try again");
                }
            })
        }
        else {
            alert("Password doesnot match");
        }
    };

    return (
        <div>
            <div><Header /></div>
            <div className="outside-box">
                <div className="main-box">
                    <div className="container">
                        <div className="base-container" >
                            
                           
                            <div className="header">
                                Forgot Password
						</div>
                <form onSubmit={handleSubmit}>
                            <div className="content">
                                <div className="form">
                                    <div className="form-group">
                                        <label htmlFor="email">Password</label>
                                        <p htmlFor="password">* must contain al least 8 charecter <br />
                                     * At least one number and, <br />
                                     * One uppercase</p>
                                        <input className="form-input"type="password"name="email" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"placeholder="password"
                                            onChange={(e) => { setPassword(e.target.value); }} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Confirm password</label>
                                        <input className="form-input"type="password"name="email"placeholder="Confirm password"
                                            onChange={(e) => { setCpassword(e.target.value); }} required/>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="btn" >Send</button>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
