/*
    partForteen: web服务器(7)上 使用get和post方法请求发送数据       
*/
/*
    有bug   

*/ 




var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');

//1.
// function startServer(route, handle) {
//     var onRequest = function (request, response) {
//         var pathname = url.parse(request.url).pathname;
//         console.log('Request receieved' + pathname);
//         var data = "";
//         request.on("error", function (err) {
//             console.error(err);
//         }).on(data, function(chunk){
//             data +=chunk;
//         }).on('end',function(){
//             if(request.method === "POST"){
//                 route(handle,pathname,response,querystring.parse(data)); 
//             }else{//假设只考虑get和post
//                 var params = url.parse(request.url,true).query;
//                 route(handle,pathname,response,params);
//             }
//         })
//     }
//     var server = http.createServer(onRequest);

//     server.listen(3000, '127.0.0.1');
//     //server.listen(4000);
//     console.log('Server started on localhost port 3000');

// }


//2.
function startServer(route, handle) {
    var onRequest = function (request, response) {
        var pathname = url.parse(request.url).pathname;
        console.log('Request receieved' + pathname);
        var data = [];
        request.on("error", function (err) {
            console.error(err);
        }).on(data, function (chunk) {
            data.push(chunk);
        }).on('end', function () {
            if (request.method === "POST") {
                if(data.lenth > 1e6){
                    request.connection.destroy();
                }
                data = Buffer.concat(data).toString();
                route(handle, pathname, response, querystring.parse(data));
            } else { //假设只考虑get和post
                var params = url.parse(request.url, true).query;
                route(handle, pathname, response, params);
            }
        })
    }
    var server = http.createServer(onRequest);

    server.listen(3000, '127.0.0.1');
    //server.listen(4000);
    console.log('Server started on localhost port 3000');

}

module.exports.startServer = startServer;