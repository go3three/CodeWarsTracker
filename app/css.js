var fs = require('fs');
var css = fs.readFileSync(__dirname + '/../views/style.css', { encoding: 'utf8' });
module.exports = function(req, res) {
    res.writeHead(200, {
        'Content-type': 'text/css'
    })
    res.write(css)
    res.end()
}
