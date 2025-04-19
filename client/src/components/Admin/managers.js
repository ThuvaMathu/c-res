import React from 'react';
import Navbar from './Navbar';
import './Admin.css';

const Employee = () => {
  return (
    <div>
	  <div><Navbar /></div>
      <div className='manager'>
        <h1>Employees</h1>
      </div>
    </div>
  )
}

export default Employee