let express = require('express');
let routerc = express.Router();
const bcrypt = require("bcrypt");
const db = require('../server.js');
const saltRounds = 10;
const candidate = require('../controllers/candidate_controller.js');
const mail = require('../Mail');
//const { mapOptionFieldNames } = require('sequelize/types/lib/utils');
let date_ob = new Date();
/*************************Insert candidate details**********************************************/
let tdate = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let date = year + "-" + month + "-" + tdate;


routerc.get('/api/candidate/:id', candidate.getcandidate);
routerc.get('/api/candidate', candidate.candidate);
routerc.get('/api/Scandidate', candidate.Scandidate);
routerc.delete('/api/candidate/:id', candidate.deletecandidate);

routerc.post("/apply", (req, res) => {
  const name = req.body.name;
  const lname = req.body.lname;
  const dob = req.body.dob;
  const addr = req.body.addr;
  const gender = req.body.gender;
  const resume = req.body.resume;
  const phone = req.body.phone;
  const qulifi = req.body.qulifi;
  const ids = req.body.ids;
  const stage2 = "2";

  var email = "";
  db.query(
    "SELECT email FROM candidate_account WHERE id = ?",
    ids,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      else {
        email = result[0].email;
        console.log(email);
        const storemail = email;
        db.query(
          "INSERT INTO candidates (candidate_name,candidate_lname, candidate_dob, candidate_addr,candidate_email,candidate_phone, candidate_gender, candidate_qualification, candidate_resume) VALUES (?,?,?,?,?,?,?,?,?);UPDATE Candidate_account SET stage = ? WHERE id = ?",
          [name, lname, dob, addr, storemail, phone, gender, qulifi, resume, stage2, ids],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ message: "Form submitted Successfully" });
              console.log(storemail);
            }
          }
        );




      }
    }
  );


});

//;INSERT INTO candidate (candidate_email) SELECT email FROM candidate_account WHERE id = ?
/***************************Check email already exist*************************/

routerc.post("/email", (req, res) => {
  const email = req.body.email;
  db.query(
    "SELECT * FROM Candidate_account WHERE email = ?;",
    email,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send({ message: "candidate already exist" });
      } else {
        res.send(result);
      }
    }
  );
});



/************************** candidate login ******************************/

routerc.post("/candilogin", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM Candidate_account WHERE email = ?;",
    email,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
        bcrypt.compare(password, result[0].password, (error, response) => {
          if (response) {
            req.session.user = result;
            console.log(req.session.user);
            res.send(result);
          } else {
            res.send({ message: "Wrong email/password combination!" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});

routerc.get("/candilogin", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});


routerc.post("/forgot", (req, res) => {
  const email = req.body.email;
});


module.exports = routerc;
/*********************************************Sample Get************************************************/

routerc.get("/getcan/:id", (req, res) => {
  const email = 1;
  const id = req.params.id;

  db.query(
    "SELECT * FROM Candidates WHERE id = ?;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send(result);
        console.log("good to go");
      }
    }
  );
});
/********************************************* Selected Candidate transfer ************************************************/
routerc.post("/selectcandi", (req, res) => {
  const id = req.body.id;
  db.query(
    "SELECT * FROM selected_candidates WHERE candidate_id = ?;",
    id,
    (err, result) => {
      if (result.length > 0) {
        res.send({ message: "Candidate already Exists!!!.. " });

      }
      else {
        db.query(
          "INSERT INTO selected_candidates (`candidate_id`, `candidate_name`,`candidate_lname`, `candidate_dob`, `candidate_addr`, `candidate_email`, `candidate_phone`, `candidate_image`, `candidate_gender`, `candidate_qualification`, `candidate_resume`) SELECT* FROM candidates WHERE id = ?",
          id,
          (err, result) => {
            if (err) {
              console.log(err);
            }
            else {
              res.send({ message: "Candidate added succesfully..." });
            }
          }
        );

      }
    }
  );
});


routerc.post("/deletecandi/:id", (req, res) => {
  const id = req.params.id;
  db.query(
    "DELETE FROM candidates WHERE id = ?;",
    id,
    (err, result) => {
      if (result) {
        db.query(
              "DELETE FROM selected_candidates WHERE candidate_id = ?;",
              id,
              (err, result) => {
                if (result) {
                  res.send({ message: "Candidate deleted " });
                }
                else {
                  console.log(err);
                  res.send({ message: "unsuccessfull deleted" });
                }
              }
            );

      }
      else {
        console.log(err);
       

      }
    }
  );
});

/***************************************************************Email verification ************************************/
function randomNumber2(min, max) { 
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}  

var temp = 0;
routerc.post('/verify', async(req, res) => {
  const email = req.body.email;
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
  port: 465,
  secure: true, // use TLS
    auth: {
      user: 'thuvarakan2097@gmail.com',
      pass: 'Mathu my love2097'
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }

    
  });
  const random = randomNumber2(11111,99999)
  temp = random; 
  console.log("first temp"+ temp)
  var mailOptions = {
    from: 'thuvarakan2097@gmail.com',
    to: `${email}`,
    subject: 'Sending Email using Node.js',
    text: `This is your verification code: ${random}`
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send({message: "mail sen...",verify:random})
    }
  });
})

/*******************************register new email********************************/

routerc.post("/candireg", (req, res) => {
  const code =req.body.code;
  const verify = req.body.verify;
  const email = req.body.email;
  const password = req.body.password;
  const temp2 = parseInt(verify)
  const stage = "1";
  console.log(temp);
  console.log(temp2);
  console.log(code);
  if(code === temp2 ){
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO Candidate_account (email,password,stage) VALUES (?,?,?)",
      [email, hash, stage],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send({ message: "registered" });
        }
      }
    );
  });}
  else{
    res.send({ message: "wrong verification code" });
  }
});