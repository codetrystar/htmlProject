/*
    partTwelve: web服务器(5) 路由
*/

//1.输出request的内容
// var http = require('http');
// var fs = require('fs');

// function startServer() {

//     var onRequest = function (request, response) {
//         console.log(request.url);//request
//         console.log('Request received'+request);
//         response.writeHead(200, {
//             'Content-Type': 'text/html'
//         });
//         var myReadStream = fs.createReadStream(__dirname + '/index.html', 'utf8');
//         myReadStream.pipe(response);
//     }

//     var server = http.createServer(onRequest);

//     server.listen(3000, '127.0.0.1');
//     //server.listen(4000);
//     console.log('Server started on localhost port 3000');
// }

// exports.startServer = startServer; 


//2.路由
var http = require('http');
var fs = require('fs');

function startServer() {
    var onRequest = function (request, response) {
        console.log('Request receieved' + request.url);
        if (request.url === '/' || request.url === '/home') {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            fs.createReadStream(__dirname + '/index.html', 'utf8').pipe(response);
        } else if (request.url === '/review') {
            response.writeHead(200, {
                'Content-Type': 'text/html'
            });
            fs.createReadStream(__dirname + '/review.html', 'utf8').pipe(response);
        } else if (request.url === 'api/v1/records') {
            response.writeHead(200, {
                'Content-Type': 'application/json'
            });
            var jsonObj = {
                name: "Beijing",
                age: "20"
            };
            response.end(JSON.stringify(jsonObj));
        } else {
            response.writeHead(200, {
                'Content-type': 'text/html'
            });
            fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(response);
        }
    }

    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    //server.listen(4000);
    console.log('Server started on localhost port 3000');

}


exports.startServer = startServer;