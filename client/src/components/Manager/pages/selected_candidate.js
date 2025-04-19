import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

class scandidate extends Component {

  constructor(props) {
    super(props);
    this.state = {candidate: [], isLoading: true};
    this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('http://localhost:3001/api/Scandidate')
      .then(response => response.json())
      .then(data => this.setState({candidate: data, isLoading: false}));
  }

  async remove(id) {
    await fetch(`/api/candidate/${id}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(() => {
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
      return<tr key={candidate.candidate_id}>
        <td className="ttd" >{candidate.candidate_id}</td>
        <td className="ttd" >{candidate.candidate_name}</td>
        <td className="ttd" >{candidate.candidate_email}</td>
        <td className="ttd" >{candidate.candidate_qualification}</td>
       <td className="ttd" >
          <Button  className="view" tag={Link} to={"/manager/viewcandidate/"+ candidate.candidate_id }>View  </Button>{" "}
            <Button className="btn2" color="green" tag={Link} to={"/manager/add/"+ candidate.candidate_id}>Add as Employee</Button>
           </td>
      </tr>
      
    });

    return (
      <div>
        
        <h1>Selected candidate List</h1>
          <div className="common-c">
          <Button className="back" tag={Link} to={"/manager/candidate"}>Go back</Button>
          </div>
        <div className="shedule-outer">
          <table>
            <thead>
              <tr>
                <th className="tth" width="12%">Candidate ID</th>
                <th className="tth" width="20%">Full name</th>
                <th className="tth" width="20%">Email</th>
                <th className="tth" width="20%">Qualification</th>
                <th className="tth" width="20%">Action</th>
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

export default scandidate;