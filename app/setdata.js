var oldscores = require('./oldscores.js');
module.exports = function(da,cb) {

    oldscores.getdata(da, function(body) {
        obj = JSON.parse(body)
    console.log(obj)
        cb()
    })

}
