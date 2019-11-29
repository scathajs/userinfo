var express = require('express');
var app = express();
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));

app.get("/", function (req, res) {
    res.send('Welcome to userinfo server')
});

app.get('/api/whoami/', function(req, res) {
    console.log(req);

    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.get('User-Agent')
    });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});