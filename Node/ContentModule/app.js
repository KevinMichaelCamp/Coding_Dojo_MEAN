const http = require('http');
const fs = require('fs');
const path = require('path')
const static_contents = require('./static.js');

const server = http.createServer(static_contents)

server.listen(6789);
console.log("AHOY - Running in localhost at port 6789");
