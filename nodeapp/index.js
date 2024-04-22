var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send('{ "response": "Hello, I am Dissanyaka D.M.S.C." }');
});

app.get("/will", function (req, res) {
  res.send('{ "response": "EG/2020/3905" }');
});
app.get("/ready", function (req, res) {
  res.send('{ "response": " Great!, Welcome to UOR" }');
});

//listen to port 3000 by default
app.listen(process.env.PORT || 5555, function () {
  console.log("App listening on port 5555!");
});

module.exports = app;
