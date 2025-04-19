const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const mail = require("./Mail");
const nodemailer = require("nodemailer");
global.__basedir = __dirname;

const port = 3001;
// initialize session ********************************************
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "user",
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24 * 1000,
    },
  })
);
const env = require('./config/env.js')
const db = mysql.createConnection({
  user: env.username,
  host: env.host,
  password: env.password,
  database: env.database,
  multipleStatements: env.multipleStatements,
});
module.exports = db;
let routerc = require('./router/candidate.js');
let routere = require('./router/employee.js');
let routerm = require('./router/manager.js');
let routerx = require('./router/common.js');
const { exists } = require("fs");
const { Console } = require("console");

app.use(bodyParser.json());
app.use(express.static('resources'));
app.use('/', routerc);
app.use('/', routere);
app.use('/', routerm);
app.use('/', routerx);






// server connection*****************************************************************
const server = app.listen(3001, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})






//SENDS EMAIL TO CANDIDATE FOR CONFIRMATION.
//mail.candiMail("bobthebuildertest44@gmail.com").catch(console.error);

// server connection*****************************************************************


app.get("/login", (req, res) => {
  if (req.session.user) {
    res.send({ loggedIn: true, user: req.session.user });
  } else {
    res.send({ loggedIn: false });
  }
});

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.post('/smail', async (req, res) => {
  const email = req.body.email;
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // use TLS
    auth: {
      user: 'bobthebuildertest44@gmail.com',
      pass: 'c5t7@p954f5d4eg5b1r5'
    },
    tls: {
      // do not fail on invalid certs
      rejectUnauthorized: false
    }


  });
  const random = randomNumber(11111, 99999)
  var mailOptions = {
    from: 'bobthebuildertest44@gmail.com',
    to: `${email}`,
    subject: 'Sending Email using Node.js',
    text: `This is your verification code: ${random}`
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
      res.send({ message: "mail sen...", verify: random })
    }
  });
})