const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({origin: true});

admin.initializeApp();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'caine.lloyd.nielsen@gmail.com',
        pass: 'uyqnvxmxlyijctel'
    }
});

exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
      
        // getting dest email by query string
        var fullName = req.query.fullName;
        var organization = req.query.organization;
        var emailAddress = req.query.emailAddress;
        var message = req.query.message;

        const toAddress = 'beyondtheseaside007@gmail.com';
        const fromAddress = 'austinguerrero.com <caine.lloyd.nielsen@gmail.com>';

        var mailOptions = {
            from: fromAddress,
            to: toAddress,
            subject: 'New form response from ' + fullName,
            html: `
            <p style="font-size: 16px;">Full Name: ${fullName}</p>
            <p style="font-size: 16px;">Organization: ${organization}</p>
            <p style="font-size: 16px;">Email Address: ${emailAddress}</p>
            <p style="font-size: 16px;">Message: ${message}</p>
            <br />
            `
        };
  
        // returning result
        return transporter.sendMail(mailOptions, (erro, info) => {
            if(erro){
                return res.send(erro.toString());
            }
            return res.send(`Thank you for your message, <a href='https://austinguerrero.com/'>return to the site.</a>`);
        });
    });    
});
