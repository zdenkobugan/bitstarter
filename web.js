var fs = require('fs');
var express = require('express');
var filename = "index.html";
var app = express.createServer(express.logger());
var buffer = new Buffer(fs.readFileSync(filename));
var message = buffer.toString();
app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
