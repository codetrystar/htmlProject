/*
    partNine:web服务器(2) json
*/

//1.
var http = require('http');

var onRequest = function (request, response) {
    console.log('Request received');
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });
    var myObj = {
        name: "小华",
        job: "student",
        age:"18"
    }

    response.end(JSON.stringify(myObj));
}

var server = http.createServer(onRequest);

server.listen(3000, '127.0.0.1');
//server.listen(4000);
console.log('Server started on localhost port 3000');