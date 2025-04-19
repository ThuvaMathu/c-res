import React from 'react';
import { useState, useEffect } from "react";
import '../Stylesheet/styles.css'
import Axios from "axios";
import { Link, useHistory } from 'react-router-dom';
import Applyresult from './applyresult';
//import '../Stylesheet/applyjop.css'
//import '../Stylesheet/styles.css'
import { Header } from '../login/header';



export function Adddoc() {

    useEffect(() => {
        Axios.get("http://localhost:3001/candilogin").then((response) => {
            if (response.data.loggedIn === true) {
                setids(response.data.user[0].id);
                setstage(response.data.user[0].stage);

            }
        });
    }, []);

    const [ids, setids] = useState("");
    const [stage, setstage] = useState("");
    const [name, setName] = useState("");
    const [lname, setLname] = useState("");
    const [dob, setDob] = useState("");
    const [addr, setAddr] = useState("");
    let [gender, setGender] = useState("Male");
    const [phone, setPhone] = useState("");
    const [qulifi, setQualifi] = useState("");
    const [resume, setResume] = useState("");

    Axios.defaults.withCredentials = true;
    const [candidatelist, setCandidatelist] = useState([]);
    let history = useHistory();
    const addEmployee = () => {
        //alert("The form was submitted");
        
        Axios.post("http://localhost:3001/apply", {
            name: name,
            lname: lname,
            dob: dob,
            addr: addr,
            gender: gender,
            phone: phone,
            qulifi: qulifi,
            resume: resume,
            ids: ids,
        }).then((response) => {
            if (response.data.message) {

                alert(response.data.message);

            } else {

                // window.location.reload();
            }
        }); history.push('/result')
    };

    if (stage === "1") {

        return (
            <div>
                <div><Header/></div>
                <div className="header-container">Application Form for Candidates</div>
                
                <div className="table-container">

                    <form onSubmit={addEmployee}>
                        <table className="ttable" >

                            <tr>

                                <td >
                                    <label for="fname">First Name<span>*</span></label>
                                    <input className="form-input2" id="fname" type="text" name="fname" onChange={(event) => {
                                        setName(event.target.value);
                                    }} required />
                                </td>

                                <td>
                                    <label for="fname">Last Name<span>*</span></label>
                                    <input className="form-input2" id="fname" type="text" name="fname" onChange={(event) => {
                                        setLname(event.target.value);
                                    }} required />
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    <label for="dob"> Date of Birth<span>*</span></label>
                                    <input className="form-input2" id="dob" type="text" name="dob" onChange={(event) => {
                                        setDob(event.target.value);
                                    }} required />
                                </td>

                                <td>
                                    <label for="gender">Gender<span>*</span></label>
                                    <select className="form-input2" name="gender" id="gender" onChange={(event) => { setGender(event.target.value); }} required>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    <label for="phone">Phone Number</label>
                                    <input className="form-input2" id="phone" type="tel" name="phone" onChange={(event) => {
                                        setPhone(event.target.value);
                                    }} required />
                                </td>

                                <td>
                                    <label for="p-saddress">Postal Address</label>
                                    <input className="form-input2" id="p-saddress" type="text" name="p-saddress" onChange={(event) => {
                                        setAddr(event.target.value);
                                    }} required />
                                </td>
                            </tr>
                            <tr>

                                <td>
                                    <label for="qualification">Qualification</label>
                                    <input className="form-input2" id="qualification" type="text" name="qualification" onChange={(event) => {
                                        setQualifi(event.target.value);
                                    }} required />
                                </td>

                                <td>
                                    <div className="button-wrap">
                                        <label className="new-button" for="resume">Resume</label>
                                        <input id="resume" type="file" onChange={(event) => {
                                            setResume(event.target.value);
                                        }} required />
                                    </div>
                                </td>
                            </tr>
                        </table>
                        
                        <div className="btn-block">
                            <Link className="back" to={'/'} >Back</Link>
                            <button className="btn2" type="submit" > Submit </button>{" "}
                        </div>
                    </form>
                    <div className="btn-block">

                    </div>
                </div>

            </div>


        );
    }
    else {
        return (
            <div>
                <Applyresult />
            </div>

        );
    }


}



export default Adddoc;

