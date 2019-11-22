var events = require('events');

/*
partFour: 事件
*/


var myEmitter = new events.EventEmitter();
myEmitter.on('someEvent',function(message){
    console.log(message);
})

myEmitter.emit('someEvent','the event was emitted');