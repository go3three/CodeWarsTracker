var fs = require('fs');
var css = fs.readFileSync(__dirname + '/fun.js', { encoding: 'utf8' });
module.exports = function(req, res) {
    res.writeHead(200, {
        'Content-type': 'application/javascript'
    })
    res.write(css)
    res.end()
}
