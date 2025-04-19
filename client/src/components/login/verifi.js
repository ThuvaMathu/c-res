import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header } from './index';
import Axios from 'axios';

export function Verify() {

	const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let history = useHistory();
    const handleSubmit = (e) => {
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
		<div>
			<div><Header/></div>
			<div className="outside-box">
				<div className="main-box">
					<div className="container">
						<div className="base-container" >	
						<br/>
						<br/> 
						<div className="header">
							Forgot Password
						</div>

						<div className="content">
						<div className="form">
							<div className="form-group">
								<label htmlFor="email">Enter verification code</label>
								<input 
									className="form-input" 
									type="email" 
									name="email" 
									placeholder="email"
									onChange={(e) => {setEmail(e.target.value);}} required
									/>
							</div>
						</div>
						</div>
						<div className="footer">
							<button type="submit" className="btn" onClick = {handleSubmit}
							>
								Send
							</button>
						</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
