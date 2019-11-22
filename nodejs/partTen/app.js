/*
    partTen:web服务器(3) text/html
*/

var http = require('http');
var fs = require('fs');

var onRequest = function (request, response) {
    console.log('Request received');
    response.writeHead(200, {'Content-Type': 'text/html'});
    var myReadStream = fs.createReadStream(__dirname+'/index.html','utf8');
    myReadStream.pipe(response);
}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
//server.listen(4000);
console.log('Server started on localhost port 3000');