/*
partSix: 创建和删除目录
*/


var fs = require('fs');

//1.
//异步方法，删除文件
//(1)同步的如下：
// fs.unlinkSync("writeMe.txt");
//(2)异步的如下：
// fs.unlink("writeMe.txt",function(){
//     console.log("delete writeMe.txt file");
// })

//同步创建文件可以如此
// fs.writeFileSync("writeMe.txt",' ');


//2.
//同步创建一个目录
// fs.mkdirSync('stuff');

//同步删除目录
// fs.rmdirSync('stuff');



//3.复制
//异步创建一个目录
// fs.mkdir('stuff',function(){
//     fs.readFile('readMe.txt','utf8',function(err,data){
//         fs.writeFile('./stuff/writeMe.txt',data,function(){
//             console.log('copy successfully');
//         })
//     })
// })


//管道
