"use strict"

//default params
// function greet($greeting="hola"){

// 	console.log($greeting);
// }
// greet();

let args1 = [1,2,3];

let args2 = [2,6,8];

function test(){


	console.log(args1 +","+args2);
}


//with es5
// test.apply(null,args);
//with es6 we can use spread operator


test(...args1 ,...args2);