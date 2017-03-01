'use strict';

var https = require('https');
var google = require('googleapis');
var key = require('./key.json');
var utils = require('./utils.js');
var SHEET_ID = '1YC76BjTB7DELD_dvERePZvbhnHR_5IxXG76MWj5Ui28';

function getdata(cb) {
    var store = '';
    var jwtClient = new google.auth.JWT(
        key.client_email,
        null,
        key.private_key, ['https://www.googleapis.com/auth/spreadsheets'],
        null
    );

    jwtClient.authorize((err, tokens) => {
        if (err) {
            console.log(err);
            return;
        }
        var opts = {
            hostname: 'sheets.googleapis.com',
            port: 443,
            path: `/v4/spreadsheets/${SHEET_ID}/values/Sheet1:append?valueInputOption=USER_ENTERED`,
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${tokens.access_token}`
            }
        };

        var req = https.request(opts, function(res) {
            res.on('data', (chunk) => {
                store = store + chunk
            });
            res.on('end', () => {
                cb(store)
            });
        });
        var d = '{ "majorDimension": "ROWS",\
  "values": [\
    ["Item", "Cost", "Stocked", "Ship Date"],\
    ["aa", "$222.50", "0", "3/1/2016"],\
    ["z", "$15", "2", "3/15/2016"],\
    ["Eaaaangine", "$100", "1", "30/20/2016"],\
    ["Total2222s", "=SUM(B2:B4)", "=SUM(C2:C4)", "=MAX(D2:D4)"]\
  ], }'
        req.write(d);
        req.end();
    });

}
getdata(function(Data) {

})
module.exports = {
    getdata: getdata
}
