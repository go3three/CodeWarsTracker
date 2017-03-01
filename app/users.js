var googleusers = require('./getdata.js');
var codewars = require('./userdata.js');
var sd = require('./setdata.js');
var username;
var ob = '';
var ft = 1;
googleusers(function(u, p) {
    var store = '';
    u.forEach(function(elm) {
        codewars(elm, function(body) {
            data = body.toString();
            data = JSON.parse(data);
            var score = data.ranks.languages.javascript.score;
            username = data.username;
            var name = data.name;
            var phone = p[u.indexOf(elm)];
            var head = '{ "majorDimension": "ROWS","values":[';
            var tail = '], }';
            var arr = [];
            if (ft === 1) {
                store = head;
                arr = '["' + name + '","' + username + '","' + score + '","' + phone + '"],';
                store = store + arr;
                ft++;
            } else if (ft == u.length) {
                arr = '["' + name + '","' + username + '","' + score + '","' + phone + '"],';
                store = store + arr;
                store = store + tail;
                sd(store, function() {});
            } else {
                arr = '["' + name + '","' + username + '","' + score + '","' + phone + '"],';
                store = store + arr;
                ft++;
            }
        })
    })
});
