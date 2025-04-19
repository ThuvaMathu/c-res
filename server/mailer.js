var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'thuvarakan2097@gmail.com',
    pass: 'Thuvarakanmathusa'
  }
});

var mailOptions = {
  from: 'thuvarakan2097@gmail.com',
  to: 'thuvamathu618@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});