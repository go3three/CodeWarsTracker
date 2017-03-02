var b = require("../google.js");
module.exports = function(cb) {
    b.getdata(function(body) {
        obj = JSON.parse(body)
        var user = [];
        var phone = [];
        var h = transform(obj.values);
        h = h.sort(compare);
        h.forEach(function(ele) {
            user.push(ele.user);
            phone.push(ele.phone);
        })
        cb(user, phone)
    })
};

function transform(list) {
    return list.map(function(elem) {
        array = {
            user: elem[2],
            phone: elem[3]
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
