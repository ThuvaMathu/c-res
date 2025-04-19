import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button,Form} from 'reactstrap';
import Navbar from '../components/Navbar';

class Employeeedit extends Component {

  emptyemployee = {
    //id : '',
    //candidate_id: '',
    name:'', 
    gender:'', 
    email:'', 
    address:'', 
    phone:'', 
    qualification:'',
    st_salary:'',
    department:'', 
    em_role:'',
    description:'',
    hours:'',

    
  };

  constructor(props) {
    super(props);
    this.state = {
      list: this.emptyemployee
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async componentDidMount() {
    
      const employee = await (await fetch(`http://localhost:3001/api/employee/${this.props.match.params.id}`)).json();
      this.setState({list: employee});
    
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    let list = {...this.state.list};
    list[name] = value;
    this.setState({list});
  }

  async handleSubmit(event) {
    event.preventDefault();
    const {list} = this.state;

    await fetch('http://localhost:3001/uemployee', {
      method:(list.id) ? 'PUT' : 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(list),
    });
    this.props.history.push('/manager/employee');
  }

  render() {
    const {list} = this.state;
    const title = <h2>{list.ids ? 'Edit employee' : 'Add employee'}</h2>;

    return <div>
        
        <h1>Name: {list.name}</h1>
      <Form onSubmit={this.handleSubmit}>
        <div className="table-container">
          <div className="button_container">
            <Button className="btn2"  type="submit">Save</Button>{' '}
            <Button className="back"  tag={Link} to="/manager/employee">Cancel</Button><br/><br/>
            </div>
          <table className="table">
            <tr>
          <th>Address</th>
            <td><input className="form-input2" type="text" name="address" id="address" value={list.address || ''}
                   onChange={this.handleChange} autoComplete="address"/></td>
          <th>Phone</th>
            <td><input className="form-input2" type="text" name="phone" id="phone" value={list.phone || ''}
                   onChange={this.handleChange} autoComplete="phone" /></td>
          </tr>
          <tr>
            <th>Qualification</th>
            <td><input className="form-input2" type="text" name="qualification" id="qualigication" value={list.qualification || ''}
                   onChange={this.handleChange} autoComplete="qualification"/></td>
          
         
            <th>Email</th>
            <td><input className="form-input2" type="text" name="email" id="email" value={list.email || ''}
                   onChange={this.handleChange} autoComplete="email"/></td>
          </tr>
          <tr>
            <th>Role</th>
            <td><input className="form-input2" type="text" name="em_role" id="role" value={list.em_role || ''}
                   onChange={this.handleChange} autoComplete="role"/></td>
          
         
            <th for="department">Department</th>
            <td><input className="form-input2" type="text" name="department" id="department" value={list.department || ''}
                   onChange={this.handleChange} autoComplete="department"/></td>
             </tr>      
            <tr>
          
            <th>Standard Salary</th>
            <td><input className="form-input2" type="text" name="st_salary" id="Salaryn" value={list.st_salary || ''}
                   onChange={this.handleChange} autoComplete="description"/></td>
          
          
            <th>Working hourse per week</th>
            <td><input className="form-input2" type="text" name="hours" id="hours" value={list.hours || ''}
                   onChange={this.handleChange} autoComplete="hours"/></td>
         </tr>
          </table>
          <br/>
          
            
            </div>
        </Form>
        
    </div>
  }
}

export default Employeeedit;