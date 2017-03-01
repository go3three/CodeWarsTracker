var fs = require('fs');

var js = fs.readFileSync(__dirname + '/fun.js', { encoding: 'utf8' });
module.exports = function(req, res) {
  console.log("main.js");

    res.writeHead(200, {
        'Content-type': 'application/javascript'
    })
    res.write(js)
    res.end()
}
