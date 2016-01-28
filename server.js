var express = require("express");
var router = require("./app/router/index.js");

var app = express();

router(app);

app.listen(8080);
