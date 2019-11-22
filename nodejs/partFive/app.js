// 1.
var fs = require('fs');
//readFileSync()为fs的同步方法
var readMe= fs.readFileSync("readMe.txt","utf8");
console.log(readMe);


//2.
// var fs = require('fs');

// var readMe = fs.readFileSync("readMe.txt","utf8");

// fs.writeFileSync("writeMe.txt",readMe);

//3.同步执行示例
// var fs = require('fs');
// var readMe = fs.readFileSync("readMe.txt","utf8");

// console.log(readMe);

// //同步的操作可能会阻塞,例如下面程序会使得停止4秒
// var waitTill = new Date(new Date().getTime() + 4* 1000);
// while(waitTill > new Date()){}

// console.log("finished");

//3.nodejs在执行js是单线程的，但并不代表nodejs是单线程
//异步
// var fs = require('fs');
// var readMe = fs.readFile("readMe.txt","utf8",function(err,data){
//     console.log(data);
// });

// console.log("finished");

//4.
// var fs = require('fs');
// var readMe = fs.readFile("readMe.txt","utf8",function(err,data){
//     fs.writeFile('writeMe.txt',data,function(){
//         console.log('writeMe has finished!');
//     })
// });

// console.log("finished");
