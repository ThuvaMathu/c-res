let express = require('express');
let routerm = express.Router();
const bcrypt = require("bcrypt");
const db = require('../server.js');
const saltRounds = 10;


let date_ob = new Date();
let tdate = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
const date = year + "-" + month + "-" + tdate;

routerm.post("/managerreg", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const role = req.body.role;
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) {
        console.log(err);
      }
  
      db.query(
        "INSERT INTO manager_credential (email,password,role) VALUES (?,?,?)",
        [email, hash, role],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send({message:"registered"});
          }
        }
      );
    });
  });

/****************************************** Login  ************************************/
routerm.post("/managerlogin", (req, res) => {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
      "SELECT * FROM manager_credential WHERE email = ?;",
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

  routerm.get("/managerlogin", (req, res) => {
    if (req.session.user) {
      res.send({ loggedIn: true, user: req.session.user });
    } else {
      res.send({ loggedIn: false });
      console.log("login false")
    }
  });
/****************************************** Login  ************************************/

routerm.post("/noun",(req,res) => {
  const sender = req.body.sender;
  const title = req.body.title;
  const id = req.body.id;
  const content = req.body.content;

  db.query(
    "INSERT INTO announcement (sender_id, sender, title, content, date) Values (?,?,?,?,?)",
    [id,sender,title,content,date],
    (err,result) => {
      if(result){
        res.send({message: "announcement Succesfully send to all"});
        console.log("announcement updated")
      }
      else{
        res.send(err);
        console.log(err)
      }
    }

  );
});



routerm.get("/noun",(req,res) => {
 db.query(
    "SELECT * FROM announcement ORDER BY id DESC LIMiT 10",
    (err,result) => {
      if(result){
        res.send(result);
        console.log("announcement sended")
      }
      else{
        res.send(err);
        console.log(err)
      }
    }

  );
});


routerm.get("/form",(req,res) => {
  db.query(
     "SELECT * FROM leave_form",
     (err,result) => {
       if(result){
         res.send(result);
         console.log("form sended")
       }
       else{
         res.send(err);
         console.log(err)
       }
     }
 
   );
 
 
 });

 /********************************************update form */
 routerm.post("/updateform",(req,res) => {
  const status = req.body.status;
  const comment = req.body.comment;
  const id = req.body.id;
  const empid = req.body.empid;
  const lcount = req.body.lcount;
  db.query(
    "UPDATE leave_form SET form_status = ?, comments = ? WHERE form_id = ?; UPDATE employees SET l_count = ? WHERE form_id = ?;",
    [status, comment, id, lcount, empid],
    (err,result) => {
      if(result){
        //res.send({message: "responce sednded"});
        console.log("responce sednded")
        console.log(result)
        console.log(id)
        console.log(comment)
        console.log(status) 
        console.log(lcount) 
        console.log(empid) 
        db.query(
          "UPDATE employees SET l_count = ? WHERE id = ?;",
          [lcount, empid],
          (err,result) => {
            if(result){
              res.send({message: "responce sednded"});
              console.log("responce sednded")
              console.log(result)
              console.log(id)
              console.log(comment)
              console.log(status) 
              console.log(lcount) 
              console.log(empid) 
            }
            else{
              res.send(err);
              console.log(err)
            }
          }
      
        );


      }
      else{
        res.send(err);
        console.log(err)
      }
    }

  );


});

 /**************************************************** shedule system *********************************/

 routerm.post("/update_shedule",(req,res) => {
   const id = req.body.id;
   const other = req.body.other;
   const monf = req.body.monf;const mont = req.body.mont;
   const tuef = req.body.tuef;const tuet = req.body.tuet;
   const wedf = req.body.wedf;const wedt = req.body.wedt;
   const thuf = req.body.thuf;const thut = req.body.thut;
   const frif = req.body.frif;const frit = req.body.frit;
   const satf = req.body.satf;const satt = req.body.satt;
   const sunf = req.body.sunf;const sunt = req.body.sunt;
  
  

  db.query(
    "INSERT INTO shedule (emp_id, mon_from, mon_to, tue_from, tue_to, wed_from, wed_to, thu_from, thu_to, fri_from, fri_to, sat_from, sat_to, sun_from, sun_to, other) Values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
    [id,monf,mont,tuef,tuet,wedf,wedt,thuf,thut,frif,frit,satf,satt,sunf,sunt, other, date],
    (err,result) => {
      if(result){
        res.send({message: "Shedule updated"});
        console.log("Shedule updated")
      }
      else{
        res.send(err);
        console.log(err)
      }
    }

  );
});



routerm.get("/noun",(req,res) => {
 db.query(
    "SELECT * FROM announcement",
    (err,result) => {
      if(result){
        res.send(result);
        console.log("announcement sended")
      }
      else{
        res.send(err);
        console.log(err)
      }
    }

  );


});
/******************************************************************change pass ****************************************/

routerm.post("/managerpass", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const current = req.body.current;

  db.query(
    "SELECT * FROM manager_credential WHERE id = ?;",
    id,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }

      if (result.length > 0) {
              bcrypt.compare(current, result[0].password, (error, response) => {
                if (response) {

                  bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) {
                      console.log(err);
                    }

                    db.query(
                      "UPDATE manager_credential SET password=? WHERE id = ?",
                      [hash, id],
                      (err, result) => {
                        if (err) {
                          console.log(err);
                        } else {
                          res.send({ message: "password successfully updated" });
                        }
                      }
                    );
                  });

                  //console.log(result);
                  //res.send(result);
          } else {
            res.send({ message: "Wrong Current password" });
          }
        });
      } else {
        res.send({ message: "User doesn't exist" });
      }
    }
  );
});


module.exports = routerm;
