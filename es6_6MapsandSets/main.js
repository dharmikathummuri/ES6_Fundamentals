"use strict"

// let myArray = [24,48,68,72];

// let mySet = new Set(myArray);
// mySet.add("dharmika");
// mySet.add({a:1,b:2});

// console.log(mySet);
// mySet.delete(68);
// console.log(mySet);

// console.log(mySet.size);
// // mySet.clear();
// // console.log(mySet);
// mySet.forEach(function(val){

// console.log(val);

// });

// let myMap = new Map([["a1","hello"],["b2","see you"]]);
// console.log(myMap);
// myMap.set("c3","foo");

// console.log(myMap);

var wmap = new WeakSet();

let a ={

	a1:21,
	a2:"dharmika"
}
wmap.add(a);
console.log(wmap);

var wset = new WeakMap();
let key1 ={

	id:1
}

let value1={

	name:"dharmika"
}

wset.set(key1,value1);
console.log(wset);
