import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Axios from "axios";
import { useHistory, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'reactstrap';


export default function Shedule(props) {
    const useStyles = makeStyles({
        table: {
            minWidth: 950,
        },
    });
    let [employee, setEmployee] = useState([]);
    let [eid, setEId] = useState("");
    let [monf, setMonf] = useState("");
    let [mont, setMont] = useState("");
    let [tuef, setTuef] = useState("");
    let [tuet, setTuet] = useState("");
    let [wedf, setWedf] = useState("");
    let [wedt, setWedt] = useState("");
    let [thuf, setThuf] = useState("");
    let [thut, setThut] = useState("");
    let [frif, setFrif] = useState("");
    let [frit, setFrit] = useState("");
    let [satf, setSatf] = useState("");
    let [satt, setSatt] = useState("");
    let [sunf, setsunf] = useState("");
    let [sunt, setsunt] = useState("");
    let [other, setOther] = useState("");



    let history = useHistory();
    const Goback = () => { history.push('/manager/employee') };

    useEffect(() =>  {
        const { id } = props.match.params;
        Axios.get(`http://localhost:3001/getemp/${id}`, {
        }).then((response) => {
            let employee = response.data[0];
            setEmployee(response.data[0])
           
        })
    },[]);
    
const upload = (event) => {
        event.preventDefault();
        
        Axios.post(`http://localhost:3001/update_shedule`, {
            id: employee.id,
            monf: monf,
            mont: mont,
            tuef: tuef,
            tuet: tuet,
            wedf: wedf,
            wedt: wedt,
            thuf: thuf,
            thut: thut,
            frif: frif,
            frit: frit,
            satf: satf,
            satt: satt,
            sunf: sunf,
            sunt: sunt,
            other: other,

        }).then((response) => {
            if (response.data.message) {
                alert(response.data.message)
                history.push('/manager/employee')
            }
            else {
                alert("Somthing went wrong")
            }

        })
    };



    const classes = useStyles();
    
    return (

        <div>
            <div>
            <h3 className="h3style">Employee shedule</h3>
            
            <h3 className="h3style">ID: {employee.id}, Name: {employee.name} {employee.lname}</h3>
            </div>
           
        <form onSubmit={upload}>
            <div className="shedule-outer " >
                <div>
                    <p>Note: you can't able to leave field empty, please use 00:00 </p>
                </div>
                <Row>

                    <Col>
                        <div className="inner-collumn" >
                            <h3 className="gpd-header">Monday&nbsp;</h3>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">From:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={monf} onChange={(e) => { setMonf(e.target.value); }} required/>
                            </div>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">To:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={mont} onChange={(e) => { setMont(e.target.value); }} required />
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className="inner-collumn" >
                            <h3 className="gpd-header">Tuesday&nbsp;</h3>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">From:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={tuef} onChange={(e) => { setTuef(e.target.value); }} required/>
                            </div>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">To:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={tuet} onChange={(e) => { setTuet(e.target.value); }} required/>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className="inner-collumn" >
                            <h3 className="gpd-header">Wednesday&nbsp;</h3>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">From:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={wedf} onChange={(e) => { setWedf(e.target.value); }} required/>
                            </div>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">To:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={wedt} onChange={(e) => { setWedt(e.target.value); }} required/>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className="inner-collumn" >
                            <h3 className="gpd-header">Thursday&nbsp;</h3>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">From:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={thuf} onChange={(e) => { setThuf(e.target.value); }} required/>
                            </div>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">To:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={thut} onChange={(e) => { setThut(e.target.value); }} required/>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className="inner-collumn" >
                            <h3 className="gpd-header">Friday&nbsp;</h3>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">From:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={frif} onChange={(e) => { setFrif(e.target.value); }} required/>
                            </div>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">To:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={frit} onChange={(e) => { setFrit(e.target.value); }} required/>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className="inner-collumn" >
                            <h3 className="gpd-header">Saturday&nbsp;</h3>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">From:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={satf} onChange={(e) => { setSatf(e.target.value); }} required/>
                            </div>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">To:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={satt} onChange={(e) => { setSatt(e.target.value); }} required/>
                            </div>

                        </div>
                    </Col>
                    <Col>
                        <div className="inner-collumn" >
                            <h3 className="gpd-header">Sunday&nbsp;</h3>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">From:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={sunf} onChange={(e) => { setsunf(e.target.value); }} required/>
                            </div>
                            <div className="sh-group" >
                                <div className="label-box" >
                                    <span className="label-dec">To:</span>
                                </div>
                                <input type="time" class="sh-input" vlaue={sunt} onChange={(e) => { setsunt(e.target.value); }} required/>
                            </div>

                        </div>
                    </Col>
                    <Col></Col>

                    <Col>
                        <div className="inner-collumn2" >
                            <h4 className="h4style">Comments for employee <span>(optional)</span></h4>
                            <textarea className="form-input4" name="comment" vlaue={other} onChange={(e) => { setOther(e.target.value); }} />
                        </div>
                    </Col>
                    <Col>
                        
                            <div className="shedule_button">
                                <button type="submit" className="btn2" >Upload</button>{" "}
                                <button type="reset" className="view">Reset</button>{" "}
                                <Button className="back" tag={Link} to={"/manager/employee"}>back</Button>{" "}
                            </div>
                        
                    </Col>

                </Row>





            </div>
            </form>
        </div>
    );
}







