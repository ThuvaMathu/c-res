import React, { useState, useEffect } from 'react';
import { Button } from 'reactstrap';
import Navbar from '../components/Navbar';
import LeaveTable from './LeaveTable';
import { Link } from 'react-router-dom';
import Axios from "axios";
function Leaves() {
  let [leavedata, setLeavedata] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/form").then((response) => {
      setLeavedata(response.data)
      console.log(leavedata);
    });
  }, []);

  return (
    <div>

      <div className='manager'>
        <h1>Leaves List</h1>
      </div>
      <div className="shedule-outer">
        <table className="leavetable">
          <tr>
            <th className="tth" >Employee Id</th>
            <th className="tth">Applied Date</th>
            <th className="tth">Leave Type</th>
            <th className="tth">Leave date</th>
            <th className="tth">Form Status</th>
            <th className="tth">View</th>
            
          </tr>
          {
            leavedata.map((datas) => (
              <tr key={datas.emp_id}>
                <td className="tth">{datas.emp_id}</td>
                <td className="tth">{datas.date}</td>
                <td className="tth">{datas.leave_type}</td>
                <td className="tth">{datas.l_from + "-" + datas.l_until}</td>
                <td className="tth">{datas.form_status}</td>
                <td className="tth">
                  <div>
                    <Button className="view" tag={Link} to={"/manager/viewleave/" + datas.emp_id}>View</Button>{" "}
                   </div>
                </td>
                
              </tr>
            ))}
        </table>
      </div>
      
    </div>
  )
}

export default Leaves