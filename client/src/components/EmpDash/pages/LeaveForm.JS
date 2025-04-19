import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const types = [
  {
    value: 'Temporary',
    label: 'Temporary',
  },
  {
    value: 'Permanent',
    label: 'Permanent',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

<<<<<<< HEAD
function LeaveForm() {
=======
function LeaveTable() {
>>>>>>> cd2e763a1783b3e646e31dceb0a974307f207f81
  const classes = useStyles();
  const [fname, setFname] = useState("First name")
  const [lname, setLname] = useState("Last name")
  const [empID, setEmpID] = useState("ID")
  const [leaveType, setLeaveType] = useState("Choose...")
  const [leaveDate, setLeaveDate] = useState(null)
  const [returnDate, setReturnDate] = useState(null)
  const [reason, setReason] = useState("")
<<<<<<< HEAD
  const axios = require('axios')

  const handleSubmit = (e) => {
      e.preventDefault()
      const leaveID = (new Date()).getTime();
      axios.post(`http://localhost:3001/api/leave/${leaveID}`, {
           leaveID: leaveID,
           fname: fname,
           lname: lname,
           empID: empID,
           leaveType: leaveType,
           leaveDate: leaveDate,
           returnDate: returnDate,
           reason: reason
       })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
   }
=======
  
  const handleSubmit = (e) => {
      e.preventDefault();
        const post ={
            fname: fname,
            lname: lname,
            empID: empID,
            leaveType: leaveType,
            leaveDate: leaveDate,
            returnDate: returnDate,
            reason: reason
        }
        fetch('',{
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify(post)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)
				}); 
			}


  useEffect(() => {
    console.log(fname);
  }, [fname]);
>>>>>>> cd2e763a1783b3e646e31dceb0a974307f207f81

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="fname"
          label="First name"
          required
          multiline
          rowsMax={2}
          value={fname}
          onChange={(event) => setFname(event.target.value)}
        />
        <TextField
          id="lname"
          label="Last name"
          required
          value={lname}
          rowsMax={2}
          onChange={(event) => setLname(event.target.value)}
          multiline
        />
      </div>
      <div>
        <TextField
          id="empID"
          label="Employee id"
          required
          multiline
          rowsMax={2}
          value={empID}
          onChange={(event) => setEmpID(event.target.value)}
        />
      </div>
      <div>
        <TextField
          id="leaveTypes"
          select
          required
          label="Select"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
          helperText="Please select your leave type"
        >
          {types.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
      <div>
        <TextField
          id="date"
          label="Leave date"
          type="date"
          required
          value={leaveDate}
          className={classes.textField}
          onChange={(e) => setLeaveDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
        />
        {(leaveType === 'Temporary') ? (
          <TextField
          id="date"
          label="Return date"
          type="date"
          required
          value={returnDate}
          className={classes.textField}
          onChange={(e) => setReturnDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          />
        ) : (<></>)
        }
      </div>
      <div>
        <TextField 
        id="leaveReason" 
        label="Why are you leaving" 
        onChange={(event) => setReason(event.target.value)}
      />
      </div>
      <Button variant="contained" color="primary" onSubmit={handleSubmit}>
        Submit
      </Button>
    </form>
  );
}

<<<<<<< HEAD
export default LeaveForm;
=======
export default LeaveTable;
>>>>>>> cd2e763a1783b3e646e31dceb0a974307f207f81
