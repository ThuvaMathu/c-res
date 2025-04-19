let express = require('express');
let routere = express.Router();
const bcrypt = require("bcrypt");
const db = require('../server.js');
const saltRounds = 10;
const employee = require('../controllers/employee_controller')



let date_ob = new Date();
let tdate = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
const date = year + "-" + month + "-" + tdate;



routere.get('/api/employee', employee.employee);
routere.put('/api/employee', employee.updateemployee);
routere.get('/api/employee/:id', employee.getemployee);


routere.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});
routere.get("/logout", function (req, res) {
  req.session.destroy()
  res.clearCookie('user', { path: '/' }).status(200).send({ loggedIn: false });
  //res.send({ loggedIn: false });
});

/****************************************** Login  ************************************/
routere.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM employee_credential WHERE email = ?;",
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

/*********************************************** Registration  ****************************************/
routere.post("/employeereg", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const role = "employee"
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    db.query(
      "INSERT INTO employee_credential (email,password,role) VALUES (?,?,?)",
      [email, hash, role],
      (err, result) => {
        if (err) {
          console.log(err);
        } else {
          res.send({ message: "registered" });
        }
      }
    );
  });
});
/*********************************************** Add Employee ****************************************/

routere.post("/addemployee", (req, res) => {

  const ids = req.body.id;
  const name = req.body.name;
  const lname = req.body.lname;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const addr = req.body.addr;
  const email = req.body.email;
  const quali = req.body.quali;
  const salary = req.body.salary;
  const role = req.body.role;
  const department = req.body.department;
  const description = req.body.description;
  const whpw = req.body.whpw;
  const lcount = req.body.lcount;
  const iss = 1;

  /*--------------------- transfer credentials --------------*/
  db.query(
    "SELECT * FROM employee_credential WHERE candidate_id = ?;",
    ids,
    (err, result) => {
      if (result.length > 0) {
        console.log({ result, message: "fail get emp" })
        res.send({ message: "Employee already Exists!!!.. " });

      }
      else {
        db.query(
          "INSERT INTO employee_credential (candidate_id, email, password, stage) SELECT* FROM candidate_account WHERE id = ?;",
          ids,
          (err, result) => {
            if (err) {
              console.log({ result, message: "error in credential" })
              console.log(err);
            }
            else {
              console.log({ result, message: "error in credential" })
              db.query(
                "INSERT INTO employees (candidate_id,name,lname,gender,email,address,phone,qualification,st_salary,department,em_role,description,hours, l_count) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                [ids, name, lname, gender, email, addr, phone, quali, salary, department, role, description, whpw, lcount],
                (err, result) => {
                  if (err) {
                    console.log(err);
                    console.log({ result, message: "error in credential" })
                  }
                  else {
                    //
                  }
                }
              );

            }
          }
        );

        res.send({ message: "Employee added succesfully..." });
      }
    }
  );
});
/*----------------------------- add employee detail------------------------ */

/************************************** get employee by param Id *****************************/
routere.get("/getemp/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT * FROM employees WHERE id = ?;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "somthing went wrong" })
      }
      if (result.length > 0) {
        res.send(result);
        console.log(result);
        //console.log("good to go");
      }
    }
  );
});
/************************************** get employee by param Id *****************************/
routere.post("/getemployee", (req, res) => {
  const id = req.body.id;

  db.query(
    "SELECT* FROM employees WHERE id = ?;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "somthing went wrong" })
      }
      if (result) {
        res.send(result);
        console.log(result);
      }
    }
  );
});

/************************************** update employee *****************************/
routere.put("/uemployee", (req, res) => {

  const id = req.body.id;
  const phone = req.body.phone;
  const addr = req.body.address;
  const email = req.body.email;
  const quali = req.body.qualification;
  const salary = req.body.st_salary;
  const role = req.body.em_role;
  const department = req.body.department;
  const hours = req.body.hours;

  db.query(
    "UPDATE employees SET email = ?, address = ?, phone = ?, qualification = ?, st_salary = ?, department = ?, em_role = ?, hours = ? WHERE id = ?",
    [email, addr, phone, quali, salary, department, role, hours, id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "somthing went wrong" })
      }
      else {

        console.log("updated success");
        res.send(result)
      }
    }
  );
});



/************************************** employee leave form *****************************/


routere.post("/leaveform", (req, res) => {
  const ids = req.body.ids;
  const subject = req.body.subject;
  const from = req.body.from;
  const until = req.body.until;
  const type = req.body.type;
  const reason = req.body.reason;
  const bleave = req.body.bleave;
  const status = "pending"
  db.query(
    "INSERT INTO leave_form (emp_id, leave_type, reason, subject, l_from, l_until, b_leave, date, form_status) VALUES (?,?,?,?,?,?,?,?,?)",
    [ids, type, reason, subject, from, until, bleave, date, status],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Form successfully submitted!!...." });
      }
    }
  );
});

/************************************** get leave form *****************************/



routere.post("/getform", (req, res) => {
  const id = req.body.id;

  db.query(
    "SELECT* FROM leave_form WHERE emp_id = ? ORDER BY form_id DESC LIMiT 1;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "leave form not found" });
      }
      if (result) {
        const i = result.length;

        res.send(result);
        console.log(result);
        console.log(result[1]);
        console.log(result[1]);
        console.log(i);
      }
    }
  );
});


/**************/

routere.get("/getform/:id", (req, res) => {
  const id = req.params.id;

  db.query(
    "SELECT* FROM leave_form WHERE emp_id = ? ORDER BY form_id DESC LIMiT 1;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "leave form not found" });
      }
      if (result) {
        const i = result.length;

        res.send(result);
        console.log(result);
        console.log(result[1]);
        console.log(result[1]);
        console.log(i);
      }
    }
  );
});
/********************************************************************************* Get Shedule *************************************/

routere.post("/getshedule", (req, res) => {
  const id = req.body.id;

  db.query(
    "SELECT* FROM shedule WHERE emp_id = ? ORDER BY id DESC LIMiT 1;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "shedule not found" });
      }
      if (result) {
        const i = result.length;

        res.send(result);
        console.log(result);

      }
    }
  );
});

/***********************************************************pay roll ************************************/

routere.post("/generate", (req, res) => {
  const empID = req.body.empID;
  const salary = req.body.salary;
  const deduction = req.body.deduction;
  const benefit = req.body.benefit;
  //const total = req.body.total;
  let total = parseInt(salary) - parseInt(deduction);
  total = total + parseInt(benefit);
  db.query(
    "INSERT INTO payroll (emp_id, st_salary, deduction, benefit, total, date) VALUES (?,?,?,?,?,?)",
    [empID, salary, deduction, benefit, total, date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send({ message: "Form successfully submitted!!...." });
      }
    }
  );
});

routere.post("/getpayroll", (req, res) => {
  const id = req.body.id;

  db.query(
    "SELECT* FROM payroll WHERE emp_id = ? ORDER BY id DESC LIMiT 5;",
    id,
    (err, result) => {
      if (err) {
        console.log(err);
        res.send({ message: "payroll not found" });
      }
      if (result) {
        res.send(result);
        console.log(result);

      }
    }
  );
});

/******************************************************************change pass ****************************************/

routere.post("/changepass", (req, res) => {
  const id = req.body.id;
  const password = req.body.password;
  const current = req.body.current;

  db.query(
    "SELECT * FROM employee_credential WHERE id = ?;",
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
                      "UPDATE employee_credential SET password=? WHERE id = ?",
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
/**************************************************delete employee ******************************************/
routere.post("/deleteemp", (req, res) => {
  const id = req.body.id;
  db.query(
    "DELETE FROM employees WHERE id = ?;",
    id,
    (err, result) => {
      if (result) {
        res.send({ message: "employee deleted " })
      }
      else {
        console.log(err);
       

      }
    }
  );
})




module.exports = routere;
