import React, { Component } from 'react';
import { Button} from 'reactstrap';
import Navbar from '../components/Navbar';

import { Link } from 'react-router-dom';

class Employee extends Component {

  constructor(props) {
    super(props);
    this.state = {employee: [], isLoading: true};
    
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:3001/api/employee')
      .then(response => response.json())
      .then(data => this.setState({employee: data, isLoading: false}));
  }

  

  render() {
    const {employee, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const employeeList = employee.map(employee => {
      return<tr key={employee.id}>
        <td className="ttd" >{employee.id}</td>
        <td className="ttd" >{employee.name}</td>
        <td className="ttd" >{employee.email}</td>
        <td className="ttd" >{employee.em_role}</td>
        <td className="ttd" >
          <div>
            <Button  className="view"  tag={Link} to={"/manager/viewemployee/"+ employee.id }>View</Button>{" "}
            <Button  className="btn2"  tag={Link} to={"/manager/shedule/"+ employee.id }>Schedule</Button>{" "}
            <Button  className="back"  tag={Link} to={"/manager/payroll/"+ employee.id }>Create Payslip</Button>
            </div>
        </td>
      </tr>
      
    });

    return (
      <div>
       
        <h1>Employee List</h1>
        <div className="table-container">
          <table className="ttable">
            <thead>
              <tr>
                <th className="tth" >ID</th>
                <th className="tth" >Full name</th>
                <th className="tth" >Email</th>
                <th className="tth" >Employee Role</th>
                <th className="tth" >Actions</th>
              </tr>
            </thead>
            <tbody>
            {employeeList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Employee;