import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Navbar from '../components/Navbar';
import Axios from "axios";
import { Link } from 'react-router-dom';

class candidate extends Component {

  constructor(props) {
    super(props);
    this.state = {candidate: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:3001/api/candidate')
      .then(response => response.json())
      .then(data => this.setState({candidate: data, isLoading: false}));
  }

  async remove(id) {
    Axios.post(`http://localhost:3001/deletecandi/${id}`, 
      ).then(() => {
      let updatedcandidates = [...this.state.candidate].filter(i => i.id !== id);
      this.setState({candidate: updatedcandidates});
    });
  }

  render() {
    const {candidate, isLoading} = this.state;

    if (isLoading) {
      return <p>Loading...</p>;
    }

    const candidateList = candidate.map(candidate => {
      return<tr key={candidate.id}>
        <td className="ttd" >{candidate.id}</td>
        <td className="ttd" >{candidate.candidate_name}</td>
        <td className="ttd" >{candidate.candidate_email}</td>
        <td className="ttd" >{candidate.candidate_qualification}</td>
        <td className="ttd" >
          <div>
            <Button  className="view"  tag={Link} to={"/manager/viewcandidate/"+ candidate.id }>View</Button>{" "}
            <Button  className="back" onClick={() => this.remove(candidate.id)}>Delete</Button>
            
          </div>
        </td>
      </tr>
      
    });

    return (
      <div>
        
        <h1>Candidate List</h1>
        <div>
          <div className="common-c">
            <Button className="btn2"  tag={Link} to="/manager/Scandidate">Selected Candidate List</Button>
          </div></div>
        <div className="shedule-outer">
          <table>
            <thead>
              <tr>
                <th className="tth"  width="20%">ID</th>
                <th className="tth"  width="20%">Full name</th>
                <th className="tth" width="20%">Email</th>
                <th className="tth" width="20%">Qualification</th>
                <th className="tth" width="20%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {candidateList}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default candidate;