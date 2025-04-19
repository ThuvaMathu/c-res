import React from 'react';
import { useState } from "react";
import '../Stylesheet/styles.css'
import Axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import { Header } from '../login/header';


function Register() {

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setconfirm] = useState("");
    const [code, setCode] = useState("");
    const [verify, setVerify] = useState("");

    let history = useHistory();
    const [validate, setvalidate] = useState(false);
    const [showText, setShowText] = useState(false);

    Axios.defaults.withCredentials = true;


    const register = (e) => {
        e.preventDefault();
        if (password === confirm) {

            Axios.post("http://localhost:3001/email", {
                email: email,
            }).then((response) => {
                if (response.data.message) {
                    alert(response.data.message);
                }
                else {
                    setShowText(!showText)
                    Axios.post("http://localhost:3001/smail", {
                        email: email,
                    }).then((response) => {
                        if (response.data.message) {
                            setCode(response.data.verify);
                            alert(response.data.message);
                            console.log(code);

                        } else {

                        }
                    });

                }
            });
        }
        else {
            //window.location.reload();
            alert("Password Does not match");
            setPassword("");
            setconfirm("")
        }
    };

    const final = () => {
         Axios.post("http://localhost:3001/candireg",{
                code:code,
                verify:verify,
                email: email,
                password: password,
            }).then((response) => {
                if(response){
                alert(response.data.message);
                history.push('/apply/')
                }
                else {
                    alert(response.data.message);
                    //window.location.reload();
                }
            });
        }
        

    

    return (
        <div>
            <div><Header/></div>

            <div className="base-container" >
                <br /> <br />

                <div className="header">Employee Login</div>
                <div className="content">
                    <form onSubmit={register}>
                        <div className="form">
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input className="form-input" type="email" name="email" placeholder="email" onChange={(e) => {
                                    setemail(e.target.value);
                                }} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <p htmlFor="password">* must be atleast 8 characters long. <br />
                                     * must contain atleast one number. <br />
                                     * must contain atleast one uppercase.</p>
                                <input className="form-input" type="password" value={password} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" name="password" placeholder="password" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Confirm Password</label>
                                <input className="form-input" type="password" name="password" value={confirm} placeholder="password" onChange={(e) => {
                                    setconfirm(e.target.value);
                                }} required />
                            </div>
                        </div>
                        <div className="footer">
                            <button type="submit" className="btn"  >register</button>
                        </div>
                    </form>
                </div>
            </div>
            {showText && <div>
                <div className="form">
                    <div class="einner2-col">
                        <h2>Verifi email</h2>
                        <div className="form-group">
                            <label htmlFor="verify">Verification</label>
                            <input className="form-input" type="numeric" name="verify" placeholder="Eg: 00000" onChange={(e) => {
                                setVerify(e.target.value);
                            }} required />
                        </div>

                        <div className="footer">
                            <button type="submit" className="btn2" onClick={final} >submit</button>{" "}
                            <button className="back" type="button" onClick={() => setShowText(!showText)}>cancel</button>
                        </div>
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Register;
