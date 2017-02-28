var fs = require('fs');
var index = fs.readFileSync(__dirname + '/../views/index.html', 'utf8');
module.exports = function(req, res) {
    res.end(index)
};
