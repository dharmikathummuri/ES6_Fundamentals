"use strict"
//generators

function *g1(){

	console.log('hello');

	yield 'yeild 1 ran..';
	console.log('world');

	yield 'yeild 2 ran..';
	return 'namaste';
}

var g = g1();
// console.log(g.next());
// console.log(g.next());
// console.log(g.next().value);

for(let gen of g){

	console.log(gen);
}