import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Axios from "axios";
import { BsConeStriped } from 'react-icons/bs';

export default function Demo2() {
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const login = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:3001/smail", {
            email: email,
           
        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message);
                
            } else {
                

            }
        });
    };

    

    return (

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
                    
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn" onClick={login} >
                    Login
                    </button>
            </div>

           
        </div>

    )
}









