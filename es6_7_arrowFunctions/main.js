"use strict"

function prefixer(prefix){
	this.prefix=prefix;
}

prefixer.prototype.prefixArray = function(arr) {
	
	// let that =this;
	return arr.map((x) =>{

		console.log(this.prefix +x);
	})
};


let pre = new prefixer("good morning ");
pre.prefixArray(['sumukh','sassi']);


//with normal call back functions we have to use lexical this, arrow function eliminates the ne
//ed of using lexixal this

// let add = function(a,b){
// 	let sum = a+b;
// 	console.log(sum);
// 	return false;
// }

// add(2,2);


let add = (a,b) =>{
	let sum = a+b;
	console.log(sum);
	return false;
}

add(8,2);