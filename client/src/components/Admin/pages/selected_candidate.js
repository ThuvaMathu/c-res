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
        <td>{candidate.candidate_id}</td>
        <td>{candidate.candidate_name}</td>
        <td>{candidate.candidate_email}</td>
       
        <td>
          <ButtonGroup>
            <Button  color="primary" tag={Link} to={"/manager/viewcandidate/"+ candidate.candidate_id }>View</Button>
          
            <Button className="button2" color="green" tag={Link} to={"/manager/add/"+ candidate.candidate_id}>Add as Employee</Button>
          </ButtonGroup>
        </td>
      </tr>
      
    });

    return (
      <div>
        <div><Navbar /></div>
        <h3>Selected candidate List</h3>
          <div className="button_container">
          <Button color = "danger" className="tablebtn" tag={Link} to={"/manager/candidate"}>Go back</Button>
          </div>
        <Container fluid>
          <Table className="mt-4">
            <thead>
              <tr>
                <th width="20%">Candidate ID</th>
                <th width="20%">Full name</th>
                <th width="20%">Email</th>
                <th width="20%">Qualification</th>
                
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

export default scandidate;