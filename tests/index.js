var shot = require('shot');
var test = require('tape');
var IndexFrontEnd = require('../main.js');

var fs = require('fs');


test('GET /: should return datalist html', function(t) {
    shot.inject(IndexFrontEnd, { method: 'GET', url: '/' }, function(res) {
      console.log(res.payload);
        var indexOf = res.payload.indexOf('table');
        t.notEqual(indexOf, -1, 'got table somewhere in the html');
        t.equal(res.statusCode, 200, 'index file exists ');
        t.end();
    });
});
