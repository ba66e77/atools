#!/bin/phantomjs/phantomjs

/**
Set the configuration options below to valid values.

*/
// BEGIN CONFIGURATION
var baseurl  = '';
var userName = 'username';
var password = 'password';
// END CONFIGURATION

var page = require('webpage').create(),
  system = require('system'),
  sitename;

var sitename = system.args[1];

var url = baseurl + sitename;

page.settings.userName = userName;
page.settings.password = password;

page.viewportSize = { width: 800, height: 600 };
page.open(url, function (status) {
    if (status !== 'success') {
        console.log('Unable to access the network!');
    } else {
        page.evaluate(function () {
            var body = document.body;
            body.style.backgroundColor = '#fff';
        });
        page.render('output/' + sitename + '.png');
    }
    phantom.exit();
});
