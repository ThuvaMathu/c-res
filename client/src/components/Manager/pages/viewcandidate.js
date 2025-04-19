import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "axios";
import Navbar from '../components/Navbar';
import { useHistory, Link } from 'react-router-dom';
import { Button } from 'reactstrap';
import { BsConeStriped } from 'react-icons/bs';

export default function Viewcandidate(props) {
  const useStyles = makeStyles({
    table: {
      minWidth: 950,
    },
  });
  const [cid, setcId] = useState("");
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [fullname, setFullname] = useState("");
  const [gender, setGender] = useState("");
  const [addr, setAddr] = useState("");
  const [phone, setPhone] = useState("");
  const [quali, setQuali] = useState("");
  const [email, setEmail] = useState("");

  let history = useHistory();
  const Goback = () => { history.push('/manager/candidate') };

  useEffect(()=>{
    const { id } = props.match.params;
    Axios.get(`http://localhost:3001/getcan/${id}`, {
    }).then((response) => {
      let candidate = response.data[0];

      setcId(candidate.id);
      setName(candidate.candidate_name);
      setLname(candidate.candidate_lname);
      setGender(candidate.candidate_gender);
      setPhone(candidate.candidate_phone);
      setAddr(candidate.candidate_addr);
      setEmail(candidate.candidate_email);
      setQuali(candidate.candidate_qualification);
      setFullname(candidate.candidate_name +"  "+ candidate.candidate_lname);


     

    })},[]);
  const select = () => {
    Axios.post(`http://localhost:3001/selectcandi`, {
      id: cid
    }).then((response) => {
      if(response.data.message)
      {
        alert(response.data.message)
      }
      else
      {
        alert("Somthing went wrong")
      }

    })
  };

  //getcandidate();

  const classes = useStyles();

  return (

    <div>
      
      <div className="table-container">
        <div className="table-header2">Candidate Name: {fullname}</div><br />
        <table className="tables">
          <tr >
            <th>Candidate ID  </th>
            <td>{cid}</td>
          </tr>
          <tr >
            <th>Candidate Gender </th>
            <td>{gender}</td>
          </tr>
          <tr >
            <th>Candidate Email </th>
            <td>{email}</td>
          </tr>
          <tr >
            <th>Candidate Address</th>
            <td>{addr}</td>
          </tr>
          <tr >
            <th>Candidate Phone </th>
            <td>{phone}</td>
          </tr>
          <tr >
            <th>Candidate Qualification</th>
            <td>{quali}</td>
          </tr>
          

        </table>
        <div className="footer">

          <Button className="back" tag={Link} to={"/manager/candidate"}>Go back</Button>
        </div>
        <div className="footer">
          <Button className="btn2" onClick={select} >Select for interview</Button>

        </div>

      </div>
    </div>








  );
}







