/*
    partEight:web服务器(1) text/plain
*/ 
//1.
var http= require('http');

var server = http.createServer(function(request,response){
    console.log('Request received');
    response.writeHead(200,{'Content-Type':'text/plain'});
    // response.write("hello from out application");
    // response.end();
    //以上两行等同下一行no
    response.end("hello from out application");
})

server.listen(3000,'127.0.0.1');
//server.listen(4000);
console.log('Server started on localhost port 3000');



// 2.
// var http= require('http');

// var onRequest = function(request,response){
//     console.log('Request received');
//     response.writeHead(200,{'Content-Type':'text/plain'});
//     response.end("hello from out application");
// }

// var server = http.createServer(onRequest);

// server.listen(3000,'127.0.0.1');
// //server.listen(4000);
// console.log('Server started on localhost port 3000');

