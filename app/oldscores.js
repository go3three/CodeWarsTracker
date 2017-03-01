'use strict';

var https = require('https');
var google = require('googleapis');
var key = require('../key.json');
var utils = require('../utils.js');
var SHEET_ID = '1YC76BjTB7DELD_dvERePZvbhnHR_5IxXG76MWj5Ui28';

function setdata(da,cb) {
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
            path: `/v4/spreadsheets/${SHEET_ID}/values/Sheet1!A2:D6?valueInputOption=USER_ENTERED`,
            method: 'PUT',
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
        req.write(da);
        req.end();
    });

}

module.exports = {
    setdata: setdata
}
