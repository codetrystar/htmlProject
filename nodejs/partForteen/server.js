/*
    partForteen: web服务器(7)上 使用get方法请求发送数据       
*/

//1.
var http = require('http');
var fs = require('fs');
var url = require('url');

function startServer(route,handle) {
    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request receieved' + pathname);
        var params = url.parse(request.url,true).query;//false将输出字符串而不是json
        route(handle,pathname,response,params); 
        //转到router.js
    }
    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    //server.listen(4000);
    console.log('Server started on localhost port 3000');

}

module.exports.startServer = startServer;















