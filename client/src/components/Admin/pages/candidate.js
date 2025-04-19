import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../../Stylesheet/manager.css'

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
      return<tr key={candidate.id}>
        <td>{candidate.id}</td>
        <td>{candidate.candidate_name}</td>
        <td>{candidate.candidate_email}</td>
        <td>{candidate.candidate_qualification}</td>
        <td>
          <ButtonGroup>
            <Button  color="primary" tag={Link} to={"/manager/viewcandidate/"+ candidate.id }>View</Button>
            <Button  color="danger" onClick={() => this.remove(candidate.id)}>Delete</Button>
            
          </ButtonGroup>
        </td>
      </tr>
      
    });

    return (
      <div>
        <div><Navbar /></div>
        <h3>candidate List</h3>
          <div className="button_container">
            <Button color="success" tag={Link} to="/manager/Scandidate">Selected Candidate List</Button>
          </div>
        <Container fluid>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">ID</th>
                <th width="20%">Full name</th>
                <th width="20%">Email</th>
                <th width="20%">Qualification</th>
                <th width="20%">Actions</th>
              </tr>
            </thead>
            <tbody>
            {candidateList}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default candidate;