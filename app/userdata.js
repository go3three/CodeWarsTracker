module.exports = function(username, cb) {
    var https = require('https');
    var options = {
        host: "www.codewars.com",
        port: "443",
        method: "GET",
        path: "/api/v1/users/" + username,
        headers: {
            'Authorization': 'sM1mDr8Ns1vafox71xL9'
        }
    }
    var request = https.request(options, function(res) {
        res.on('data', function(chunk) {
            cb(chunk)
        });
    });
    request.on('error', function(err) {
        console.log('err', err);
    });
    request.end();
    return
}
