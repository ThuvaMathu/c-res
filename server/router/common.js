let express = require('express');
let routerx = express.Router();
const bcrypt = require("bcrypt");
const db = require('../server.js');
const saltRounds = 10;
const candidate = require('../controllers/candidate_controller.js');
const mail = require('../Mail');
const nodemailer = require("nodemailer");
module.exports = routerx;

/*************************Insert candidate details**********************************************/
let date_ob = new Date();
let tdate = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let date = year + "-" + month + "-" + tdate;


function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

routerx.post("/forget1", (req, res) => {
    const email = req.body.email;
    db.query(
        "SELECT * FROM employee_credential WHERE email = ?;",
        email,
        (err, result) => {
            if (err) {
                console.log(err);
            }
            if (result.length > 0) {
                res.send({ match: true });

            } else {
                res.send({ message: "Employee not exists" });

            }
        }
    );
});


var tempx = 0;
routerx.post('/forget2', async (req, res) => {
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
    const random = randomNumber(11111, 99999)
    tempx = random;
    var mailOptions = {
        from: 'thuvarakan2097@gmail.com',
        to: `${email}`,
        subject: 'Sending Email using Node.js',
        text: `This is your verification code: ${random}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            res.send({ status: true, verify: random })
        }
    });
})


routerx.post("/forget3", (req, res) => {
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
                bcrypt.hash(password, saltRounds, (err, hash) => {
                    if (err) {
                        console.log(err);
                    }

                    db.query(
                        "UPDATE employee_credential SET password=? WHERE email = ?",
                        [hash, email],
                        (err, result) => {
                            if (err) {
                                console.log(err);
                            } else {
                                res.send({ message: "password successfully updated" });
                            }
                        }
                    );
                });
            } else {
                res.send({ message: "somthing went wrong" });
            }
        }
    );
});
