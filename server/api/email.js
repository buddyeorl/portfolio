const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const nodemailer = require('nodemailer');

//send email
router.post('/send', (req, res) => {
    let transporter = nodemailer.createTransport({
        service: process.env.SERVICE,
        auth: {
            user: process.env.EMAIL,
            pass: process.env.ACCESS
        }
    });

    let head = '<head>';
    let style = '<style>* {box-sizing: border-box;}.column {float: left;width: 33.33%;padding: 5px;}.row::after {content: "";clear: both;display: table;}</style></head>';
    let body = `<body><p Style="text-align=left;font-size:12px;font-weight:100;">You got a message from ${req.body.name}</p><p>Email: ${req.body.email}</p><p>${req.body.message}</p>`;
    let mainDiv = '<div class="row">';
    let end = '</div></body>';

    let mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: `${req.body.name} sent you Message from alexcode.io`,
        text: '',
        html: head + style + body + mainDiv + end
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(JSON.stringify(error));
            res.status(400).send(new Error('Invalid email, please correct and try again'));
        } else {
            console.log('Email sent ' + info.response);
            res.json({ result: 'Email sent succesfully', success: 'Email Sent Succesfully' });
        }
    });

});


module.exports = router;
