var timeUtil = require(process.cwd()+"/app/controller/timeservice.server.js");

module.exports = function(app){
    var timer = new timeUtil();
    app.route('/')
    .get(function(req, res) {
        console.log("Sending fiels")
        res.sendfile(process.cwd()+'/public/index.html'); 
    });
    
    app.route('/:timestring')
    .get(timer.convertTime);
}