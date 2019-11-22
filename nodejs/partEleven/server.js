/*
    partElevent:web服务器(4) 模块化思想组织代码 
*/

var http = require('http');
var fs = require('fs');

function startServer() {

    var onRequest = function (request, response) {
        console.log('Request received');
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
        myReadStream.pipe(response);
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    //server.listen(4000);
    console.log('Server started on localhost port 3000');
}

exports.startServer = startServer; 