var b = require("./getFirstTime.js");
module.exports = function(cb) {
    b.getdata(function(body) {
        obj = JSON.parse(body)
        var user = [];
        var score = [];
        var h = transform(obj.values);
        h = h.sort(compare);
        h.forEach(function(ele) {
            user.push(ele.user);
            score.push(ele.score);
        })
        cb(user, score)
    })
};

function transform(list) {
    return list.map(function(elem) {
        array = {
            user: elem[1],
            score: elem[2]
        }
        return array
    });
}

function compare(a, b) {
    if (a.user < b.user)
        return -1;
    if (a.user > b.user)
        return 1;
    return 0;
}
