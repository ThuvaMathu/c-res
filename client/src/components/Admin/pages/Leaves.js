import React from 'react';
import Navbar from '../components/Navbar';


import LeaveTable from './LeaveTable';

function Leaves() {







  return (
    <div>
      <div className='manager'>
        <h1>Leave</h1>
      </div>
      <div className="main-container">
        <div className="func-container">
        <div className="form">
          <label>Search for a Leave</label>
          <input className="form-input" type="text" name="search" placeholder="Search..."/>
        </div>
        <div className="button-box">
          <button>Create A Leave</button>
        </div>
        </div>
        <div className="box">
          <LeaveTable></LeaveTable>
        </div>
      </div>
    </div>
  )
}

export default Leaves