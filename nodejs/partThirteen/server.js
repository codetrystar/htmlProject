/*
    partThirteen: web服务器(6) 路由重构       
*/

//1.
var http = require('http');
var fs = require('fs');

function startServer(route,handle) {
    var onRequest = function (request, response) {
        console.log('Request receieved' + request.url);
        route(handle,request.url,response); 
        //转到router.js
    }
    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    //server.listen(4000);
    console.log('Server started on localhost port 3000');

}

module.exports.startServer = startServer;















