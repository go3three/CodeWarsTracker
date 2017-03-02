var comparison = require('./comparison.js');
var b = require("./getdata.js");
var accountSid = 'AC583c84caa6f0bfd1a195d475d8a2b766';
var authToken = '3751429e2cfa85831122ffc2780e7970';
var client = require('twilio')(accountSid, authToken);


function sender() {
  // setInterval(
  // setInterval(function(cb){

    comparison.comparison(function(user) {
      console.log("here 2");
        if (user.length > 0) {
            b(function(u, phone) {
                user.map(function(val) {
                    console.log("CodewarsReminder: get back work!");
                    client.messages.create({
                        to: "+972"+phone[user.indexOf(val)],
                        From: "+19045074062",
                        body:"CodewarsReminder: get back work! ",
                    }, function(err, message) {
                      console.log(err);
                        console.log(message);
                        console.log(err);
                    });
                })
            })
        } else {
            console.log("no one lazy");
        }
        })
    // },m *10000)
}

module.exports = {
    sender: sender
}

function transform(list) {
    return list.map(function(elem) {
        array = {
            user: elem[1],
            score: elem[2]
        }
        return array
    });
}
