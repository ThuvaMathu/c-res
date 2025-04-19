import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Header } from './index';
import Axios from 'axios';

export function Forgetpass() {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let [code, setCode] = useState(0);
	const [verify, setVerify] = useState("");
	const [showText, setShowText] = useState(false);
	let history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		Axios.post("http://localhost:3001/forget1", {
			email: email,
		}).then((response) => {
			if (response.data.match === true) {
				setShowText(!showText)
				Axios.post("http://localhost:3001/forget2", {
					email: email,
				}).then((response) => {
					if (response.data.status===true) {
						setCode(response.data.verify)
					}
					else {
						alert("Somthing wrong");
					}
				});
			} else {
				alert(response.data.message);
			}
		});
	};
	const handleSubmit2 = (e) => {
		e.preventDefault();
		let temp = parseInt(verify)
		console.log(code)
		console.log(temp)
		console.log(verify)
		if(code === temp){
			history.push('/resetpass/'+email)
		}
		else{
			alert("Verification code did not match")
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

							<div className="content">
								<div className="form">
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input
											className="form-input"
											type="email"
											name="email"
											placeholder="email"
											onChange={(e) => { setEmail(e.target.value); }} required
										/>
									</div>
								</div>
							</div>
							
								<button type="submit" className="btn" onClick={handleSubmit}>Send</button>
							
							{showText && <div>
								<div className="content">
								<div className="form">
									<div className="form-group">
										<label htmlFor="email">verify</label>
										<input
											className="form-input"type="email"name="email"placeholder="00000"
											onChange={(e) => { setVerify(e.target.value); }} required/>
									</div>
								</div>
							</div>
							
								<button type="submit" className="btn" onClick={handleSubmit2}>Send</button>
							


							</div>}



						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
