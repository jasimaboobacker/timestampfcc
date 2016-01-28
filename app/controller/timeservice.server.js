var moment = require('moment');

function timeUtil(){
    this.convertTime = function(req,res){
        console.log("Hello");
        var date = req.params.timestring;
        var unix = null;
        var natural = null;
        console.log(date);
        if (date >= 0) {
            console.log(date);
            unix = +date;
            natural = unixToNat(unix);
        } 
        
        if (isNaN(+date) && moment(date, "MMMM D, YYYY").isValid()) {
            unix = natToUnix(date);
            natural = unixToNat(unix);
        }
        
        var dateObj = { "unix": unix, "natural": natural };
        res.send(JSON.stringify(dateObj));
    }
    
    function natToUnix(date) {
        return moment(date, "MMMM D, YYYY").format("X");
    }
    
    function unixToNat(unix) {
        return moment.unix(unix).format("MMMM D, YYYY");
    }
}

module.exports = timeUtil;