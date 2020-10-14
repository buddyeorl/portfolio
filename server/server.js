//initialize path
//file path related imports
const path = require('path');

//initialize express
const express = require('express');

//middlewares
const bodyParser = require('body-parser');

//initialize app
const app = express();

// CORS
let cors = require('cors');

//========================initialize middlewares=========================//
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
//Log all access path and urls
app.use((req, res, next) => {
    console.log('Log ==> ', new Date(), ' IP', req.ip, ' ', req.originalUrl);
    next();
})
if (process.env.PORT) {
    //redirects from http to https middleware
    app.use((req, res, next) => {
        if ((req.get('X-Forwarded-Proto') !== 'https')) {
            res.redirect('https://' + req.get('Host') + req.url);
        } else
            next();
    });

}
//statics
app.use(express.static("../client/build"));
//=========================================================================//

//set port for server
app.set('port', (process.env.PORT || 3001));


//routes
const send = require('./api/email')
app.use('/api', send);

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, "../client", "build", "index.html"), function (err) {
        if (err) {
            res.status(500).send(err)
        }
    })
})

//port
app.listen(app.get("port"), () => {
    console.log(`Server is running on port ${app.get('port')}`);
})