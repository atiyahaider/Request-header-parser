// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// Serve the index.HTML file 
var absolutePath = __dirname + "/views/index.html"
app.get("/", function(req, res) {
        res.sendFile(absolutePath);
});

// Serve static assets (CSS)
var absoluteAssetsPath = __dirname + "/public";
app.use(express.static(absoluteAssetsPath))

// API to get user information
app.get("/api/whoami", function (req, res) {
  res.json({"ipaddress": req.headers["x-forwarded-for"], "language": req.headers["accept-language"], "software": req.headers["user-agent"]});
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
