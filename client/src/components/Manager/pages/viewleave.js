import React, { useEffect, useState, } from "react";
import { useHistory, Link } from 'react-router-dom';
import Axios from "axios";
import '../../Stylesheet/manager.css'



function Viewleave(props) {
    const [shedule, setsheduledata] = useState([]);
    let [leavedata, setLeavedata] = useState([]);
    let [empdata, setEmpdata] = useState([]);
    let [comment, setComment] = useState("hi");
    const [accept, setAccept] = useState("Accept");
    const [decline, SetDecline] = useState("Decline");
    let history = useHistory();
    useEffect(() => {

        const { id } = props.match.params;
        Axios.get(`http://localhost:3001/getform/${id}`).then((response) => {
            setLeavedata(response.data[0]);
            //setFormId(leavedata.form_id);
            console.log(leavedata);
        });
    }, []);
    useEffect(() => {
        const { id } = props.match.params;
        Axios.get(`http://localhost:3001/getemp/${id}`).then((response) => {
            setEmpdata(response.data[0]);
        });
    }, []);
    useEffect(() => {
        const { id } = props.match.params;
        Axios.post(`http://localhost:3001/getshedule`, {
            id: id,
        }).then((response) => {
            setsheduledata(response.data[0]);

        });
    }, []);
    const acceptleave = () => {

        Axios.post(`http://localhost:3001/updateform`, {
            id: leavedata.form_id,
            empid: empdata.id,
            status: accept,
            comment: comment,
            lcount: --empdata.l_count
        }).
            then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                    history.push('/manager/leaves')
                }
                else {
                    alert("Somthing went wrong")
                }

            })
    };
    const declineleave = () => {

        Axios.post(`http://localhost:3001/updateform`, {
            id: leavedata.form_id,
            status: decline,
            comment: comment,
        }).
            then((response) => {
                if (response.data.message) {
                    alert(response.data.message)
                    history.push('/manager/leaves');
                }
                else {
                    alert("Somthing went wrong")
                }

            })
    };
    return (
        <div>
            <div className="leavebutton-container" >
                <Link className="back" id="io2og" to={'/manager/leaves'}>Back</Link>

            </div>
            <div className="leavetable-container" >
                <table className="leavetable" >
                    <thead>
                        <tr>
                            <th className="cell-style" >
                                <span>Employee Id</span>
                            </th>
                            <th className="cell-style" >
                                <span>Employee Name</span>
                            </th>
                            <th className="cell-style" >
                                <span>Employee Email</span>
                            </th>
                            <th className="cell-style" >
                                <span>Employee role</span>
                            </th>
                            <th className="cell-style" >
                                <span>Employee department</span>
                            </th>
                            <th className="cell-style" >
                                <span>Leave count</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>

                            <td className="cell-style" >
                                <span>{empdata.id}</span>
                            </td>
                            <td className="cell-style">
                                <span>{empdata.name}</span>
                            </td>
                            <td className="cell-style" >
                                <span>{empdata.email}</span>
                            </td>
                            <td className="cell-style" >
                                <span>{empdata.em_role}</span>
                            </td>
                            <td className="cell-style" >
                                <span>{empdata.department}</span>
                            </td>
                            <td className="cell-style" >
                                <span>{empdata.l_count}</span>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
                <table className="leavetable" >
                    <thead>
                        <tr>
                            <th className="cell-style" >
                                <span>Form ID</span>
                            </th>
                            <th className="cell-style" >
                                <span>Subject</span>
                            </th>
                            <th className="cell-style" >
                                <span>Leave Type</span>
                            </th>
                            <th className="cell-style" >
                                <span>Leave Date</span>
                            </th>
                            <th className="cell-style" >
                                <span>Reason</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="cell-style" >
                                <span>{leavedata.form_id}</span>
                            </td>
                            <td className="cell-style" >
                                <span>{leavedata.subject}</span>
                            </td>
                            <td className="cell-style" >
                                <span>{leavedata.leave_type}</span>
                            </td>
                            <td className="cell-style" >
                                <span>{leavedata.l_from + "-" + leavedata.l_until}</span>
                            </td>
                            <td className="cell-style" >
                                <span>{leavedata.reason}</span>
                            </td>
                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className="leavetable-container" >
                <h3>Employee shedule</h3>
                <table className="leavetable" >
                    <thead>
                        <tr>
                            <th className="cell-style" >
                                <span>Monday</span>
                            </th>
                            <th className="cell-style" >
                                <span>Tuesday</span>
                            </th>
                            <th className="cell-style" >
                                <span>Wednesday</span>
                            </th>
                            <th className="cell-style" >
                                <span>Thursday</span>
                            </th>
                            <th className="cell-style" >
                                <span>Friday</span>
                            </th>
                            <th className="cell-style" >
                                <span>Saturday</span>
                            </th>
                            <th className="cell-style" >
                                <span>Sunday</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="cell-style">From: {shedule.mon_from} <br /> To: {shedule.mon_to}</td>
                            <td className="cell-style">From: {shedule.tue_from} <br /> To: {shedule.tue_to}</td>
                            <td className="cell-style">From: {shedule.wed_from} <br /> To: {shedule.wed_to}</td>
                            <td className="cell-style">From: {shedule.thu_from} <br /> To: {shedule.thu_to}</td>
                            <td className="cell-style">From: {shedule.fri_from} <br /> To: {shedule.fri_to}</td>
                            <td className="cell-style">From: {shedule.sat_from} <br /> To: {shedule.sat_to}</td>
                            <td className="cell-style">From: {shedule.sun_from} <br /> To: {shedule.sun_to}</td>


                        </tr>
                        <tr>
                        </tr>
                    </tbody>
                </table>
            </div>


            <form>
                <div className="comment-container" >
                    <h3 className="h3style">Comments for employee <span>(optional)</span></h3>
                    <textarea className="form-input3" name="comment" vlaue={comment} onChange={(e) => { setComment(e.target.value); }} />
                </div>
            </form>
            <div className="leavebutton-container" >
                <div role="group" className="btn-group">
                    <button type="button" className="btn2" onClick={acceptleave}>Accept</button>
                    <button type="button" className="back" id="il7hw" onClick={declineleave}>Decline</button>
                    <Link className="view" to="/manager/shedule" id="il7hw">View Shedule</Link>
                </div>
            </div>
        </div>

    );
}

export default Viewleave;