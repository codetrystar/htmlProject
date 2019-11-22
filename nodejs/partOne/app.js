// **在vscode中可以按ctrl键和/键(shift键左边)单行或多行注释或解除注释
/*
    partOne:全局对象
*/ 
//1.
setTimeout(()=>{
    console.log("2 seconds have passed");
},2000)
//*****提示：()=>为es6写法，上面的例子相当于
// setTimeout(()=>{
//     console.log("2 seconds have passed");
// },2000)




//2.setInterval会不停的执行，可以按ctrl+c停止

// var time = 0;
// setInterval(function () {
//     time += 2;
//     console.log(time+" seconds have passed");
// }, 2000);





//3.

// var time = 0;
// var timer = setInterval(function () {
//     time += 2;
//     console.log(time + " seconds have passed");
//     if (time > 5) {
//         clearInterval(timer)
//     }
// }, 2000);




//4. 输出当前文件所在目录
// console.log(__dirname)
//(可以在终端那输入ls查看该目录下的文件)

//5.输出当前文件
// console.log(__filename)


