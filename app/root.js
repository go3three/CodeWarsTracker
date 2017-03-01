var fs = require('fs');
var ft= require('./users.js');
var index = fs.readFileSync(__dirname + '/../views/index.html', 'utf8');
ft.FirstTime();

module.exports = function(req, res) {

    res.end(index)
};
