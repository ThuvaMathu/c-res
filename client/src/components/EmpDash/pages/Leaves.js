import React, { useEffect, useState } from "react";
import Axios from "axios";
import '../../Stylesheet/emohome.css'
import { useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import { BsBackspaceReverse } from "react-icons/bs";

function Leaves(props) {
  Axios.defaults.withCredentials = true;
  const history = useHistory();
  let [id, setId] = useState(1);

  let [announ, setAnnoun] = useState([]);
  let [subject, setSubject] = useState("");
  let [leavefrom, setLeaveFrom] = useState("");
  let [leaveuntil, setLeaveUntil] = useState("");
  let [reason, setReason] = useState("");
  let [leavetype, setLeaveType] = useState("casual");
  let [bleave, setBleave] = useState("");
  let [email, setEmail] = useState("");
  const [leaves, setLeaves] = useState("");
  const [commants, setCommands] = useState("");
  const [fid, setFid] = useState("");
  const [adate, setAdate] = useState("");  
  //let ids = 0;
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {

        setId(response.data.user[0].id);
      }
    });
  }, []);
  const getemployee = () => {
    Axios.post(`http://localhost:3001/getemployee`, {
      id: id,
      //email: email,
    }).then((response) => {
      if (response) {
        setBleave(response.data[0].l_count);

      }
    })
  };
  getemployee();

  const submitleave = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3001/leaveform", {
      ids: id,
      subject: subject,
      from: leavefrom,
      until: leaveuntil,
      type: leavetype,
      reason: reason,
      bleave: bleave,
    }).then((response) => {
      setSubject(" ");
      setLeaveType(" ");
      setLeaveUntil("");
      setLeaveFrom(" ");
      setReason(" ");

      if (response.data.message) {

        alert(response.data.message);
      } else {
        alert("somthing went wrong try again later");
      }
    });
  }
  const geteform = () => {
    Axios.post(`http://localhost:3001/getform`, {
      id: id,
      //email: email,
    }).then((response) => {
     if(response.data.length >0){
        let i = response.data.length;
        let leavedata = response.data[0];
        setCommands(leavedata.comments);
        setLeaves(leavedata.form_status);
        setFid(leavedata.form_id);
        setAdate(leavedata.date)
        
     }
      
    })
  };
  
  function status(){
    if(leaves ==="Accept" || leaves ==="Decline"){
      return(
        <div>
        <p><span className="span_content">comments: </span>{commants}</p>
        <p><span className="span_content">Form Status: </span> {leaves}</p>
        </div>
      )
    }
    if(leaves ==="bending"){
      return(
        <div>
        <p><span className="span_content">Form Status: </span> {leaves}</p>
        </div>
      )
    }
  }
  return (
    <div>
     
      <Row class="gdp-row gpd-grid">
        <Col xs="9">
          <h3 className="h3style">Leave Form</h3>
          <div class="cell gpd-clm" id="iidc2">
            <div class="gpd-box" id="il6i2">



              <div className="leave-container">
                <form onSubmit={submitleave}>
                  <Row>
                    <Col sx="6">
                      <div>
                        <label for="Subject">Subject<span>*</span></label><br />
                        <input className="form-input2" id="Subject" type="text" name="Subject" value={subject} onChange={(event) => {
                          setSubject(event.target.value);
                        }} required />
                      </div>
                    </Col>
                    <Col sx="6">
                      <div>
                        <label for="LeaveType">Leave Type<span>*</span></label><br />
                        <select className="form-input2" name="LeaveType" id="LeaveType" value={leavetype} onChange={(event) => { setLeaveType(event.target.value); }} required>
                          <option value="casul">Casual Leave</option>
                          <option value="sick">Sick Leave</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sx="6">
                      <div>
                        <label for="LeaveFrom">Leave From<span>*</span></label><br />
                        <input className="form-input2" id="LeaveFrom" type="date" name="LeaveFrom" value={leavefrom} onChange={(event) => {
                          setLeaveFrom(event.target.value);
                        }} required />
                      </div>
                    </Col>
                    <Col sx="6">
                      <div>
                        <label for="LeaveUntil">Leave Until<span>*</span></label><br />
                        <input className="form-input2" id="LeaveUntil" type="date" name="LeaveUntil" value={leaveuntil} onChange={(event) => {
                          setLeaveUntil(event.target.value);
                        }} required />
                      </div>
                    </Col>
                  </Row>
                  <div>
                    <label for="Reason">Reason</label><span>*</span><br />
                    <textarea rows="10" col="100" className="form-input2" id="Reason" type="text" name="Reason" value={reason} onChange={(event) => {
                      setReason(event.target.value);
                    }} required />
                  </div>
                  <div className="btn-block">
                    <button className="btn2" type="submit" > Submit </button>

                  </div>
                </form>
              </div>
            </div>
          </div>
        </Col>
        <Col xs="3">
                    {geteform()}
          <h3 className="h3style">Balance Leave</h3>
          <div id="i77k" class="cell gpd-clm">
            <div class="gpd-box" id="izxk">
              <h1 id="iwvhr">{bleave}</h1>
              <hr></hr>
             

            </div>
          </div>
        </Col>
      </Row>
      <h3 className="h3style">Resent Form Status</h3>.
      <div class="gpd-box" id="i8zi">
        <div class="gpd-box" id="isng">
        <div className="leave-container">
        <p><span className="span_content">Form_id: </span>{fid}</p>
        <p><span className="span_content">Applied Date: </span> {adate}</p>
         
          {status()}

        </div>

        </div>
      </div>
    </div>

  );
  
}

export default Leaves;