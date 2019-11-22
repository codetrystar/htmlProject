var counter = function (arr) {
    return "There are " + arr.length + " elements in the array";
}

//ES6
var adder = function(a,b){
    //``为字母键上面的1与！键左边的键
    return `the sum of the 2 numbers is ${a+b}`;
}

var pi = 3.1415926;
/*
module.exports.counter = counter;
module.exports.adder = adder;
module.exports.pi = pi;
*/
module.exports = {
    counter : counter,
    adder : adder,
    pi:pi
}
