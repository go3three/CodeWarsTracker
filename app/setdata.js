var oldscores = require('./oldscores.js');
module.exports = function(da,cb) {

    oldscores.setdata(da, function(body) {
        obj = JSON.parse(body)
        
    })

}
