/*
partSeven：流和管道
*/

//1.

var fs = require('fs');

var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');

myReadStream.on('data',function(chunk){
    console.log('new chunk received');
    console.log(chunk);
})



//2.

// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
// /*
// 上面这一句可以等同于下面这两句
// var myReadStream = fs.createReadStream(__dirname+'/readMe.txt');
// myReadStream.setEncoding('utf8');
// */

// var data="";

// myReadStream.on('data',function(chunk){
//     data += chunk;
// })

// myReadStream.on('end',function(){
//     console.log(data);
// })





//3.

// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
// /*
// 上面这一句可以等同于下面这两句
// var myReadStream = fs.createReadStream(__dirname+'/readMe.txt');
// myReadStream.setEncoding('utf8');
// */
// var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');

// var data="";

// myReadStream.on('data',function(chunk){
//     myWriteStream.write(chunk);
// })

// myReadStream.on('end',function(){
//     console.log('finished');
// })





//4.

// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');

// var writeDate = "hello world";
// myWriteStream.write(writeDate,'utf8');
// myWriteStream.end();
// myWriteStream.on('finish',function(){
//     console.log('finished');
// })


//5.使用管道实现复制文件的操作

// var fs = require('fs');

// var myReadStream = fs.createReadStream(__dirname+'/readMe.txt','utf8');
// var myWriteStream = fs.createWriteStream(__dirname+'/writeMe.txt');

// myReadStream.pipe(myWriteStream);