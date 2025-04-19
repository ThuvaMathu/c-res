"use strict";
const nodemailer = require("nodemailer");
let rando = require('random-number-in-range');

let mainCode = 0;
// Function to generate random number 
function randomNumber(min, max) { 
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
} 
// async..await is not allowed in global scope, must use a wrapper
async function candiMail(emailID) {
    code(); 
    let x = mainCode.toString();
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
        user: 'bobthebuildertest44@gmail.com',
        pass: 'c5t7@p954f5d4eg5b1r5', 
        },
    });
        //gmail: bobthebuildertest44@gmail.com
        //password: c5t7@p954f5d4eg5b1r5
        //birthday:28/01/1950

    const mailOptions = {
        from: 'thisisAtestMailfrombob@builder.com', // sender address
        to: emailID, // list of receivers
        subject: "Kevin Joseph you are under arrest", // Subject line
        text: "Please show this code to jay if you dont want to get arrested " + x, // plain text body
    }

    // send mail with defined transport object
    let info = await transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

function code() {
    mainCode = randomNumber(100000, 999999);
}



module.exports = { candiMail };