var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello ' + eval(req.query.q));
  console.log(req.query.q);
});
const port = +process.env.PORT || 8080;
app.listen(port, function () {
  console.log('Example app listening on port 8080!');
});
