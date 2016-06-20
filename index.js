require('dotenv').config();

var http = require('http');
var setup = require('proxy');

var server = setup({
    basicAuth: {
        file: process.env.PASSWORD_FILE
    }
});

server.listen(process.env.LISTENING_PORT, function () {
    console.log('PROXY listening to ' + process.env.LISTENING_PORT);
});