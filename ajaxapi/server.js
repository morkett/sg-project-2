var express = require('express');
var router = require('./config/router');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.use(router);

app.listen(PORT, function () {
  console.log('Server listening on ' + PORT);
});

module.exports = app;
