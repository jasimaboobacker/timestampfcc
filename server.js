var express = require("express");
var router = require("./app/router/index.js");

var app = express();

router(app);

var port = process.env.PORT||8080;
app.listen(port);
