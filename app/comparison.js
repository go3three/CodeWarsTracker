var getdataFirstTime = require('./getdataFirstTime.js');
var googleusers = require('./getdata.js');
var userdata = require('./userdata.js');
var array = [];

function comparison(cb) {
    var idle = [];
    getdataFirstTime(function(user, score) {
        var l = 1;
        user.forEach(function(elm) {
            userdata(elm, function(data) {
                var obj = JSON.parse(data);
                array.push(obj);
                if (l === user.length) {
                    array = array.sort(compare);
                    array.forEach(function(e) {
                        var thenewscore = e.ranks.languages.javascript.score;
                        var sc = score[array.indexOf(e)];
                        if (sc == thenewscore) {
                            idle.push(user[array.indexOf(e)])
                            if (array.length == array.indexOf(e) + 1) {
                                cb(idle);
                            }
                        }
                    })
                }
                l++;
            });
        })
    })

}
module.exports = {
    comparison: comparison
}

function compare(a, b) {
    if (a.username < b.username)
        return -1;
    if (a.username > b.username)
        return 1;
    return 0;
}
