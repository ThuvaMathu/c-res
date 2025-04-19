//import React from 'react';
import React, { useEffect, useState } from "react";
import Axios from "axios";

export default function Timesheet(props) {
  Axios.defaults.withCredentials = true;
  let [ids, setId] = useState(2);
  let [isload, setIsload] = useState(false)
  const [shedule, setsheduledata] = useState([]);
  const id = props.message;

  useEffect(() => {
    Axios.post(`http://localhost:3001/getshedule`, {
      id: id,
    }).then((response) => {
      setsheduledata(response.data[0]);

    });
  }, []);
  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn === true) {
        setId(response.data.user[0]);
        setIsload(true);
        
      }
    });
  }, []);

  

  //
  return (

    <div>
      <div className="shedule-outer ">

        <div class="shedule-outer-table">
          <h3>Weekly schedule</h3>
          <table className="shedule_table" id="iq60c">
            <tr>
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wedsday</th>
            </tr>
            <tr>
              <td>From: {shedule.mon_from} <br /> To: {shedule.mon_to}</td>
              <td>From: {shedule.tue_from} <br /> To: {shedule.tue_to}</td>
              <td>From: {shedule.wed_from} <br /> To: {shedule.wed_to}</td>
            </tr>
            <tr>
              <th>Thursday</th>
              <th>Friday</th>
              <th>Saturday</th>
            </tr>
            <tr>
              <td>From: {shedule.thu_from} <br /> To: {shedule.thu_to}</td>
              <td>From: {shedule.fri_from} <br /> To: {shedule.fri_to}</td>
              <td>From: {shedule.sat_from} <br /> To: {shedule.sat_to}</td>
            </tr>
            
            <tr>
              <th>Sunday</th>
              <th colSpan="2">Speciel shedule</th>
            </tr>
            <tr>
            <td>From: {shedule.sun_from} <br /> To: {shedule.sun_to}</td>
            <td colSpan="2"><p>{shedule.other}</p></td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  );
}

 //<td>From: {shedule.mon_from} <br/> To: {shedule.mon_to}</td>
 //<td>From: {shedule.mon_from} <br/> To: {shedule.mon_to}</td>
 //<td>From: {shedule.mon_from} <br/> To: {shedule.mon_to}</td>