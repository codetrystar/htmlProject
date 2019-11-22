var server = require('./server');
var router = require('./router');
var handler = require('./handler');

var handle={};
handle['/']=handler.home;
handle['/home']=handler.home;
handle['/review']=handler.review;
handle['/api_records']=handler.api_records;

server.startServer(router.route,handle);
//转到server.js

