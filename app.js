var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.json({"message":"Hello World!"})
});

app.listen(8001, function () {
  console.log('Example app listening on port 8001!');
});
